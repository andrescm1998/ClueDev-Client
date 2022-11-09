import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home, Header, Dashboard, Map } from './Components';
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/' element={<Header />}> 
        <Route path='/map' element={<Map/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Route>  
    </Routes>
  )
}

export default App;
