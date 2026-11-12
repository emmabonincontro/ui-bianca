import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IPhone13MiniFrame } from './components/IPhone13MiniFrame';
import { PageOne } from './components/PageOne';
import { PageTwo } from './components/PageTwo';
import { StudioControls } from './components/StudioControls';
import { soundEffects } from './utils/audio';

export default function App() {
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);
  const [direction, setDirection] = useState<number>(1);
  const [showGuides, setShowGuides] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [scaleMode, setScaleMode] = useState<'fit' | 'native'>('fit');
  const [scaleFactor, setScaleFactor] = useState<number>(1);

  // Sync sound settings
  useEffect(() => {
    soundEffects.enabled = soundEnabled;
  }, [soundEnabled]);

  // Go to Pagina 2 (avanti)
  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentPage(2);
    soundEffects.playClick('forward');
  }, []);

  // Go to Pagina 1 (indietro)
  const handleBack = useCallback(() => {
    setDirection(-1);
    setCurrentPage(1);
    soundEffects.playClick('backward');
  }, []);

  // Handle direct page switch from controls
  const handlePageSelect = useCallback((targetPage: 1 | 2) => {
    if (targetPage === currentPage) return;
    setDirection(targetPage > currentPage ? 1 : -1);
    setCurrentPage(targetPage);
    soundEffects.playClick(targetPage > currentPage ? 'forward' : 'backward');
  }, [currentPage]);

  // Reset to Pagina 1
  const handleReset = useCallback(() => {
    setDirection(-1);
    setCurrentPage(1);
    soundEffects.playClick('backward');
  }, []);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid capturing input if inside an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (currentPage === 1) {
        if (e.key === 'ArrowRight' || e.key === 'Enter') {
          e.preventDefault();
          handleNext();
        }
      } else if (currentPage === 2) {
        if (e.key === 'ArrowLeft' || e.key === 'Escape' || e.key === 'Backspace') {
          e.preventDefault();
          handleBack();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, handleNext, handleBack]);

  // Dynamic viewport scale computation to fit iPhone 13 mini comfortably in viewport
  useEffect(() => {
    const computeScale = () => {
      if (scaleMode === 'native') {
        setScaleFactor(1);
        return;
      }

      // iPhone frame height is 836px + outer padding (approx 940px total with controls)
      const availableHeight = window.innerHeight - 150; // subtracting header & footer
      const availableWidth = window.innerWidth - 32;

      const scaleH = availableHeight / 860;
      const scaleW = availableWidth / 440;

      // Fit within bounds, capped at 1.05 and min 0.6
      const fit = Math.min(scaleH, scaleW, 1.0);
      setScaleFactor(Math.max(0.6, fit));
    };

    computeScale();
    window.addEventListener('resize', computeScale);
    return () => window.removeEventListener('resize', computeScale);
  }, [scaleMode]);

  // Animation variants for smooth mobile page transition
  const pageVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 375 : -375,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 350, damping: 32 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -375 : 375,
      opacity: 0,
      transition: {
        x: { type: 'spring' as const, stiffness: 350, damping: 32 },
        opacity: { duration: 0.15 },
      },
    }),
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-100 text-black overflow-x-hidden selection:bg-black selection:text-white">
      {/* Studio Header Toolbar */}
      <StudioControls
        currentPage={currentPage}
        onPageSelect={handlePageSelect}
        showGuides={showGuides}
        onToggleGuides={() => setShowGuides((prev) => !prev)}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled((prev) => !prev)}
        scaleMode={scaleMode}
        onToggleScale={() =>
          setScaleMode((prev) => (prev === 'fit' ? 'native' : 'fit'))
        }
        onReset={handleReset}
      />

      {/* Main Studio Canvas with Blueprint Wireframe Grid */}
      <div className="flex-1 w-full flex flex-col items-center justify-center p-4 sm:p-6 wireframe-blueprint-grid relative">
        {/* Subtle background technical wireframe crosshairs */}
        <div className="absolute top-4 left-6 text-[10px] font-mono text-neutral-400 select-none hidden md:block">
          <span>SEC: 01 // WIREFRAME VIEWPORT</span>
        </div>
        <div className="absolute top-4 right-6 text-[10px] font-mono text-neutral-400 select-none hidden md:block">
          <span>SCALE: {Math.round(scaleFactor * 100)}%</span>
        </div>

        {/* Scaled Phone Frame Container */}
        <div
          className="transition-transform duration-200 ease-out origin-center my-auto flex items-center justify-center"
          style={{
            transform: `scale(${scaleFactor})`,
            transformOrigin: 'center center',
          }}
        >
          <IPhone13MiniFrame showGuides={showGuides}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              {currentPage === 1 ? (
                <motion.div
                  key="page-1"
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full h-full"
                >
                  <PageOne onNext={handleNext} />
                </motion.div>
              ) : (
                <motion.div
                  key="page-2"
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full h-full"
                >
                  <PageTwo onBack={handleBack} />
                </motion.div>
              )}
            </AnimatePresence>
          </IPhone13MiniFrame>
        </div>

        {/* Bottom Technical Indicator & Keyboard Shortcuts */}
        <div className="mt-4 sm:mt-6 mb-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-[11px] font-mono text-neutral-600 bg-white border border-neutral-300 px-4 py-2 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black inline-block animate-pulse" />
            <span className="font-bold text-black uppercase">
              Stato: Pagina {currentPage} di 2
            </span>
          </div>

          <span className="hidden sm:inline text-neutral-300">|</span>

          <div className="flex items-center gap-2">
            <kbd className="px-1.5 py-0.5 bg-neutral-100 border border-neutral-400 text-black text-[10px]">
              {currentPage === 1 ? 'Invio / →' : 'Esc / ←'}
            </kbd>
            <span>
              {currentPage === 1
                ? 'per andare "avanti"'
                : 'per andare "indietro"'}
            </span>
          </div>

          <span className="hidden sm:inline text-neutral-300">|</span>

          <span className="text-neutral-500">
            iPhone 13 mini: 375 × 812 pt
          </span>
        </div>
      </div>
    </div>
  );
}
