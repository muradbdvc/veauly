import React from "react";
import man from "./../../assets/man.jpg";

const testimonials = [
  {
    id: 1,
    name: "H. Rackham",
    company: "Carrot",
    image: man,
    text: "The team is efficient and reliable. They delivered everything they promised. I will definitely hire them again for future projects."
  },
  {
    id: 2,
    name: "S. Johnson",
    company: "TechCorp",
    image: man,
    text: "Outstanding work! They transformed our digital presence and exceeded our expectations. Highly recommend their services."
  },
  {
    id: 3,
    name: "M. Williams",
    company: "DesignHub",
    image: man,
    text: "Professional, creative, and deadline-oriented. They brought our vision to life better than we could have imagined."
  }
];

const Testimonial = () => {
  return (
    <div className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Trusted by Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg">
              {/* Quote Icon */}
              <div className="text-violet-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </blockquote>
              
              {/* Author Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
