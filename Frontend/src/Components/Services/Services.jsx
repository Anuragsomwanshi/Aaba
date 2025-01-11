import React, { useContext, useState,} from 'react'
import './Services.css'
import {category_List} from '../../assets/assets'
import { StoreContext } from '../Context/StoreContext'

import ServiceItem from '../ServiceItem/ServiceItem'


const Services = () => {
  const {services} = useContext(StoreContext);
  const [category,setCategory] = useState('All');
  
  return (
    <div id='Services' className='Services'>
      <h1>Services</h1>

      <p className='sertxt' >Here are the various categories of services are commanly used</p>
      <div className="category">
        {category_List.map((item,index)=>{
          
          return(
            
            <div key={index} className='container_category' onClick={()=>setCategory(prev=>prev===item.catName? "All":item.catName)}>
              <img src={item.catImg} alt=""  className={category === item.catName? "activecategory": " "} />
              <p>{item.catName}</p>
              </div>
          )
          })}

      </div  >
      <hr />

        <h1>Top Services Near You</h1>
      <div className='servicecontainer'>
        
        { services.map((item,index)=>{

          if(category ==='All'|| category === item.category){
            return(

              <ServiceItem key={index} id={item.id} name={item.name} image={item.img} price={item.price}  /> 
            )
          }

          
        })}


        
      </div>






    </div>
  )
}

export default Services