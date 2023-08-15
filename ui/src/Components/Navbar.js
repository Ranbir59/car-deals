import React from "react";
import { Link } from "react-router-dom";

// import { useAuth0 } from "@auth0/auth0-react";

import "../CSS/Nav.css";

const Navbar = () => {
  // const { loginWithRedirect } = useAuth0();
  // const { logout } = useAuth0();
  // const {  isAuthenticated, } = useAuth0();

  return (
    <>
      <nav className="navbar navbar-expand-lg   ">
        <div className="container-fluid  ">
          <Link  className="navbar-brand text-white    " to="/">
            <span className="logo">CAR</span>DEALS
            {/* <img src="./" alt="" /> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0   ">
              <li className="nav-item    ">
                <Link className="nav-link  text-white " to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white  " to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link   text-white  " to="/vehicles">
                  Vehicles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link   text-white " to="/reviews">
                  Reviews
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link   text-white " to="/contact">
                  Contact Us
                </Link>
              </li>
              
              {/* {
                isAuthenticated?
                <li className="nav-item ">
                <button
                   className=" logout nav-link text-white mx-auto "
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Log Out
                </button>
              </li>:
              <li className="nav-item">
                <button
                  className=" login nav-link text-white mx-auto "
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </button>
              </li>
              } */}
              
            </ul>
          </div>
          {/* <li className="nav-item">
            <Link className="Cart  text-white " to="/cart">
              <img className="Cartimg" src={cart} alt="" />
            </Link>
          </li> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
