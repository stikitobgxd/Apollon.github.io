import './feature.css';

import React from 'react';

const Feature = ({ title, text }) => (
  <div className="crawenOS__features-container__feature">
    <div className="crawenOS__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="crawenOS__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;