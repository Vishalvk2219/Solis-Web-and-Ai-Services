import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Fullhome from "./fullhome";
import ContactPage from "./components/contact01/contactus";
import About from "./components/about01/About";
import DynamicServicePage from "./components/services01/services";
import Navbar from "./components/navbar/navbar"; // Assuming Navbar is in components
import './theme.css'
import Footer from "./components/footer/footer";
import Locate from "./components/location/locate";
import ScrollToTop from "./components/scrolltotop";

function App() {
  return (
    <Router>
      <div className="homepage">
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Fullhome />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<DynamicServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      <Locate/>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
