import React from 'react';
import './About.css';

const AboutUs = ({ theme = 'light' }) => {
  return (
    <div className={`app ${theme}`}>
      <div className="about-container">
        <div className="about-content">
          <div className="text-section">
            <h1 className="about-title">About Us</h1>
            <div className="about-text">
              <div className="paragraph-container">
                <p className="text-block">
                  At <span className="company-name">SOLIS</span>, we specialize in delivering high-quality digital solutions tailored to meet the unique needs of your business. Our team of skilled professionals provides a comprehensive range of services, including {' '}
                  <span className="highlight">
                    Web Development, Logo Designing, AI Chatbot Integration, Website Maintenance, SEO Optimization, and Customer Support
                  </span>.
                </p>
                <p className="text-block">
                  With years of experience in the industry, we take pride in building modern, user-friendly websites that not only look great but also perform flawlessly. Our Logo Design services help you create a memorable and impactful brand identity that resonates with your audience. We leverage AI technology to create intelligent chatbots that provide seamless customer service, boosting engagement and satisfaction.
                </p>
                <p className="text-block">
                  Our dedicated team ensures your website stays up-to-date with top-notch Website Maintenance and SEO services, helping you stay ahead of the competition and increase online visibility. Whether you're a startup or an established business, we are committed to providing ongoing Support and expert guidance every step of the way. Our goal is to empower your business with the tools it needs to thrive in the digital landscape.
                </p>
                <p className="text-block">
                  We emphasize building long-term partnerships with our clients by offering customized solutions and round-the-clock support. We understand that the digital world is constantly evolving, and we are here to help you adapt to changes, harness new opportunities, and overcome challenges. By prioritizing your success, we ensure that our strategies align with your goals, enabling your business to not just survive but excel in today's competitive market.
                </p>
              </div>
            </div>
          </div>
          
          <div className="media-section">
            <div className="media-content">
              <img 
                src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="About Us" 
                className="media-image"
              />
              <div className="image-overlay">
                <span className="overlay-text">Your Vision, Our Mission</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;