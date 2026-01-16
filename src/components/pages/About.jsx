import React from "react";
import { Button } from "../ui";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "rowina beauttyl",
      role: "the founder",
      image: "https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/68eecc46df7136837f248ff7_WCA2wZX4HDOq8t4oiproKXOw5E.avif",
      description: "A designer who blends creativity and strategy to turn bold ideas into meaningful experiences, crafting visuals that not only look good but truly connect with people."
    },
    {
      id: 2,
      name: "MAtias beauttyl",
      role: "Creative Lead",
      image: "https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/68eecc45b9aa8bce4e5c4c0f_2dZbAn2T48PE4uLkIMcKmgOE.avif",
      description: "A designer who blends creativity and strategy to turn bold ideas into meaningful experiences, crafting visuals that not only look good but truly connect with people."
    },
    {
      id: 3,
      name: "mara sanchez",
      role: "designer",
      image: "https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/68eecc46af13fb69aee8bc5c_x8Vvbn6HKQypY84DLO7MftOuFQ.avif",
      description: "A designer who blends creativity and strategy to turn bold ideas into meaningful experiences, crafting visuals that not only look good but truly connect with people."
    },
    {
      id: 4,
      name: "felipe vayre",
      role: "developer",
      image: "https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/68eecc45b46d7761d0f82e22_90COyTxcjHBBHhSI1zLPGjEEBGs.avif",
      description: "A designer who blends creativity and strategy to turn bold ideas into meaningful experiences, crafting visuals that not only look good but truly connect with people."
    }
  ];

  const clientLogos = [
    "https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/68bf26087df8b22fd8bdbeee_load.png",
    "https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/68bf26087df8b22fd8bdbf10_logowithname3.png",
    "https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/68bf26087df8b22fd8bdbef9_logowithname1.png",
    "https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/68bf26087df8b22fd8bdbf12_logowithname2.png",
    "https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/68bf26087df8b22fd8bdbeee_load.png",
    "https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/68bf26087df8b22fd8bdbef9_logowithname1.png",
    "https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/68bf26087df8b22fd8bdbeee_load.png",
    "https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/68bf26087df8b22fd8bdbf10_logowithname3.png",
    "https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/68bf26087df8b22fd8bdbef9_logowithname1.png",
    "https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/68bf26087df8b22fd8bdbf12_logowithname2.png",
    "https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/68bf26087df8b22fd8bdbeee_load.png",
    "https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/68bf26087df8b22fd8bdbef9_logowithname1.png"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-16 text-center">About</h1>
          
          {/* Hero Image with Caption */}
          <div className="max-w-6xl mx-auto mb-20">
            <img 
              src="https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/690cec8f0b2d5d6f89b739e7_pexels-mira-ilina-2151041927-34499716.jpg"
              alt="Artistic Photography"
              className="w-full rounded-lg"
            />
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-400">Artistic Photography</p>
              <p className="text-gray-400">2021</p>
            </div>
          </div>
          
          {/* Company Description */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We are a design studio dedicated to creating modern and effective brand experiences. Our work blends creativity with strategy to deliver solutions that truly connect. From identity to digital presence, we help businesses stand out in competitive markets.
            </p>
          </div>
          
          {/* Second Image */}
          <div className="max-w-6xl mx-auto mb-20">
            <img 
              src="https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/690cef08ae065bf6b13f55c8_pexels-hunain-bin-shahid-3617659-5506860.jpg"
              alt="Artistic Photography"
              className="w-full rounded-lg"
            />
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-400">Artistic Photography</p>
              <p className="text-gray-400">2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Expertise</h2>
            <p className="text-lg text-gray-300 mb-2">Expertise speaks volumes.</p>
            <p className="text-sm text-gray-400">2025®</p>
          </div>
          
          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <img 
                src="https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/690cec8f0b2d5d6f89b739e7_pexels-mira-ilina-2151041927-34499716.jpg"
                alt="Expertise 1"
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <img 
                src="https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/690cecdb7684b1b2205ef8f1_pexels-meum-mare-204165854-12639667.jpg"
                alt="Person with long hair blowing in the wind"
                className="w-full rounded-lg"
              />
            </div>
          </div>
          
          {/* Expertise Text */}
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our approach blends strategy and design to build brands that stand test of time. We dive deep into every detail to create meaningful, lasting connections.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Driven by precision and purpose, we shape bold visual systems that empower brands to lead. Every project reflects our passion for clarity and excellence.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our team transforms bold ideas into unique and memorable experiences that truly connect with people. From concept to execution, we combine strategy, creativity, and innovation to craft solutions that stand out and leave a lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The team</h2>
            <div className="text-6xl md:text-8xl font-thin">-</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-8">The Team</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold mb-2 lowercase">{member.name}</h3>
                <p className="text-gray-400 text-sm mb-4 lowercase">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Clients</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img 
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Clients Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Trusted by Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <div className="text-center">
              <img 
                src="https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/6913a132e170f790b6ed7984_avatar-sophie-moore-testimonials-webflow-cloneable-template-brix-templates.jpg"
                alt="Sophie Moore"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-300 mb-4 italic">
                "The team is efficient and reliable. They delivered everything they promised. I will definitely hire them again for future projects."
              </p>
              <p className="text-sm text-gray-400">H. Rackham, Carrot</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="text-center">
              <img 
                src="https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/6913a132e170f790b6ed798a_avatar-mike-warren-testimonials-webflow-cloneable-template-brix-templates.jpg"
                alt="Mike Warren"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-300 mb-4 italic">
                "The team is efficient and reliable. They delivered everything they promised. I will definitely hire them again for future projects."
              </p>
              <p className="text-sm text-gray-400">H. Rackham, Carrot</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="text-center">
              <img 
                src="https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/6913a132e170f790b6ed7987_avatar-adam-smith-testimonials-webflow-cloneable-template-brix-templates.jpg"
                alt="Adam Smith"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-300 mb-4 italic">
                "The team is efficient and reliable. They delivered everything they promised. I will definitely hire them again for future projects."
              </p>
              <p className="text-sm text-gray-400">H. Rackham, Carrot</p>
            </div>
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
              <p className="text-lg text-gray-300 leading-relaxed">
                Elevate your brand with a studio that brings strategy, design, motion, and technology together — delivering visuals that stand out, stories that resonate, and digital experiences built to perform.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Choosing the right studio matters — especially when your brand needs to stand out, move, and perform. We combine design, motion, and web to deliver work that makes an instant impact and keeps your audience engaged.
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

export default About;