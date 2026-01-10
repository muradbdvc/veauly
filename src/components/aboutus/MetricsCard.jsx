import React from 'react';

export const MetricsCard = ({ metrics, image }) => {
  return (
    <div className="cardabout orange">
      <div className="paragraphabout-2 metrics">{metrics.title}</div>
      <img src={image} alt="" className="img" />
      <div className="review-wrap">
        <div className="profile-wrap">
          {metrics.profiles.map((profile) => (
            <img 
              key={profile.id} 
              src={profile.image} 
              alt={profile.alt} 
              className="profile-img" 
            />
          ))}
        </div>
        <div className="textsmall">{metrics.stats}</div>
      </div>
    </div>
  );
};