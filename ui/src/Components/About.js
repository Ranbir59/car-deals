import React from "react";
import Car from "../Images/aboutus1.cms";
import Phone from "../Images/pixel.jpg";
import store from "../Images/store.png";
import Part from'../Images/Partner.png'
import "../CSS/About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div className="About-container"
        initial={{width:0}}
        animate={{width:"100%"}}
        exit={{x : window.innerHeight ,transition:{duration: 0.1}}}>
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="habout">ABOUT US</h1>
            <hr className="hr1 " />
          </div>

          <div className=" abot1 col-md-6">
            <figure>
              <img className="Car" src={Car} alt="" />
            </figure>
          </div>

          <div className=" paraa col-md-6 text-md-start">
            <p>
              <span className="cardeals">CarDeals</span>
              .com is a leading digital marketplace and solutions provider for
              the automotive industry that connects car shoppers with sellers.
              Launched in 1998 and headquartered in Chicago, the Company
              empowers shoppers with the data, resources and digital tools
              needed to make informed buying decisions and seamlessly connect
              with automotive retailers. In a rapidly changing market,
              CarDeals.com enables dealerships and OEMs with innovative
              technical solutions and data-driven intelligence to better reach
              and influence ready-to-buy shoppers, increase inventory turn and
              gain market share. In 2018, CarDeals.com acquired Dealer Inspire®,
              an innovative technology company building solutions that
              future-proof dealerships with more efficient operations, a faster
              and easier car buying process, and connected digital experiences
              that sell and service more vehicles.CarDeals.com invented car
              search. Our site and innovative solutions connect buyers and
              sellers to match people with their perfect car. With our people
              spread across the U.S. we still maintain a startup culture with
              innovation and passion for our people at the core of everything we
              do.
            </p>
            <button className="Read1">Read More</button>
          </div>
          <div className="col-md-12">
            <h1 className="partner ">Our Partners</h1>
            <hr className="parthr" />
          </div>
          <div className="col-md-12">
            <figure>
              <img className="Partnimg"    src={Part} alt="" />
            </figure>
          </div>
          <div className="col-md-6">
            <figure>
              <img className="Phone" src={Phone} alt="" />
            </figure>
          </div>
          <div className="col-md-6 ">
            <h1 className="store">
              Our App is also Avialable on App Store & Play Store
            </h1>
            <a href="https://www.apple.com/in/app-store/">

            <figure>
              <img className="imgstore" src={store} alt="" />
            </figure>
            </a>
          </div>

          
          
        </div>
      </motion.div>
    </>
  );
};

export default About;

