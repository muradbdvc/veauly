import React from 'react';

export const MetricsCard = ({ metrics, image }) => {
  return (
    <div className="gradient-violet-dark p-8 md:p-12 rounded-3xl text-white flex-1">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        {metrics.title}
      </h2>
      
      <img 
        src={image} 
        alt="Team collaboration" 
        className="w-full h-auto rounded-xl mb-8 object-cover"
      />
      
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="flex -space-x-4">
            {metrics.profiles.map((profile) => (
              <img 
                key={profile.id} 
                src={profile.image} 
                alt={profile.alt} 
                className="w-12 h-12 rounded-full border-2 border-white/30 object-cover"
              />
            ))}
          </div>
        </div>
        <p className="text-lg md:text-xl text-gray-100">
          {metrics.stats}
        </p>
      </div>
    </div>
  );
};