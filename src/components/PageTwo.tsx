import React from 'react';
import { WireframeButton } from './WireframeButton';

interface PageTwoProps {
  onBack: () => void;
}

export const PageTwo: React.FC<PageTwoProps> = ({ onBack }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-white select-none">
      <WireframeButton label="indietro" onClick={onBack} direction="backward" />
    </div>
  );
};
