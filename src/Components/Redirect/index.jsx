import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import './index.css'

function Redirect() {

  const [params] = useSearchParams();
    const [data, setData] = useState([]);
    const code = params.get('code');


  async function sendCode() {

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
          code: code
      })
    }

    const response = await fetch('http://localhost:3000/users/code', options);
    
  }

  useEffect(() => {
    sendCode();
    // startSSE();
}, [])


  return (
    <main>
      <h1>You are being redirected...</h1>
    </main>
  )
}

export default Redirect
