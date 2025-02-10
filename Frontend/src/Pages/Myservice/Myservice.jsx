import React, { useContext, useEffect, useState } from "react";
import "./Myservice.css";
import { StoreContext } from "../../Components/Context/StoreContext";
import axios from "axios";
import placeserv from "../../assets/placeserv.png";

const Myservice = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchservice = async () => {
    const response = await axios.post(
      url + "/reserved/userservice",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };
  console.log(data);

  useEffect(() => {
    if (token) {
      fetchservice();
    }
  }, [token]);

  return (
    <div className="myservice">
      <h2>My Reserved Service</h2>

      <div className="container">
        {data.map((service, index) => {

          return (

            <>

            <div className="head-serv">
                <p>Reserved</p>
                <p>Name</p>
                <p>Price</p>
                <p>Remove</p>
                
            </div>
            <hr />


            <div key={index} className="my-service">
              <div>
                {" "}
                {service.services.map((serv, index) => {
                  return (
                    <>
                    
                      <div key={index} className="subserv">
                        <img className="img-placeserv" src={placeserv} alt="" />
                        <p>{serv.name}</p>
                        <p>{serv.price+"₹"}</p>
                        <p>X</p>
                        
                      </div>
                      <hr />
                    </>
                  );
                })}{" "}
              </div>
            </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Myservice;
