import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Home from './Pages/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
import { Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import LogIn from './Components/LogIn/LogIn'
import Footer from './Components/Footer/Footer'



const App = () => {

  const [Login,setLogin] = useState(false);

  return (

    <> 
    {Login?<LogIn setLogin={setLogin}/>:<></>}
       <div className='app'>
      <Navbar  setLogin={setLogin} Login = {Login} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart'element={<Cart/>}/>
        
      </Routes>
      <Footer/>
      
     
    </div>
    </>

  )
}

export default App