import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { motion } from "framer-motion";

import "../CSS/Vehicles.css";
import Loading from "./Loading";

const Vehicles = () => {
  const [myData, setMyData] = useState([]);
  const [loading,setLoading]=useState(false)
  const [isError, setIsError] = useState("");

  const apidata = async () => {
    try {
      setLoading(true)
      const res = await axios.get("https://car-deals-bakend.vercel.app/cars");
      setMyData(res.data);
      setLoading(false)
    } catch (error) {
      setIsError(error.message);
      setLoading(false)
    }
  };


  useEffect(() => {
    
    apidata();
  }, []);

  if(loading){
    return <Loading/>
  }
  return (
    <>
      {isError !== "" && <h2>{isError}</h2>}

      <motion.div
        className="car-conatiner"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerHeight, transition: { duration: 0.1 } }}
      >
        <div className="row">
          <h1 className="veh">Vehicles Garage</h1>
          {/* <  hr  className='vehiclehr'/> */}
          {myData.map((veh) => {
            const { id, image, name, price } = veh;
            return (
              <div className="col-md-4" key={id}>
                <div className="vehcard py-3 ">
                  <img
                    className="card-img-top rounded "
                    src={image}
                    alt="Card image cap"
                  />
                  <div className="card-body ">
                    <h5 className="card-title">{name}</h5>
                    {/* <p className="card-text">PRICE: {price}</p> */}

                    <Link to={`/details/${id}`}>
                      <button className="Dbtn">View Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Vehicles;
