import React from 'react';
import { Link } from 'react-router-dom';

// Featured works data
const featuredWorks = [
  {
    id: 1,
    title: 'Reisfel',
    category: 'Branding',
    image: 'https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/690cec8f0b2d5d6f89b739e7_pexels-mira-ilina-2151041927-34499716-p-500.jpg',
    date: 'August 19, 2025',
    slug: 'reisfel'
  },
  {
    id: 2,
    title: 'Clairvy',
    category: 'Identity',
    image: 'https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/690cec8f0b2d5d6f89b739e7_pexels-mira-ilina-2151041927-34499716-p-500.jpg',
    date: 'September 19, 2024',
    slug: 'clairvy'
  },
  {
    id: 3,
    title: 'Racely',
    category: 'Branding',
    image: 'https://cdn.prod.website-files.com/68bf26087df8b22fd8bdbedd/690cec8f0b2d5d6f89b739e7_pexels-mira-ilina-2151041927-34499716-p-500.jpg',
    date: 'July 15, 2024',
    slug: 'racely'
  }
];

const Featured = () => {
  return (
    <div className="section">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects and discover how we've helped businesses transform their digital presence.
          </p>
        </div>
        
        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.map((work) => (
            <Link
              key={work.id}
              to={`/works/${work.slug}`}
              className="group block relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  loading="lazy"
                  src={work.image}
                  alt={`${work.title} - ${work.category} project`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay with category */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-violet-600 text-white text-sm font-medium rounded-full">
                      {work.category}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                  {work.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{work.category}</span>
                  <span>{work.date}</span>
                </div>
              </div>
              
              {/* Hover indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* View All Works Button */}
        <div className="text-center mt-12">
          <Link
            to="/works"
            className="inline-flex items-center px-6 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors"
          >
            View All Works
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Featured);