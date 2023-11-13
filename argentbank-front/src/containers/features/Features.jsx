import React from 'react'
import "./features.css";
import iconChat from "../../assets/img/icon-chat.webp"
import iconMoney from "../../assets/img/icon-money.webp"
import iconSecurity from "../../assets/img/icon-security.webp"

const featuresData =
[
  {
      "title": "You are our #1 priority",
      "content": "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
      "imageSrc": iconChat,
      "altText" : "Chat icon"
  },
  {
      "title": "More savings means higher rates",
      "content": "The more you save with us, the higher your interest rate will be!",
      "imageSrc":iconMoney,
      "altText" : "money icon"
  },
  {
      "title": "Security you can trust",
      "content": "We use top of the line encryption to make sure your data and money is always safe.",
      "imageSrc":iconSecurity,
      "altText" :"Security icon" 
  }
]

function Features() {
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

export default Features;
