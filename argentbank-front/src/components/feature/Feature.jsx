import React from 'react'

export default function Feature({ title, imageSrc, altText, content }) {
  return (
    <div className="feature-item" key={title}>
      <img src={imageSrc} alt={altText} className="feature-icon" />
      <h3 className="feature-title">{title}</h3>
      <p>{content}</p>
    </div>
  );
}


