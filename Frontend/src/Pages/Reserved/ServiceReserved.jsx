import React, { useContext, useState } from 'react'
import './ServiceReserved.css'
import { StoreContext } from '../../Components/Context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ServiceReserved = () => {

  const navigate = useNavigate();

  const {token,cartItems,serviceList,url} = useContext(StoreContext);
  const [data,setData] = useState({

    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    phone:"",

  })

  const handleonChange = (event)=>{

    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const Reservedservice = async(event)=>{

    event.preventDefault();

    let serviceItems = [];

    serviceList.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item
        itemInfo['quantity'] = cartItems[item._id];
        serviceItems.push(itemInfo);
      }

    })
    


    let serviceData = {
      address:data,
      services:serviceItems,
    }

    let response = await axios.post(url+"/service/place",serviceData,{headers:{token}});
    if(response.data.success){

     console.log(response.data);

    }

    else{
      alert("Error");
    }



  }
  


  return (
    <div>

      <form onSubmit={Reservedservice} className='place-service'>
        <h1>Your Information</h1>

        <div className='userinfo userinfo-1'>

          <input  required     name='firstName'onChange={handleonChange} value={data.firstName} type="text" placeholder='First Name' />
          <input  required    name='lastName' onChange={handleonChange} value={data.lastName} type="text" placeholder='Last Name' />

        </div>

        <div className=' userinfo userinfo-2'>

          <input  required  name='email'onChange={handleonChange} value={data.email} type="email" placeholder='Email' />
          <input required  name='street' onChange={handleonChange} value={data.street} type="text" placeholder='street' />

        </div>


        <div className=' userinfo userinfo-3'>

          <input  required name='city'onChange={handleonChange} value={data.city} type="text" placeholder='city' />
          <input required  name='phone' onChange={handleonChange} value={data.phone} type="text" placeholder='phone' />

        </div>

        <button type='submit' onClick={()=>navigate('/myservice')} > Place service</button>



      </form>
    </div>
  )
}

export default ServiceReserved