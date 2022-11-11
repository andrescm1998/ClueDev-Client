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
      credentials: 'include',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
          code: code
      })
    }

    const response = await fetch('http://localhost:3000/users/code', options);
    if(response.status === 200){
      // alert('✅✅✅')
      window.location.assign('/dashboard');
    }
    else{
      alert('❌❌❌')
      window.location.asign('/')
    }
    
  }

  useEffect(() => {
    sendCode();
}, [])


  return (
    <main>
      <h1>You are being redirected...</h1>
    </main>
  )
}

export default Redirect
