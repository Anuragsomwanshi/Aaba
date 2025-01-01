import React, { useContext,} from 'react'
import './Services.css'
import {category_List} from '../../assets/assets'
import { StoreContext } from '../Context/StoreContext'


const Services = () => {
  const {services} = useContext(StoreContext);
  const {category ,setCategory} = useContext(StoreContext);
  return (
    <div id='Services' className='Services'>
      <h1>Services</h1>

      <p>Here are the various categories of services are commanly used</p>
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

        <h1>Top services near you</h1>
      <div className='servicecontainer'>


      

        { services.map((item,index)=>{

          if(category ==='All'|| category === item.category){
            return(

              <div className="sercontain" key={index}>
                <img className='serimg' src={item.img} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
  
            </div>
            )



          }

          
        })}


        
      </div>






    </div>
  )
}

export default Services