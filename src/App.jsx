import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Header, Dashboard } from './Components'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>

      <Route path='/' element={<Header />}>
        <Route index element={<Dashboard/>}/>
      </Route>
    </Routes>
  )
}

export default App
