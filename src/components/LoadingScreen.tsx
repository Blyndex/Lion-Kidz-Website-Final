import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content after a brief delay for smooth animation
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15 + 5; // Random progress increments
      });
    }, 100);

    // Complete loading after 1.5-2 seconds
    const completeTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        onLoadingComplete();
      }, 300); // Brief delay before hiding
    }, 1500 + Math.random() * 500); // Random duration between 1.5-2 seconds

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-50 flex items-center justify-center">
      <div className={`text-center transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {/* Spinning Logo */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto relative">
            {/* Outer ring animation */}
            <div className="absolute inset-0 border-4 border-transparent border-t-brand-pink border-r-brand-lime rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-transparent border-t-brand-lime border-r-brand-pink rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            
            {/* Logo in center */}
            <div className="absolute inset-4 bg-gray-800 rounded-full flex items-center justify-center">
              <img 
                src="/images/LionKidzLogo.png" 
                alt="Lion Kidz Photography" 
                className="w-12 h-12 object-contain animate-pulse"
              />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h1 className="font-alegreya text-3xl md:text-4xl text-white font-bold animate-fade-in">
            Lion Kidz Photography
          </h1>
          <p className="font-alegreya text-lg text-gray-300 animate-fade-in-delay">
            Capturing precious moments...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-brand-pink to-brand-lime h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="font-alegreya text-sm text-gray-400 mt-2">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-brand-pink rounded-full animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            />
          ))}
          {[...Array(4)].map((_, i) => (
            <div
              key={i + 6}
              className="absolute w-1 h-1 bg-brand-lime rounded-full animate-float"
              style={{
                left: `${70 + i * 10}%`,
                top: `${20 + (i % 2) * 60}%`,
                animationDelay: `${(i + 1) * 0.3}s`,
                animationDuration: `${2.5 + i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 