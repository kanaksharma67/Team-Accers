
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="loading-screen">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-32 h-32 border-4 border-purple-500/30 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-0 w-32 h-32 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
          <div className="absolute inset-4 w-24 h-24 border-4 border-pink-500/50 rounded-full animate-spin-slow"></div>
        </div>
        
        <h1 className="font-orbitron text-4xl font-bold text-gradient mb-4">ACCERS</h1>
        <p className="text-purple-300 mb-8">Powering Tomorrow with Innovation</p>
        
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-purple-400 mt-4 font-mono">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
