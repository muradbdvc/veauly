import React from "react";
import { Button } from "../ui";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-16 text-center">Contact</h1>
          
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto mb-20">
            {/* Founder */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Founder</h3>
              <p className="text-gray-700 mb-2">+549 (11111111111)</p>
              <a 
                href="mailto:nicodurso.design@gmail.com?subject=Hi"
                className="text-violet-600 hover:text-violet-700 transition-colors duration-300"
              >
                nicodurso.design@gmail.com
              </a>
            </div>
            
            {/* Co-Founder */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Co-Founder</h3>
              <p className="text-gray-700 mb-2">+549 (11111111111)</p>
              <a 
                href="mailto:nicodurso.design@gmail.com?subject=Hi"
                className="text-violet-600 hover:text-violet-700 transition-colors duration-300"
              >
                nicodurso.design@gmail.com
              </a>
            </div>
            
            {/* Address */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Adress</h3>
              <p className="text-gray-700">
                Random Direction 234, United States
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Hero Image */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto">
            <img 
              src="https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/690cf09ad3944b4e59043359_pexels-artem-korsakov-132129914-11117503.jpg"
              alt="Contact"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-4 mb-16">
            <h2 className="text-5xl md:text-7xl font-bold">Get</h2>
            <h2 className="text-5xl md:text-7xl font-bold">In</h2>
            <h2 className="text-5xl md:text-7xl font-bold">Touch</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-5xl md:text-7xl font-bold">Get</div>
            <div className="text-5xl md:text-7xl font-bold">In</div>
            <div className="text-5xl md:text-7xl font-bold">Touch</div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Why Work With Us</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold">Why us?</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Elevate your brand with a studio that brings strategy, design, motion, and technology together — delivering visuals that stand out, stories that resonate, and digital experiences built to perform.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Choosing right studio matters — especially when your brand needs to stand out, move, and perform. We combine design, motion, and web to deliver work that makes an instant impact and keeps your audience engaged.
              </p>
            </div>
            
            {/* Right Content - Metrics */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold">Metrics</h3>
              
              {/* Image */}
              <div className="mb-8">
                <img 
                  src="https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/693a9fa6d9bcfacb7be41b86_G7PqVf3LeT01PlfKnJ8iHiSz4.avif"
                  alt="Person working on laptop"
                  className="w-full rounded-lg"
                />
              </div>
              
              {/* Client Avatars */}
              <div className="flex justify-center space-x-4 mb-8">
                <img 
                  src="https://cdn.prod.website-files.com/69178967f7256e45b37c3bb5/69178967f7256e45b37c3ee0_avatar-sophie-moore-testimonials-webflow-cloneable-template-brix-templates.jpg"
                  alt="Client 1"
                  className="w-16 h-16 rounded-full"
                />
                <img 
                  src="https://cdn.prod.website-files.com/69178967f7256e45b37c3bb5/69178967f7256e45b37c3edf_avatar-mike-warren-testimonials-webflow-cloneable-template-brix-templates.jpg"
                  alt="Client 2"
                  className="w-16 h-16 rounded-full"
                />
                <img 
                  src="https://cdn.prod.website-files.com/69178967f7256e45b37c3bb5/69178967f7256e45b37c3ee1_avatar-adam-smith-testimonials-webflow-cloneable-template-brix-templates.jpg"
                  alt="Client 3"
                  className="w-16 h-16 rounded-full"
                />
              </div>
              
              {/* Stats */}
              <p className="text-2xl font-bold text-center">2M+ Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Talk CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Let's Talk</h2>
          <Link to="/contact">
            <Button variant="primary" size="large" className="text-lg px-12 py-4">
              Start
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;