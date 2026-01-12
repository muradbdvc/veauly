import React from 'react';
import Heroimg from './../../assets/hero.png'

const Hero = () => {
  return (
    <div className="hero-site bg-black" style={{
      opacity: 1,
      pointerEvents: 'auto',
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'flex-start',
      minHeight: '350vh',
      position: 'relative',
      overflow: 'visible'
    }}>
      <div className="herosite" style={{
        zIndex: 1,
        gridColumnGap: '1px',
        gridRowGap: '1px',
        backgroundColor: 'transparent',
        flexFlow: 'column',
        gridTemplateRows: 'auto',
        gridTemplateColumns: '1.5fr 1fr',
        gridAutoColumns: '1fr',
        justifyContent: 'center',
        placeItems: 'center stretch',
        width: '100%',
        height: '100vh',
        minHeight: 'auto',
        display: 'flex',
        position: 'relative'
      }}>
        {/* Hero Image Container */}
        <div className="hero-imagecontainer" style={{
          mixBlendMode: 'normal',
          backgroundColor: '#110d5a',
          width: '100%',
          maxWidth: 'none',
          height: '100%',
          position: 'relative'
        }}>
          <img 
            loading="lazy" 
            src={Heroimg}
            alt="Hero Photography" 
            className="imagehero"
            style={{
              zIndex: 1,
              mixBlendMode: 'luminosity',
              objectFit: 'contain',
              width: '100%',
              height: '100%',
              position: 'relative'
            }}
          />
          {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          {/* Title Container */}
          <div className="herotitle text-center mb-8">
            <h1 
              className="text-hero-2 text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                transform: 'translateY(0)',
                opacity: 1
              }}
            >
              Veauly
            </h1>
          </div>
          
          {/* Description Container */}
          <div className="hero-bot-content max-w-4xl mx-auto mb-16">
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
              className="contentservices flex flex-wrap justify-center gap-4 md:gap-8 text-white text-base md:text-lg font-light"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                letterSpacing: '0.02em'
              }}
            >
              <span className="border-l border-white/30 pl-4 md:pl-8">UX/UI Design</span>
              <span className="border-l border-white/30 pl-4 md:pl-8">Development</span>
              <span className="border-l border-white/30 pl-4 md:pl-8">Management</span>
            </div>
          </div>
        </div>
          
          {/* Blur Ellipse */}
          <div 
            className="blurelipse"
            style={{
              zIndex: 0,
              aspectRatio: 1,
              opacity: 1,
              filter: 'blur(10rem)',
              backgroundColor: 'rgba(206, 206, 206, 0.2)',
              borderRadius: '50%',
              width: '60%',
              position: 'absolute',
              bottom: '50%',
              left: '50%',
              right: 'auto',
              transform: 'translate(-50%, 50%)'
            }}
          ></div>
        </div>
        
        
      </div>
      
      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 479px) {
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
      `}</style>
    </div>
  );
};

export default React.memo(Hero);