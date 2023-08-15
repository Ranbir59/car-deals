import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Reviews from "./Reviews";
import Vehicles from "./Vehicles";
import Details from "./Details";
import { AnimatePresence } from "framer-motion";
import Cart from "./Cart";
import Loading from "./Loading";

const FramerRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="loading" element={<Loading />} />

        
      </Routes>


      
    </AnimatePresence>
  );
};

export default FramerRoute;
