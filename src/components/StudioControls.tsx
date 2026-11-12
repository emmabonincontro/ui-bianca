import React from 'react';
import { Volume2, VolumeX, Grid, Smartphone, RotateCcw } from 'lucide-react';

interface StudioControlsProps {
  currentPage: 1 | 2;
  onPageSelect: (page: 1 | 2) => void;
  showGuides: boolean;
  onToggleGuides: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  scaleMode: 'fit' | 'native';
  onToggleScale: () => void;
  onReset: () => void;
}

export const StudioControls: React.FC<StudioControlsProps> = ({
  currentPage,
  onPageSelect,
  showGuides,
  onToggleGuides,
  soundEnabled,
  onToggleSound,
  scaleMode,
  onToggleScale,
  onReset,
}) => {
  return (
    <header className="w-full bg-white border-b-2 border-black px-4 py-3 shrink-0 select-none z-40">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Left: Brand / Title */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-black bg-black flex items-center justify-center text-white font-mono font-bold text-sm">
            W
          </div>
          <div>
            <h1 className="text-sm font-bold font-mono tracking-tight text-black flex items-center gap-2">
              <span>WIREFRAME PROTOTYPE</span>
              <span className="text-[10px] font-normal border border-black px-1.5 py-0.5 rounded-none bg-neutral-100">
                iPhone 13 mini
              </span>
            </h1>
            <p className="text-[11px] font-mono text-neutral-600">
              Formato: 375 × 812 pt · B&amp;W Wireframe
            </p>
          </div>
        </div>

        {/* Center: Page Tabs / Switcher */}
        <div className="flex items-center gap-1 bg-neutral-100 p-1 border-2 border-black">
          <button
            type="button"
            onClick={() => onPageSelect(1)}
            className={`
              px-3 py-1 text-xs font-mono font-bold transition-colors cursor-pointer
              ${currentPage === 1 ? 'bg-black text-white' : 'text-black hover:bg-neutral-200'}
            `}
          >
            Pagina 1 (avanti)
          </button>
          <button
            type="button"
            onClick={() => onPageSelect(2)}
            className={`
              px-3 py-1 text-xs font-mono font-bold transition-colors cursor-pointer
              ${currentPage === 2 ? 'bg-black text-white' : 'text-black hover:bg-neutral-200'}
            `}
          >
            Pagina 2 (indietro)
          </button>
        </div>

        {/* Right: Studio Utility Actions */}
        <div className="flex items-center gap-2">
          {/* Guides Toggle */}
          <button
            type="button"
            onClick={onToggleGuides}
            title={showGuides ? 'Nascondi griglia/guide' : 'Mostra griglia/guide'}
            className={`
              flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono border-2 border-black transition-all cursor-pointer
              ${showGuides ? 'bg-black text-white' : 'bg-white text-black hover:bg-neutral-100'}
            `}
          >
            <Grid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Guide</span>
          </button>

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={onToggleSound}
            title={soundEnabled ? 'Disattiva feedback audio' : 'Attiva feedback audio'}
            className={`
              flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono border-2 border-black transition-all cursor-pointer
              ${soundEnabled ? 'bg-black text-white' : 'bg-white text-black hover:bg-neutral-100'}
            `}
          >
            {soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5" />
            ) : (
              <VolumeX className="w-3.5 h-3.5" />
            )}
            <span className="hidden sm:inline">Suono</span>
          </button>

          {/* Scale mode toggle */}
          <button
            type="button"
            onClick={onToggleScale}
            title="Alterna scala display"
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono border-2 border-black bg-white text-black hover:bg-neutral-100 transition-all cursor-pointer"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {scaleMode === 'fit' ? '100% Nativo' : 'Adatta'}
            </span>
          </button>

          {/* Reset button */}
          <button
            type="button"
            onClick={onReset}
            title="Ricomincia da Pagina 1"
            className="p-1.5 text-xs border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
