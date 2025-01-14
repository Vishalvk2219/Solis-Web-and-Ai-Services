import React, { useState, useEffect, useCallback } from 'react';
import './service.css';

const Service = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      id: 1,
      title: 'Web Development',
      bgImage: 'url(https://wallpaperbat.com/img/183543-web-development-wallpaper-top-free-web-development-background.jpg)', // Replace with your image path
      text: 'We specialize in crafting modern, responsive, and user-friendly websites tailored to your business needs. From sleek landing pages to dynamic web applications, our team ensures top-notch performance, intuitive design, and seamless user experiences. Let us help bring your vision to life on the web.',
    },
    {
      id: 2,
      title: 'Logo Designing',
      bgImage: 'url(https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', // Replace with your image path
      text: 'A logo is the face of your brand, and we create designs that leave a lasting impression. Our logo designing services focus on delivering unique, professional, and visually captivating designs that resonate with your brand’s identity and values. Stand out with a logo that speaks for itself.',
    },
    {
      id: 3,
      title: 'AI Chatbot',
      bgImage: 'url(https://images.pexels.com/photos/17483874/pexels-photo-17483874/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-was-inspired-by-neural-networks-used-in-deep-learning-it-was-created-by-novoto-studio-as-part-of-the-visualising-ai-pr.png)', // Replace with your image path
      text: 'Enhance customer engagement and streamline operations with our AI-powered chatbot solutions. Designed to handle customer queries, provide personalized responses, and automate repetitive tasks, our chatbots are efficient, intelligent, and adaptable to your business requirements.',
    },
    {
      id: 4,
      title: 'Website Maintenance',
      bgImage: 'url(https://cdn.pixabay.com/photo/2018/05/22/09/45/laptop-3420932_1280.jpg)', // Replace with your image path
      text: 'Keep your website running smoothly with our reliable maintenance services. We handle updates, security checks, performance optimizations, and bug fixes to ensure your site stays fast, secure, and functional. Focus on your business while we take care of the technical details.',
    },
    {
      id: 5,
      title: 'SEO Services',
      bgImage: 'url(https://cdn.pixabay.com/photo/2022/12/21/04/01/laptop-7669027_1280.jpg)', // Replace with your image path
      text: 'Boost your online presence and drive organic traffic with our expert SEO services. We employ proven strategies to improve search engine rankings, optimize your website for relevant keywords, and enhance its visibility. Let us help your business get noticed by the right audience.',
    },
  ];

  const moveSlide = useCallback((direction) => {
    const newIndex = (currentIndex + direction + cards.length) % cards.length;
    setCurrentIndex(newIndex); 
  }, [currentIndex, cards.length]); 


  // Auto slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [moveSlide]);

  

  return (
    <div className="slider-container">
      <h1>SERVICES</h1>
      <button className="arrow left" onClick={() => moveSlide(-1)}>
        &#8592; 
      </button>
      <div className="slider-wrapper">
        <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {cards.map((card) => (
            <div
              className="card"
              key={card.id}
              style={{ backgroundImage: card.bgImage }}
            >
              <div className="card-content">
                <h2 className="card-title">{card.title}</h2>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="arrow right" onClick={() => moveSlide(1)}>
        &#8594;
      </button>
    </div>
  );
};

export default Service;
