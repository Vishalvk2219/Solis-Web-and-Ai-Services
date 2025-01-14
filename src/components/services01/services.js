import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Code,
  Paintbrush,
  Bot,
  Wrench,
  Search,
  Headphones,
  Check,
  X
} from 'lucide-react';
import './DynamicService.css';

const DynamicServicePage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies for your business needs.',
      icon: Code,
      features: [
        'Responsive design for all devices',
        'Modern frontend frameworks (React, Vue, Angular)',
        'Secure backend development',
        'Database integration and optimization',
        'Performance optimization'
      ],
      details: 'Our web development service combines cutting-edge technology with user-centric design principles. We create scalable, secure, and high-performance web applications tailored to your specific business requirements.'
    },
    {
      title: 'Logo Designing',
      description: 'Professional and memorable logo designs that represent your brand identity effectively.',
      icon: Paintbrush,
      features: [
        'Custom vector graphics',
        'Multiple design concepts',
        'Brand color consultation',
        'Scalable formats provided',
        'Unlimited revisions'
      ],
      details: 'Our logo design process focuses on creating unique, memorable brand identities that resonate with your target audience and stand the test of time.'
    },
    {
      title: 'AI Chatbot',
      description: 'Intelligent chatbot solutions to automate customer service and enhance user engagement.',
      icon: Bot,
      features: [
        'Natural Language Processing',
        'Custom training and learning',
        'Multi-platform integration',
        'Analytics and reporting',
        '24/7 automated responses'
      ],
      details: 'Our AI chatbots leverage advanced machine learning algorithms to provide intelligent, context-aware responses that improve customer satisfaction and reduce support costs.'
    },
    {
      title: 'Website Maintenance',
      description: 'Regular updates, security patches, and maintenance to keep your website running smoothly.',
      icon: Wrench,
      features: [
        'Regular security updates',
        'Performance monitoring',
        'Content updates',
        'Backup management',
        'Technical support'
      ],
      details: 'Keep your website secure, fast, and up-to-date with our comprehensive maintenance service. We handle all technical aspects so you can focus on your business.'
    },
    {
      title: 'SEO Services',
      description: 'Optimize your website\'s visibility and rank higher in search engine results.',
      icon: Search,
      features: [
        'Keyword research and optimization',
        'Content strategy',
        'Technical SEO audit',
        'Link building',
        'Performance tracking'
      ],
      details: 'Improve your online visibility and drive organic traffic with our data-driven SEO strategies tailored to your business goals.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your business runs without interruption.',
      icon: Headphones,
      features: [
        'Emergency response team',
        'Multiple support channels',
        'Issue tracking system',
        'Regular status updates',
        'Priority handling'
      ],
      details: 'Our dedicated support team is available 24/7 to resolve any technical issues and ensure your business operations run smoothly without interruption.'
    }
  ];

  const ServiceCard = ({ service }) => {
    const IconComponent = service.icon;
    return (
      <div className="service-card">
        <h3>
          <IconComponent className="service-icon" />
          {service.title}
        </h3>
        <p>{service.description}</p>
        <button className="learn-more" onClick={() => setSelectedService(service)}>
          Learn More
        </button>
      </div>
    );
  };

  const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;
    const IconComponent = service.icon;

    return (
      <div className={`service-modal-overlay ${service ? 'active' : ''}`} onClick={onClose}>
        <div className="service-modal active" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>
            <X />
          </button>
          <div className="modal-content">
            <h2>
              <IconComponent className="service-icon" />
              {service.title}
            </h2>
            <p>{service.details}</p>
            <div className="modal-features">
              <h3>Key Features:</h3>
              {service.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <Check className="feature-icon" size={20} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app light"> {/* Always light theme */}
      <div className="hero">
        <div className="hero-content">
          <h1>Transform Your Digital Presence</h1>
          <p>Innovative solutions for the modern business</p>
          {/* <button className="cta-button">Get Started</button> */}
        </div>
      </div>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}

      <div className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Let's discuss how we can help your business grow</p>
        <Link to="/contact">
        <button className="contact-button">Contact Us</button>
      </Link>
      </div>
    </div>
  );
};

export default DynamicServicePage;
