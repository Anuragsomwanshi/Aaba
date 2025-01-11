import React from 'react'
import './Contact.css'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import mail from '../../assets/mail-icon.png'

const Contact = () => {
  return (
    <div id='Contact' className='Contact'>
      <h1>Contact</h1>

      <div className='contact-col-1'>


        
      </div>

      <div className="contact-col-2">

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id, earum hic deleniti voluptates consequuntur dicta sequi laboriosam sed itaque, quae, molestias autem neque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores debitis exercitationemcorporis vitae magnam impedit maxime est dicta! Asperiores.</p>
         <div className="address">
          <p> <img src={phone} alt="" /> 899999</p>
          <p> <img src={mail} alt="" />  raghunath@gmail.com</p>
          <p> <img src={location} alt="" /> mataji Nagar Latur 413512</p>

          </div>

         
          
         
         
        </div>


      
    </div>
  ) 
}

export default Contact