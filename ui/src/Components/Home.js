import React from "react";
import Img from "../Images/Mer.jpg";
import Vid from "../Vidoes/video2.mp4";
import Range from "../Vidoes/Range.mp4";
import "../CSS/Home.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";

const Home = () => {
  const { user, isAuthenticated, } = useAuth0();
  return (
    <>
      <motion.div
        className="home-container"
   
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerHeight, transition: { duration: 0.1 } }}
      >
        <div className="row">
          <div className="container">   
            <div className="col-md-12">
              {/* <div>

            {
                  // isAuthenticated&& <p>{user.name}</p>
                }
              </div> */}
              <img className="img" src={Img} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
         
            <h2 className="Rangehead"> The New Range Rover 2022</h2>

            <Link to="vehicles">
              <button className="rangebtn">More Vehicles</button>
             
            </Link>
            <video className="vid" loop autoPlay muted src={Range}></video>
          </div>
          {/* <div className="col-md-12">
            <h3 className="heading">Buy Your Dream Car Now </h3>
            <Link to="vehicles">
              <button className="btn1">Buy Now</button>
            </Link>
            <video className="vid" loop autoPlay muted  src={Vid}></video>
          </div> */}
        </div>
      </motion.div>
    </>
  );
};

export default Home;
