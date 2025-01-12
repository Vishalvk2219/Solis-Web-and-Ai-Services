import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import "./navbar.css";
import logo from "./logo.png";
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
    // { name: "Log In", path: "/login" }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" exact>
        <img src={logo} alt="Solis Logo" className="logo-img" />
        </NavLink> {/* Use NavLink for Logo */}
      </div>
      {/* Navbar Links */}
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? "active-link" : "")} // Highlight active link
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
