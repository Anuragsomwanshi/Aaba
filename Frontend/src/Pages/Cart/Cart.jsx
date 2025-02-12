import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Components/Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removecart, serviceList, url} = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cartItem">
        <div className="carttitle carttitle-head">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Remove</p>
          
        </div>
        <br />
        <hr />
        {serviceList.map((item,index) =>{

         
         

          if (cartItems[item._id] > 0){
            return (
              <div key={index}>
                <div className="carttitle">
                  <img
                    src={url + "/images/" + item.image}
                    className="cartitemimg"
                    alt=""
                  />
                  <p>{item.name}</p>
                  <p>{item.price+"₹"}</p>
                  <p onClick={() => removecart(item._id)} className="cut">
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }

          
          
        })}
      </div>
      <hr />

      <div className="btn-place">
        
        <button onClick={()=>navigate('/placeService')} >place service</button>
      
      </div>
      
    </div>
  );
};

export default Cart;
