import React, { useState } from "react";
import Royal from "../Images/royal.jpg";
import "../CSS/Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;

  const handleinputs = (e) => {

    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
 
  const Postdata = async (e) => {
    e.preventDefault()
    const { firstname, lastname, phonenumber, email, address, message } = user;

  const res=await fetch('/contact',{

    method:"POST",
    headers :{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({firstname,lastname,phonenumber,email,address,message})

  })

    

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("DETAILS NOT SEND");
      console.log("DETAILS NOT SEND");
    } else {
      window.alert("DETAILS SEND ");
      console.log("DETAILS SEND ");
    }
  };

  return (
    <>
      <motion.section
        className="section-container"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerHeight, transition: { duration: 0.1 } }}
      >
        <div className="conatainer py-5">
          <div className="row">
            <div className="col-10 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="salesteam ">
                    Contact With Our <br /> Sales Team
                  </h1>
                  <p className="para ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo laudantium quae minima ratione sit placeat architecto
                    amet neque deserunt, fugit repellat facere a modi soluta
                    eveniet! Esse numquam obcaecati voluptatum.
                  </p>
                  <figure>
                    <img src={Royal} alt="" className="container-fluid" />
                  </figure>
                </div>
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST"  >
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="firstname"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={user.firstname}
                          onChange={handleinputs}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="lastname"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={user.lastname}
                          onChange={handleinputs}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="phonenumber"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          value={user.phonenumber}
                          onChange={handleinputs}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={user.email}
                          onChange={handleinputs}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          value={user.address}
                          onChange={handleinputs}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <textarea
                          name="message"
                          className="msarea"
                          id=""
                          cols="87"
                          rows="10"
                          placeholder="Enter Message"
                          value={user.message}
                          onChange={handleinputs}
                        ></textarea>
                      </div>
                    </div>
                    <br />
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />

                      <label
                        class="form-check-label"
                        className="main-hero-para "
                      >
                        I agree that the Car Deals may contact me at the email
                        address or phone number above fill.
                      </label>
                    </div>
                    <br />

                    <button
                      type="submit"
                      className="btn  btn-dark "
                      onClick={Postdata}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className=" Map col-md-12">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27468.39097855999!2d76.36501434051024!3d30.618485377317693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39101e9f571e29ed%3A0xf4625872624ed2c6!2sSirhind%2C%20Punjab%20140406!5e0!3m2!1sen!2sin!4v1661858976384!5m2!1sen!2sin"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
