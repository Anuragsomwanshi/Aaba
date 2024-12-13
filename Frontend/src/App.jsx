import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default App