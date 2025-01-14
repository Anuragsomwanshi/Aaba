import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  return (
    <div>
      <Navbar />
      <hr />

      <div className="app-content">

        <Sidebar />


      </div>
    </div>
  )
}

export default App