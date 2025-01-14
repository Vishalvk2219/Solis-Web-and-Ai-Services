import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "./logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null); // Create a ref for the navbar

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Function to handle clicks outside the navbar to close the menu
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    // Function to close the menu on scroll
    const handleScroll = () => {
      if (isOpen) {
        closeMenu(); // Close menu if it's open when user scrolls
      }
    };

    // Add event listeners
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]); // Re-run the effect whenever `isOpen` changes

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-logo">
        <NavLink to="/" exact onClick={closeMenu}>
          <img src={logo} alt="Solis Logo" className="logo-img" />
        </NavLink>
      </div>
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={closeMenu} // Close the menu when a link is clicked
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
