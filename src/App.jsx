import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home, Header, Dashboard, NewMap, Folder, Repositories, Redirect } from './Components';
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      {/* Header route needs to be below Home route, so it won't show on the page */}
      <Route path='/' element={<Header />}>
        <Route path='/redirect' element={<Redirect/>}/>
        {/* <Route path='/map' element={<Map/>}/>
        <Route path='/map/folder' element={<Folder/>}/> */}
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/:wsid/:workspace'>
          <Route index element={<Repositories/>}/>
          <Route path=':repoid/:repo'>
            <Route index element={<NewMap/>}/>
          </Route>
        </Route>
      </Route>  
    </Routes>
  )
}

export default App;
