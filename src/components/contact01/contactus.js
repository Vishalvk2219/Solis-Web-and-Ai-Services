import React, { useState } from 'react';
import './contactus.css';
import { database } from '../../firebaseConfig';  // Import the database from the config file
import { ref, push, set } from 'firebase/database';  // Import required Firebase functions
import { 
  Mail, 
  User, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle 
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get a reference to the 'contactMessages' in the database
    const messagesRef = ref(database, 'contactMessages');
    
    // Push the form data to Firebase
    const newMessageRef = push(messagesRef);  // Push new message to Firebase
    set(newMessageRef, {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: new Date().toISOString()
    })
    .then(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      setStatus('Error sending message. Please try again.');
      console.error('Error sending message:', error);
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const highlights = [
    {
      icon: Clock,
      title: "24/7 Customer Support",
      subtitle: "Always here to help"
    },
    {
      icon: MapPin,
      title: "Global Reach",
      subtitle: "Serving clients worldwide"
    },
    {
      icon: Phone,
      title: "+91 6200253919",
      subtitle: "Direct line to experts"
    },
    {
      icon: MessageCircle,
      title: "Quick Response",
      subtitle: "Average response time: 2 hours"
    }
  ];

  return (
    <div className="contact-container">
      <h1 className="page-title">Get in Touch</h1>
      
      <div className="contact-sections">
        <div className="contact-form">
          <form onSubmit={handleSubmit} method="POST">
            <div className="form-row">
              <div className="form-group">
                <label>
                  <User className="info-icon" size={20} />
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  <Mail className="info-icon" size={20} />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>
                <MessageSquare className="info-icon" size={20} />
                Your Message
              </label>
              <textarea
                name="message"
                className="form-input"
                placeholder="How can we help you?"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              <Send size={20} />
              Send Message
            </button>
          </form>

          {status && <p className="status-message">{status}</p>}
        </div>

        <div className="contact-cards">
          {highlights.map((item, index) => (
            <div key={index} className="info-card">
              <div className="info-icon-wrapper">
                <item.icon size={24} />
              </div>
              <div className="info-content">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="whatsapp-section">
          <a href="https://wa.me/919631630866" className="whatsapp-button">
            <MessageCircle size={24} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
