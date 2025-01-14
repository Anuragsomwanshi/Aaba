import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sideoptions">

        <div className="sideoption">
          <img src={assets.add_icon} alt="" />
          <p>Add Service</p>
        </div>


        <div className="sideoption">
          <img src={assets.list_item} alt="" />
          <p>List  Service</p>
        </div>


        <div className="sideoption">
          <img src={assets.reserved} alt="" />
          <p>Service Reserved</p>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
