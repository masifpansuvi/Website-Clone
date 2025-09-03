import React from 'react'
import { Home } from './pages/export'
import {SellHome} from './pages/export'
import {Compare} from "./pages/export";
import {Works} from "./pages/export"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sellhome' element= {<SellHome />} />
        <Route path='/compare' element={<Compare />} />
        <Route path='/works' element={<Works />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App