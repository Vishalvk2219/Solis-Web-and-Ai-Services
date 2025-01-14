import { database } from '../../firebaseConfig';  // Import the database from the config file
import { ref, push} from 'firebase/database';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  // Simple email regex for validation
  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent page refresh

    if (email && isValidEmail(email)) {
      // Reference to the "subscriptions" node in Firebase
      const subscriptionsRef = ref(database, "subscriptions");

      // Save the email to Firebase
      push(subscriptionsRef, {
        email: email,
        timestamp: new Date().toISOString(),
      })
        .then(() => {
          setSuccessMessage("Subscription successful! Thank you."); // Set success message
          setEmail(""); // Clear the input field
        })
        .catch((error) => {
          console.error("Error saving subscription: ", error);
          alert("Failed to subscribe. Please try again.");
        });
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <ul className="social-icons">
          <li><a href="https://www.facebook.com/profile.php?id=61571879549381" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
          <li><a href="https://www.instagram.com/solis.technologies?igsh=MXN2b3Z2ajlyNWdpdg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Get a Email from us</h3>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 SOLIS Technologies Pvt. Ltd. All rights reserved.</p>
        <ul>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
          {/* <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms-of-service">Terms of Service</Link></li> */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
