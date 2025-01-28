import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sideoptions">

        < NavLink to='/add' className="sideoption">
          <img src={assets.add_icon} alt="" />
          <p>Add Service</p>
        </NavLink>


        < NavLink to="/list" className="sideoption">
          <img src={assets.list_item} alt="" />
          <p>List  Service</p>
        </NavLink>


       
      </div>
    </div>
  );
};

export default Sidebar;
