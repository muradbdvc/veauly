import React from 'react';
import './profile.scss';

const Profile = () => {
  return (
    <div className="profile-section">
      {/* Profile Hero Section */}
      <section className="profile-hero">
        <div className="container">
          <div className="profile-content">
            <h1 className="profile-title">Profile</h1>
            <p className="profile-subtitle indent-[3em]">
              We transform bold ideas into standout brands through strategy, design, and marketing — all seamlessly integrated
            </p>
            <div className='flex flex-row gap-[40em]'>
              <p className="profile-description">
                From day one, our mission has been to craft timeless identities that cut through the noise. Each year we collaborate with five teams to ensure unrivaled attention and dedication
              </p>
              <p className="profile-description">
                From day one, our mission has been to craft timeless identities that cut through the noise. Each year we collaborate with five teams to ensure unrivaled attention and dedication
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section bg-black">
        <div className="container">
          <div className="expertise-header flex flex-row justify-between">
            <h2 className="expertise-title">Expertise</h2>
            <p className="expertise-subtitle">Expertise speaks volumes.</p>
            <div className="year-badge">2025<sup>®</sup></div>
          </div>

          <div className="expertise-grid">
            <div className="expertise-image">
              <img 
                src="https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/690cec8f0b2d5d6f89b739e7_pexels-mira-ilina-2151041927-34499716.jpg" 
                alt="Expertise 1"
                loading="lazy"
              />
              <p className="expertise-text indent-[3em] m-10">
              Our approach blends strategy and design to build brands that stand the test of time. We dive deep into every detail to create meaningful, lasting connections.
            </p>
            </div>
            <div className="expertise-image">
              <img 
                src="https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/690cecdb7684b1b2205ef8f1_pexels-meum-mare-204165854-12639667.jpg" 
                alt="Expertise 2"
                loading="lazy"
              />
              <p className="expertise-text text-white m-10 indent-[3em]">
              Driven by precision and purpose, we shape bold visual systems that empower brands to lead. Every project reflects our passion for clarity and excellence.
            </p>
            </div>
          </div>
          </div>


      </section>
       {/* Creative Section */}
      <section className='service-section'>
        <div className="container">
          <div className="studio-badge flex flex-row">
            <div className="studio-text">
              <span className="creative">Creative</span>
              <span className="registered">®</span>
            </div>
            <div className="studio-text">
              <span className="studio">Studio</span>
            </div>
          </div>
          <h2 className="service-title">Service</h2>
          <div className="services flex flex-col gap-12">
            <span>Branding</span>
            <span>Design</span>
            <span>Marketing</span>
          </div>

        </div>
        
      </section>
    </div>
  );
};

export default React.memo(Profile);