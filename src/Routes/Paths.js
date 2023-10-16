import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from '../elements/Navbar'

const Paths = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}></Route>
    </Routes>
  )
}

export default Paths
