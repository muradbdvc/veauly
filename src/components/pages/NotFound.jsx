import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* 404 Error Code */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-violet-600 opacity-80">
            404
          </h1>
        </div>
        
        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to where the creative magic happens.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="primary" 
            size="large" 
            onClick={handleGoHome}
            className="w-full sm:w-auto"
          >
            Go Home
          </Button>
          <Button 
            variant="outline" 
            size="large" 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto border-violet-600 text-violet-600 hover:bg-violet-50"
          >
            Go Back
          </Button>
        </div>
        
        {/* Decorative Elements */}
        <div className="mt-16 relative">
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
              filter: 'blur(3rem)'
            }}
          />
          <p className="text-white/60 text-sm relative z-10">
            Design Agency<sup className="text-xs">®</sup>
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NotFound);