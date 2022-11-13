import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home, Header, Dashboard, Map, Folder, Repositories, Redirect } from './Components';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home/>}/>
        <Route path='/redirect' element={<Redirect/>}/>
        {/* <Route path='/map' element={<Map/>}/>
        <Route path='/map/folder' element={<Folder/>}/> */}
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/:wsid/:workspace'>
          <Route index element={<Repositories/>}/>
          <Route path=':repoid/:repo'>
            <Route index element={<Map/>}/>
            <Route path=':folder/:sha' element={<Folder/>}/>
          </Route>
        </Route>
      </Route>  
    </Routes>
  )
}

export default App;
