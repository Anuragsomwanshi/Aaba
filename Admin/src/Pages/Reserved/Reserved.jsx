import React from "react";
import "./Reserved.css";
import axios from "axios";

import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import placeserv  from '../../assets/placeserv.png'

const Reserved = ({ url }) => {
  const [reserved, setReserved] = useState([]);

  const fetchAllservice = async () => {
    const response = await axios.get(url + "/service/list");
    if (response.data.success) {
      setReserved(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchAllservice();
  }, []);

  return (
    <div className="reserved">
      <h3>Services page</h3>

      <div className="serv-list">
        {reserved.map((service,index) => {
          return (
          <div key={index} >

              {service.services.map((serv,index) => {
                return (
                  
                    <div key={index} className="serv-Items" >

                        <img  className="place-img" src={placeserv} alt="" />

                    <p>{serv.name}</p>
                    <p>{serv.price+"₹"}</p>
                      <p>
                        {service.address.firstName +
                          "  " +
                          service.address.lastName}
                      </p>
                      <p>{service.address.street + " ,"}</p>
                      <p>{service.address.city + ", "}</p>
                      <p>{service.address.phone + ", "}</p>
                      <p>{service.address.email + " "}</p>
                      
                    </div>
                  
                );
              })}
            </div>

            
          );
        })}
      </div>
    </div>
  );
};

export default Reserved;
