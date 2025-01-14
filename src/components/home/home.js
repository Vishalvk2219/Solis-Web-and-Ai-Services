import React from 'react';
import ReactPlayer from 'react-player';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Background Video */}
      <div className="video-background">
        <ReactPlayer
          url="https://cdn.pixabay.com/video/2023/03/22/155718-810722623_large.mp4"
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
          className="react-player-background"
        />
      </div>

      {/* Foreground Content */}
      <div className="content-overlay">
        <div className="text-container">
          <h1>SOLIS</h1>
          <h2>
            Transforming your ideas into reality with expert solutions, tailored to meet your unique needs and drive success.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
