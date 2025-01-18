import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import './List.css'
const List = () => {
  const url = "http://localhost:5000";

  const [servlist, setServlist] = useState([]);

  const fetchservice = async () => {
    const response = await axios.get(`${url}/item/list`);
    console.log(response.data);

    if (response.data.success) {
      console.log(response.data);
      setServlist(response.data.data);
    } else {
      toast.error("error");
    }
  };

  useEffect(() => {
    fetchservice();
  }, []);
return(

  <div className="form-col">
    <p>Here are all services</p>

    <div className="list-format">
     <b>Image</b>
     <b>Name</b>
     <b>Category</b>
     <b>Price</b>
     <b>Action</b>
    </div>

    {servlist.map((item,index)=>{

      return( <div key={index} className="list-format">

        <img  src={`${url}/images/`+item.image} alt="" />
        <p>{item.name}</p>
        <p>{item.category}</p>
        <p>{item.price}</p>
        <p  className="cut-list">X</p>


      </div> )
    })}



  </div>





)
};

export default List;
