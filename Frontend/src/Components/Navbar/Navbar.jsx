import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import Cart from '../../assets/Cart.jpg'
import menu_icon from '../../assets/menu-icon.png'
import cross from '../../assets/cross.jpg'
import { StoreContext } from '../Context/StoreContext'
import  profile from '../../assets/profile.png'
import logout from  '../../assets/logout.png';
import service from '../../assets/serv.png'




const Navbar = ({setLogin}) => {
  
  const {token ,setToken} = useContext(StoreContext); 
  const navigate = useNavigate();

  const [showmenu, setshowMenu] = useState(false);

  
  



  return (
    <div className='nav'>
      <div className="navmenu">
        {/* <a href='/' className='logo'>Aaba</a> */}

      <Link to={'/'} className='logo'>Aaba</Link>
        
             <div className={`nav-contain  ${showmenu===false?'navhide':""} `}>
              <img src={cross} onClick={()=>setshowMenu(false)}  className='crossimg' alt="" />
            < a href='/'  onClick={()=>setshowMenu(false)}   className= 'menu'>Home</a>
            <a href='#About' onClick={()=>setshowMenu(false)}  className='menu'>About</a>
            <a href='#Services' onClick={()=>setshowMenu(false)}   className= 'menu'>Services</a>
            <a href='#Contact' onClick={()=>setshowMenu(false)}  className='menu'>Contact</a>
            </div>

            <img src={menu_icon}  onClick={()=>setshowMenu(true)}  className='menu-icon'   alt="" />
           
             <img  onClick={()=> !token? alert("For Access More You should be LogIn"): navigate('/cart') } className='cartimg'  src={Cart} alt="" />

             {!token?  <button onClick={()=> setLogin(true)} className='btnsign'>LogIn</button> : <div className='navprofile'>
              <img   className='img-profile' src={profile} alt="" />
             <img onClick={()=> navigate('/myservice')} className='img-serv' src={service} alt="" />
               <img  onClick={()=>[setToken(''),navigate('/')]} className='img-logout'src={logout} alt=""/> 

             
             </div> }
           
        
        </div>


    </div>
  )
}

export default Navbar;