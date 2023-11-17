import React from 'react'
import "./features.css";
import {featuresData} from "../../data/data"

export default function Features() {
  return (
    <section className="features">
            <h2 className="sr-only">Features</h2>
            {featuresData.map(({ imageSrc, altText, title, content }) => (
                <div className="feature-item" key={title}>
                    <img src={imageSrc} alt={altText} className="feature-icon" />
                    <h3 className="feature-title">{title}</h3>
                    <p>{content}</p>
                </div>
            ))}
        </section>
  );
}


