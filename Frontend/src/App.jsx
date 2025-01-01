import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
import { Route, Router, Routes } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Cart'element={<Cart/>}/>
        <Route path='/order' />
      </Routes>
      
      <About/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default App