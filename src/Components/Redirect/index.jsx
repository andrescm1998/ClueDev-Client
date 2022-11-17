import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './index.css'

function Redirect() {

  const [params] = useSearchParams();
  const user = useSelector(state => state.user.value);
  console.log('User: ', user)
    const code = params.get('code');
    const navigate = useNavigate();
    // const [isFound, setIsFound] = useState(false);


  async function sendCode() {
    console.log('Sending code....')
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
      
      navigate('/dashboard');
    }
    else{
      
      navigate('/')
    }
    
  }

  useEffect(() => {
    if(user.ghUsername){
      navigate('/dashboard')
    } else {
      sendCode()
    }

}, [])


  return (
    <main>
      <h1>You are being redirected...</h1>
    </main>
  )
}

export default Redirect
