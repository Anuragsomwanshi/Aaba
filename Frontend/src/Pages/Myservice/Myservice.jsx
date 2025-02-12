import React, { useContext, useEffect, useState } from "react";
import "./Myservice.css";
import { StoreContext } from "../../Components/Context/StoreContext";
import axios from "axios";
import placeserv from "../../assets/placeserv.png";

const Myservice = () => {
  const [data,setData] = useState([]);
  const { url,token } = useContext(StoreContext);

  const fetchservice = async() => {
    const response = await axios.post(url + "/service/userservice",{},{ headers:{ token }});
    setData(response.data.data);
  };
  

  useEffect(() => {
    if (token) {
      fetchservice();
    }
  }, [token]);

  return (
    <div className="myservice">
      <h2>My Reserved Service</h2>
      

      <div className="container">
        {data.map((service,index) => {
          return (
            <div key={index} className="my-service">
              {service.services.map((serv,index) => {
                    return (
                      
                        <div key={index} className="subserv">
                          <img
                            className="img-placeserv"
                            src={placeserv}
                            alt=""
                          />
                          <p>{serv.name}</p>
                          <p>{serv.price + "₹"}</p>
                          
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

export default Myservice;
