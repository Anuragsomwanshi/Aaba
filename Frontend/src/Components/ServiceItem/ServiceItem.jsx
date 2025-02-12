import React, { useContext, useState,} from "react";
import "./ServiceItem.css";
import add from '../../assets/add.jpg'
import { StoreContext } from "../Context/StoreContext";
const ServiceItem = ({id, name,image,price}) => {

  const {addcart,url,token} = useContext(StoreContext);

  const [select,setSelect] = useState(false);

  

 
  return (
    <div className={`ser-item ${select===true?"blar":""}`}>
      <div className="ser-img">
        <img className="serimg "src={url+"/images/"+image}alt="" />
        <img className="add" src={add}onClick={()=> !token? alert("For Access More You Should LogIn First"):[addcart(id),setSelect(true)]} onDoubleClick={()=>[setSelect(false),removecart(id)]}  alt=" "/>
        
      </div>

      <div className="nameprice">
        <p>{name}</p>
        <p className="price">{ `${price}₹`}</p>
        
      </div>
    </div>
  );
};

export default ServiceItem;
