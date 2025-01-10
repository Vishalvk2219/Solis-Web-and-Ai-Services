import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Array of navbar links (dynamic)
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Log In", path: "/login" }
    // Add more links as needed
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      {/* Navbar Links */}
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
      {links.map((link, index) => (
        <li key={index}>
          {/* Add conditional class to the "Log In" link */}
          <a
            href={link.path}
            className={link.name === "Log In" ? "login-link" : ""}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
