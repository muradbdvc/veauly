import React from 'react';
import Heroimg from './../../assets/hero.png';
import './herocss.scss';

const Hero = () => {
  return (
    <div className="hero-site bg-black" >
      <div className="herosite">
        {/* Hero Image Container */}
        <div className="hero-image container">
          <img 
            loading="lazy" 
            src={Heroimg}
            alt="Hero Photography" 
            className="imagehero"
          />
          {/* Content Container */}
        <div className="z-10 w-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          {/* Title Container */}
          <div className="herotitle absolute top-65 left-50 right-50 z-100 text-center mb-8">
            <h1 
              className="text-hero-2 font-normal text-white tracking-tight"
              style={{
                //fontFamily: 'Inter, sans-serif',
                //fontWeight: 700,
                fontSize:'180px',
                transform: 'translateY(0)',
                opacity: 1,
                letterSpacing: '0.04em'
              }}
            >
              Veauly
            </h1>
          </div>
          
          {/* Description Container */}
          <div className="absolute bottom-20 left-30 right-30 hidden  hero-bot-content max-w-4xl mx-auto mb-16">
            <p className="text-white/90 text-lg md:text-xl text-center px-4">
              For over a decade, we've partnered worldwide with founders to shape bold identities that redefine markets.
            </p>
          </div>
          
          {/* Bottom Content - Design Agency and Services */}
          <div className="texthero flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 px-4">
            {/* Design Agency */}
            <div 
              className="creditsregister text-white text-xl md:text-2xl font-light"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                letterSpacing: '0.02em'
              }}
            >
              Design Agency<sup className="text-sm ml-1">&reg;</sup>
            </div>
            
            {/* Services */}
            <div 
              className="contentservices flex flex-col justify-center gap-2 md:gap-2 text-white text-base md:text-lg font-light"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                letterSpacing: '0.02em',
                fontSize: '16px',
              }}
            >
              <span>UX/UI Design</span>
              <span>Development</span>
              <span>Management</span>
            </div>
          </div>
        </div>
          
          {/* Blur Ellipse */}
          <div 
            className="blurelipse"
          ></div>
        </div>
        
        
      </div>
      
      {/* Responsive Styles */}
      <style jsx>{
       /* @media (max-width: 479px) {
          .imagehero {
            object-fit: cover !important;
            object-position: 50% 50% !important;
          }
          
          .herosite {
            flexFlow: row !important;
            gridColumnGap: 1px !important;
            gridRowGap: 16px !important;
            gridTemplateRows: auto !important;
            gridTemplateColumns: 1.5fr 1fr !important;
            gridAutoColumns: 1fr !important;
            justifyItems: stretch !important;
            height: 100vh !important;
            minHeight: auto !important;
            paddingBottom: 0 !important;
            paddingRight: 0 !important;
          }
          
          .blurelipse {
            backgroundColor: rgba(206, 206, 206, 0.2) !important;
          }
        }
        
        @media (min-width: 1280px) {
          .imagehero {
            object-fit: contain !important;
          }
          
          .herosite {
            flexFlow: row !important;
            display: flex !important;
          }
          
          .blurelipse {
            backgroundColor: rgba(206, 206, 206, 0.2) !important;
          }
        }
        
        @media (min-width: 1440px) {
          .imagehero {
            object-fit: contain !important;
          }
          
          .herosite {
            flexFlow: row !important;
            justifyItems: stretch !important;
            display: flex !important;
          }
        }
      */}</style>
    </div>
  );
};

export default React.memo(Hero);