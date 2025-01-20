import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import './List.css'
const List = ({url}) => {
  

  const [servlist, setServlist] = useState([]);

  const fetchservice = async () => {
    const response = await axios.get(`${url}/item/list`);
    

    if (response.data.success) {
      
      setServlist(response.data.data);
    } else {
      toast.error("error");
    }
  };

  const removeitem = async(itemid)=>{

    const response = await axios.post(`${url}/item/remove/`,{id:itemid});
    await fetchservice();

    if(response.data.success){
      toast.success(response.data.msg);

    }
    else{
      toast.error('error');
    }


  }

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
    <hr />

    {servlist.map((item,index)=>{

      return( <div key={index} className="list-format">

        <img  src={`${url}/images/`+item.image} alt="" />
        <p>{item.name}</p>
        <p>{item.category}</p>
        <p>{item.price}</p>
        <p onClick={()=>removeitem(item._id)}  className="cut-list">X</p>


      </div> )
    })}



  </div>





)
};

export default List;
