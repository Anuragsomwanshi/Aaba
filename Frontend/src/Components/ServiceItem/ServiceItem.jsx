import React, { useContext,} from "react";
import "./ServiceItem.css";
import add from '../../assets/add.jpg'
import { StoreContext } from "../Context/StoreContext";
const ServiceItem = ({id, name, image, price }) => {

  const {addcart} = useContext(StoreContext);

  

 
  return (
    <div className="ser-item">
      <div className="ser-img">
        <img className="serimg"src={image}alt="" />
        <img className="add" src={add}onClick={()=>addcart(id)} alt=" "/>
        
      </div>

      <div className="nameprice">
        <p>{name}</p>
        <p className="price">{price}</p>
        
      </div>
    </div>
  );
};

export default ServiceItem;
