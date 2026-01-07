
import React from 'react';

export const Logo: React.FC<{ className?: string, light?: boolean }> = ({ className = "h-12", light = false }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg viewBox="0 0 200 200" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Prata/Silver Frames */}
        <path d="M40 60 L140 60 L140 160 L40 160 Z" stroke="#A0A0A0" strokeWidth="8" />
        <path d="M70 30 L170 30 L170 130 L70 130 Z" stroke="#C0C0C0" strokeWidth="8" />
        
        {/* Orange X */}
        <path d="M85 65 L125 105 M125 65 L85 105" stroke="#ea580c" strokeWidth="15" strokeLinecap="round" />
        
        {/* TAB Text */}
        <text x="50%" y="190" textAnchor="middle" fill={light ? "white" : "#4b5563"} fontSize="28" fontWeight="bold" fontFamily="Arial">TAB</text>
      </svg>
    </div>
  );
};
