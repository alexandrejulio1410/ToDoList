import { BrowserRouter, Route, Routes, } from "react-router-dom";
import LandingPage from "../src/Components/Pages/LandingPage/LandingPage";
import About from "../src/Components/Pages/About/About";
import Signup from "./Components/Pages/Signup/Signup";
import React from "react";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/About" element={<About />}/>        
        <Route path="/Signup" element={<Signup />}/>
      </Routes>      
    </BrowserRouter>
  );
}

export default AppRoutes;
