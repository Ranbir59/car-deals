import React, { useState, useEffect } from "react";
import Images from "../Json/images.json";
import "../CSS/Details.css";
import { useParams } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import Loading from "./Loading";

const Details = () => {
  console.log(Images);
  const { id } = useParams();
  const [loading,setLoading]=useState(false)
  const [product, setProduct] = useState({});
  const [image, setImage] = useState({});

  const Handletoken = (token, addresses) => {
    console.log({ token, addresses });
  };

  const getproduct = async () => {
    try {
      setLoading(true)
      const res = await axios.get("https://car-deals-bakend.vercel.app/cars");

      const newProduct = res.data.find((item) => item.id === parseInt(id));
      setProduct(newProduct);
      setImage(newProduct.imgd);
      setLoading(false)
    } catch (error) {
      console.log(error.message);
      setLoading(false)
    }
  };

  useEffect(() => {
    getproduct();
  }, []);

  if(loading){
    return <Loading/>
  }

  return (
    <>
      {
        <div className="detail-container py-5">
          <div className="row">
            <div className=" detailcol col-md-7">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={image.imgd1} className="detail-img" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={image.imgd2} className="detail-img" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={image.imgd3} className="detail-img" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={image.imgd4} className="detail-img" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={image.imgd5} className="detail-img" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className=" Info col-md-5 text-md-start">
              <h1 className="detailName">{product.name}</h1>
              <hr className="detailhr" />
              <p className="detailpara">{product.para}</p>
              <h2 className="detailprice">{product.price}</h2>
              {/* <button onClick={buy} className="detailbtn"> 
                 Book Now */}
              <StripeCheckout
                className="stripe"
                stripeKey="pk_test_51LjJ0VSGNl7X5midzL6ljcNd13hkqzi5wCLzBXshP8VuL62tGhcS0ZCsJIPHIRfYpxN3qjHogMQ4flx5sLzSxYDE00t2xo9Oha"
                token={Handletoken}
                billingAddress
                shippingAddress
              />
              {/* </button> */}
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Details;
