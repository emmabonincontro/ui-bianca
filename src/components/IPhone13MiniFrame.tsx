import React from 'react';

interface IPhone13MiniFrameProps {
  children: React.ReactNode;
  showGuides?: boolean;
}

export const IPhone13MiniFrame: React.FC<IPhone13MiniFrameProps> = ({
  children,
  showGuides = false,
}) => {
  return (
    <div className="relative select-none">
      {/* Dimension callouts for technical wireframe aesthetic */}
      <div className="hidden md:flex absolute -top-8 left-0 right-0 justify-between items-center px-2 text-[11px] font-mono text-neutral-500">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 border border-black inline-block" />
          <span>W: 375 pt</span>
        </span>
        <span className="text-black font-bold uppercase tracking-wider text-xs">
          iPhone 13 mini
        </span>
        <span className="flex items-center gap-1.5">
          <span>H: 812 pt</span>
          <span className="w-2 h-2 border border-black inline-block" />
        </span>
      </div>

      {/* Hardware Buttons on Outer Chassis (Left & Right) */}
      {/* Silent / Ring Switch */}
      <div
        className="absolute -left-[5px] top-[110px] w-[5px] h-[26px] bg-black border-l border-y border-black rounded-l-[3px]"
        title="Tasto Silenzioso"
      />
      {/* Volume Up */}
      <div
        className="absolute -left-[5px] top-[154px] w-[5px] h-[46px] bg-black border-l border-y border-black rounded-l-[3px]"
        title="Volume +"
      />
      {/* Volume Down */}
      <div
        className="absolute -left-[5px] top-[214px] w-[5px] h-[46px] bg-black border-l border-y border-black rounded-l-[3px]"
        title="Volume -"
      />
      {/* Power / Side Button */}
      <div
        className="absolute -right-[5px] top-[170px] w-[5px] h-[64px] bg-black border-r border-y border-black rounded-r-[3px]"
        title="Tasto Standby / Accensione"
      />

      {/* Outer Chassis */}
      <div className="relative w-[399px] h-[836px] bg-white border-[3px] border-black rounded-[54px] p-[12px] shadow-[12px_12px_0px_0px_#000]">
        {/* Antenna band slits (Wireframe details) */}
        <div className="absolute top-[80px] -left-[3px] w-[3px] h-[4px] bg-black" />
        <div className="absolute top-[80px] -right-[3px] w-[3px] h-[4px] bg-black" />
        <div className="absolute bottom-[80px] -left-[3px] w-[3px] h-[4px] bg-black" />
        <div className="absolute bottom-[80px] -right-[3px] w-[3px] h-[4px] bg-black" />

        {/* Screen Bezel & Container (Exact 375 x 812 pt viewport) */}
        <div className="relative w-[375px] h-[812px] bg-white border-2 border-black rounded-[42px] overflow-hidden flex flex-col">
          {/* Status Bar (iPhone 13 mini layout) */}
          <header className="relative w-full h-[44px] shrink-0 z-30 flex items-center justify-between px-7 pt-1 bg-white select-none pointer-events-none">
            {/* Left: Clock */}
            <div className="text-[13px] font-mono font-bold text-black tracking-tight">
              09:41
            </div>

            {/* Right: Cellular, Wi-Fi, Battery Wireframe Icons */}
            <div className="flex items-center gap-1.5 text-black">
              {/* Cellular signal bars */}
              <div className="flex items-end gap-[1.5px] h-3">
                <div className="w-[2.5px] h-1 bg-black" />
                <div className="w-[2.5px] h-1.5 bg-black" />
                <div className="w-[2.5px] h-2 bg-black" />
                <div className="w-[2.5px] h-2.5 bg-black" />
              </div>

              {/* Wi-Fi wireframe icon */}
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 13a10 10 0 0 1 14 0" />
                <path d="M8.5 16.5a5 5 0 0 1 7 0" />
                <path d="M12 20h.01" />
              </svg>

              {/* Battery wireframe icon */}
              <div className="flex items-center">
                <div className="w-5 h-2.5 border-[1.5px] border-black rounded-[2px] p-[1px] flex items-center">
                  <div className="w-full h-full bg-black rounded-[0.5px]" />
                </div>
                <div className="w-[1.5px] h-1 bg-black rounded-r-[1px] -ml-[0.5px]" />
              </div>
            </div>

            {/* iPhone 13 mini Notch (centered) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[146px] h-[28px] bg-black rounded-b-[18px] flex items-center justify-center">
              {/* Ear Speaker Slit */}
              <div className="w-10 h-1 bg-white/30 rounded-full mb-1" />
              {/* Front Camera Lens Dot */}
              <div className="absolute right-5 w-2.5 h-2.5 rounded-full border border-white/40 bg-black flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-white/20" />
              </div>
            </div>
          </header>

          {/* Screen Content Area (The two empty pages go here) */}
          <main className="relative flex-1 w-full overflow-hidden bg-white">
            {/* Optional Wireframe Alignment Guides */}
            {showGuides && (
              <div className="absolute inset-0 pointer-events-none z-20">
                {/* Center crosshairs */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-b border-dashed border-neutral-300" />
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 border-r border-dashed border-neutral-300" />
                {/* 16px Safe Margin Guides */}
                <div className="absolute inset-4 border border-dashed border-neutral-200" />
                {/* Center label */}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-8 text-[9px] font-mono text-neutral-400 bg-white px-1">
                  (187.5, 406)
                </span>
              </div>
            )}

            {children}
          </main>

          {/* Home Indicator Bar (bottom of iPhone) */}
          <footer className="relative w-full h-[34px] shrink-0 z-30 flex items-center justify-center bg-white pointer-events-none">
            <div className="w-[134px] h-[4.5px] bg-black rounded-full" />
          </footer>
        </div>
      </div>
    </div>
  );
};
