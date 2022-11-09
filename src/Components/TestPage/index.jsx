import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
// import {Modal} from '@mui/material'

function TestPage() {

    // async function checkAuth(){
    //     const response = await fetch('')
    //     const data = await response.json();
    // }

    const [params] = useSearchParams();
    const code = params.get('code');

    async function sendCode(){

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                code: code
            })
        }

        const response = await fetch('http://localhost:3000/code', options);
        
    }

    useEffect(() => {
        sendCode();
    }, [])
    



  return (
    <>
        <h1>You have been authorised to see this page</h1>
        
    </>
  )
}

export default TestPage;
