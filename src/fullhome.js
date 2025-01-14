import React from "react";
import './App.css';
import Home from "./components/home/home";
import Service from "./components/services/service";
import Moto from "./components/moto/moto";  // Make sure you have an About component

const Fullhome=()=> {
  return (
      <div className="homepage">
        {/* <Navbar/> */}
        <Home/>
        <Service/>
        <Moto/>
       </div>
  );
}

export default Fullhome;
