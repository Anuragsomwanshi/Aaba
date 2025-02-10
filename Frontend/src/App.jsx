import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import LogIn from './Components/LogIn/LogIn'
import Footer from './Components/Footer/Footer'
import ServiceReserved from './Pages/Reserved/ServiceReserved'
import Myservice from './Pages/Myservice/Myservice'



const App = () => {

  const [Login,setLogin] = useState(false);

  return (

    <> 
    {Login?<LogIn setLogin={setLogin}/>:<></>}
       <div className='app'>
      <Navbar  setLogin={setLogin} Login = {Login} />
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/reserved'element={ <ServiceReserved/> }/>
        <Route path= '/myservice'element={<Myservice/>}/>
        
        </Routes>
      <Footer/>
      
     
    </div>
    </>

  )
}

export default App