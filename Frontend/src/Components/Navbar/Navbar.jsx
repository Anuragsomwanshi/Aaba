import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import Cart from '../../assets/Cart.jpg'


const Navbar = () => {

  return (
    <div className='nav'>
      <div className="navmenu">
            <Link to='/' className='logo'>Aaba</Link>
            < a href='#Home' onClick={()=>setMenu('Home')}  className= 'menu'>Home</a>
            <a href='#About' onClick={()=>setMenu('About')}  className='menu'>About</a>
            <a href='#Services' onClick={()=>setMenu('Services')}  className= 'menu'>Services</a>
            <a href='#Contact' onClick={()=>setMenu('Contact')}  className='menu'>Contact</a>
            <img className='cart' src={Cart} alt="" />
            <button className='btnsign'> <a href="#Contact"></a>SignIn</button>
        
        </div>


    </div>
  )
}

export default Navbar;