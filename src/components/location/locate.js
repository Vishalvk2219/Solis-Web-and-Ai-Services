import React from "react";
import "./locate.css";

const Locate = () => {
  return (
    <div className="locate-container">
      <div className="address-section">
        <h2>Our Address</h2>
        <p>12, Burari Chowk</p>
        <p>North Delhi, Delhi, 110084</p>
        <p>INDIA</p>
        <p>Phone: +91 6200253919</p>
        <p>Email: pvt.solistechnologies@gmail.com</p>
      </div>
      <div className="map-section">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55967.19520750162!2d77.15516609303099!3d28.7509187033839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01d4f896099f%3A0xd856071fa2f0c441!2sBurari%2C%20Delhi%2C%20110084!5e0!3m2!1sen!2sin!4v1736502039651!5m2!1sen!2sin"         
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Locate;
