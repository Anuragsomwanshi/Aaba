import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import {Route, Routes} from 'react-router-dom'
import Add from './Pages/Add/Add'
import List from './Pages/List/List'




import { ToastContainer} from 'react-toastify';
import Reserved from './Pages/Reserved/Reserved'

function App() {

  const url = 'http://localhost:5000'
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />

      <div className="app-content">

        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add url={url}  />} />
          <Route path='/list' element={ <List  url={url} /> } />
          <Route path='/service' element={ <Reserved url={url}/> } />
          

        </Routes>


      </div>
    </div>
  )
}

export default App