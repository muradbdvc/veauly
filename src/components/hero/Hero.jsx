import React from 'react';
import Heroimg from './../../assets/hero.png'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          loading="lazy" 
          src={Heroimg}
          alt="Hero Photography" 
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
      </div>
      
      {/* Blur ellipse effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-beautique tracking-tight">
            Veauly
          </h1>
        </div>
        
        {/* Bottom Content */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {/* Design Agency */}
          <div className="font-outfit tracking-wide text-xl md:text-2xl font-light">
            Design Agency<sup className="text-sm ml-1">&reg;</sup>
          </div>
          
          {/* Services */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-outfit tracking-wide text-base md:text-lg font-light">
            <span className="border-l border-white/30 pl-4 md:pl-8">UX/UI Design</span>
            <span className="border-l border-white/30 pl-4 md:pl-8">Development</span>
            <span className="border-l border-white/30 pl-4 md:pl-8">Management</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);