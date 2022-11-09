import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home, TestPage } from './Components';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/testpage' element={<TestPage/>}/>
    </Routes>
  )
}

export default App
