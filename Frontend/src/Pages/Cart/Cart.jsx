import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Components/Context/StoreContext";

const Cart = () => {
  const { cartItems, removecart, serviceList, url } = useContext(StoreContext);

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
        {serviceList.map((item, index) => {
         

          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="carttitle">
                  <img
                    src={url + "/images/" + item.image}
                    className="cartitemimg"
                    alt=""
                  />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
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
    </div>
  );
};

export default Cart;
