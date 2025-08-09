import { Camera } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <Camera className="h-12 w-12 text-brand-pink animate-pulse" />
          <div className="absolute inset-0 border-4 border-brand-lime border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-white font-alegreya text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;