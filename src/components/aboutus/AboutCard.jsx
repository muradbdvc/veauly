import React from 'react';

export const AboutCard = ({ content }) => {
  return (
    <div className="cardabout">
      <div className="content-wrap">
        <div className="content-card">
          <div className="paragraphabout-2">{content.heading}</div>
          <div className="textsmall alignleft">
            {content.description}
          </div>
        </div>
        <div className="whyusdiv">
          <p className="paragraphabout-2">
            {content.details}
          </p>
        </div>
      </div>
    </div>
  );
};