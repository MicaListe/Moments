import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  return (
    <Routes>
      {/* <Route path='/' element={""}></Route>
      <Route path='/' element={""}></Route> */}
      <Route path='/' element={<Footer/>}></Route>
    </Routes>

      
  )
}

export default App
