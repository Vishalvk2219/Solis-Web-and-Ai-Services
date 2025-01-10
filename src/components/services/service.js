import React, { useState, useEffect, useCallback } from 'react';
import './service.css';

const Service = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      id: 1,
      title: 'Website Design',
      bgImage: 'url(https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg)', // Replace with your image path
      text: 'This is card 1 description',
    },
    {
      id: 2,
      title: 'SEO',
      bgImage: 'url(https://www.pixelstalk.net/wp-content/uploads/2016/07/Background-Beautiful-Nature-Images-HD.jpg)', // Replace with your image path
      text: 'This is card 2 description',
    },
    {
      id: 3,
      title: 'AI Integration',
      bgImage: 'url(https://images.unsplash.com/photo-1489829024224-f5ef0434a0ca?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Replace with your image path
      text: 'This is card 3 description',
    },
    {
      id: 4,
      title: 'Website Maintenance',
      bgImage: 'url(https://images.unsplash.com/photo-1502745785315-67f3193a7a10?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Replace with your image path
      text: 'This is card 4 description',
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
