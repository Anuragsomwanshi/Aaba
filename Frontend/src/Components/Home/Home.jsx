import React from 'react'
import './Home.css'
import hero from "../../assets/h1.jpg"

const Home = () => {
  return (
    <div id='Home' className='Home'>
        <img className='heroimg' src={hero} alt="" />

        <div className='wrap'>
            <button>Get In Touch</button>
        </div>


    </div>
  )
}

export default Home