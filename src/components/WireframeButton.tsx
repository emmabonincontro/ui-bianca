import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface WireframeButtonProps {
  label: 'avanti' | 'indietro';
  onClick: () => void;
  direction?: 'forward' | 'backward';
}

export const WireframeButton: React.FC<WireframeButtonProps> = ({
  label,
  onClick,
  direction = 'forward',
}) => {
  return (
    <div className="relative inline-block group">
      {/* Corner crosshairs for wireframe architectural feel */}
      <span className="absolute -top-2 -left-2 text-[10px] font-mono text-black select-none pointer-events-none opacity-60">
        +
      </span>
      <span className="absolute -top-2 -right-2 text-[10px] font-mono text-black select-none pointer-events-none opacity-60">
        +
      </span>
      <span className="absolute -bottom-2 -left-2 text-[10px] font-mono text-black select-none pointer-events-none opacity-60">
        +
      </span>
      <span className="absolute -bottom-2 -right-2 text-[10px] font-mono text-black select-none pointer-events-none opacity-60">
        +
      </span>

      <button
        type="button"
        onClick={onClick}
        className={`
          relative flex items-center justify-center gap-3
          w-56 h-14 sm:w-60 sm:h-14
          bg-white text-black
          border-2 border-black
          font-mono font-bold text-lg tracking-wider
          shadow-[4px_4px_0px_0px_#000]
          hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5
          active:shadow-none active:translate-x-1 active:translate-y-1
          hover:bg-black hover:text-white
          transition-all duration-150 ease-out
          focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black
          cursor-pointer select-none
        `}
      >
        {direction === 'backward' && (
          <ArrowLeft className="w-5 h-5 transition-transform duration-150 group-hover:-translate-x-1" strokeWidth={2.5} />
        )}
        <span>{label}</span>
        {direction === 'forward' && (
          <ArrowRight className="w-5 h-5 transition-transform duration-150 group-hover:translate-x-1" strokeWidth={2.5} />
        )}
      </button>
    </div>
  );
};
