// Home.js
import React from 'react';
import ReactPlayer from 'react-player';
import './home.css';

const Home = () => {
  return (
    <>
    <div className="home-container">
      <div className="text-container">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac neque vel
          augue luctus fringilla a et purus. Integer vel augue augue. Nullam sit amet
          efficitur purus. Integer ut orci dui.
        </h2>
      </div>
      <div className="video-container">
      <ReactPlayer
        url="/video/vid2.mp4"
        controls={false}
        width="100%" 
        height="100%"
        playing={true}
        loop={true}
        muted={true}
      />
      </div>
    </div>
    
    </>
  );
};

export default Home;
