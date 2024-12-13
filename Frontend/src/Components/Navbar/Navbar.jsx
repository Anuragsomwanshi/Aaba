import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {


    const [menu,setMenu] = useState("Home");
  return (
    <div className='nav'>
        <div className="navmenu">
            <Link to='/' className='logo'>Aaba</Link>
            < a href='#Home' onClick={()=>setMenu('Home')}  className={`menu ${menu==='Home'?'active':''}`} >Home</a>
            <a href='#About' onClick={()=>setMenu('About')}  className={`menu ${menu==='About'?'active':''}`} >About</a>
            <a href='#Services' onClick={()=>setMenu('Services')}  className={`menu ${menu==='Services'?'active':''}`}>Services</a>
            <a href='#Contact' onClick={()=>setMenu('Contact')}  className={`menu ${menu==='Contact'?'active':''}`}>Contact</a>
            <button className='btnsign'> <a href="#Contact"></a>SignIn</button>
        
        </div>


    </div>
  )
}

export default Navbar