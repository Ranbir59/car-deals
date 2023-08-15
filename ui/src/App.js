import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Reviews from "./Components/Reviews";

import Vehicles from "./Components/Vehicles";
import { Routes, Route, useLocation } from "react-router-dom";

import Footer1 from "./Components/Footer1";
import Details from "./Components/Details";
import FramerRoute from "./Components/FramerRoute";
import Cart from "./Components/Cart";


function App() {
  return (
    <div className="App">
      <Navbar />
   

      {/* <Vehicles/> */}
      <FramerRoute />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
         <Route path="cart" element={<Contact />} />
      </Routes> */}

    
      {/* <Cart/> */}
      <Footer1 />
    </div>
  );
}

export default App;
