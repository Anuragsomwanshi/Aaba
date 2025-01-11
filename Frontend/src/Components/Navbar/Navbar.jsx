import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import Cart from '../../assets/Cart.jpg'


const Navbar = ({setLogin}) => {

  return (
    <div className='nav'>
      <div className="navmenu">

          
             <a href='/' className='logo'>Aaba</a>
            < a href='/' className= 'menu'>Home</a>
            <a href='#About'  className='menu'>About</a>
            <a href='#Services'  className= 'menu'>Services</a>
            <a href='#Contact'  className='menu'>Contact</a>
             <Link to={'/cart'}><img className='cartimg'  src={Cart} alt="" /></Link>
            <button onClick={()=> setLogin(true)} className='btnsign'>LogIn</button>
        
        </div>


    </div>
  )
}

export default Navbar;