import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home } from './Components';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default App
