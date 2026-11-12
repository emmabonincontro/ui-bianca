import React from 'react';
import { WireframeButton } from './WireframeButton';

interface PageOneProps {
  onNext: () => void;
}

export const PageOne: React.FC<PageOneProps> = ({ onNext }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-white select-none">
      <WireframeButton label="avanti" onClick={onNext} direction="forward" />
    </div>
  );
};
