import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import Cart from '../../assets/Cart.jpg'
import menu_icon from '../../assets/menu-icon.png'
import cross from '../../assets/cross.jpg'

const showmenu = ()=>{


}


const Navbar = ({setLogin}) => {

  return (
    <div className='nav'>
      <div className="navmenu">
        <a href='/' className='logo'>Aaba</a>
             <div className="nav-contain">
              <img src={cross} className='crossimg' alt="" />
            < a href='/' className= 'menu'>Home</a>
            <a href='#About'  className='menu'>About</a>
            <a href='#Services'  className= 'menu'>Services</a>
            <a href='#Contact'  className='menu'>Contact</a>
            </div>

            <img src={menu_icon} className='menu-icon'  alt="" />
           
             <Link to={'/cart'}><img className='cartimg'  src={Cart} alt="" /></Link>
            <button onClick={()=> setLogin(true)} className='btnsign'>LogIn</button>
        
        </div>


    </div>
  )
}

export default Navbar;