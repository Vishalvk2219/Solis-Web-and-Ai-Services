import React from "react";
import './App.css';
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Service from "./components/services/service";
import Moto from "./components/moto/moto";
import Footer from "./components/footer/footer";
import Contact from "./components/contactus/contact";
import Locate from "./components/location/locate";

function App() {
  return (
    <div className="homepage">
        <Navbar/>
        <Home/>
        <Service/>
        <Moto/>
        <Locate/>
        <Footer/>
        {/* <Contact/> */}

        
        
    </div>
  );
}

export default App;
