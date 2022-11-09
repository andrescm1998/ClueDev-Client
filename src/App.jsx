import React from 'react'
import {Routes, Route} from 'react-router-dom'
// import { Home, TestPage } from './Components';
import { Home, Header, Dashboard, Map, TestPage } from './Components';
import './App.css'

function App() {
  return (
    <Routes>
      
      <Route path='/' element={<Header />}>
        <Route index element={<Home/>}/>
        <Route path='/testpage' element={<TestPage/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Route>  
    </Routes>
  )
}

export default App;
