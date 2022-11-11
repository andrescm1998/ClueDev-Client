import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { fetchEventSource } from "@microsoft/fetch-event-source";
// import {Modal} from '@mui/material'

function TestPage() {

    // async function checkAuth(){
    //     const response = await fetch('')
    //     const data = await response.json();
    // }

    const [params] = useSearchParams();
    const [data, setData] = useState([]);
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

    async function startSSE(){
      await fetchEventSource(`http://localhost:3000/sse`, {
              method: "POST",
              headers: {
                Accept: "text/event-stream",
              },
              onopen(res) {
                if (res.ok && res.status === 200) {
                  console.log("Connection made ", res);
                } else if (
                  res.status >= 400 &&
                  res.status < 500 &&
                  res.status !== 429
                ) {
                  console.log("Client side error ", res);
                }
              },
              onmessage(event) {
                console.log(event.data);
                const parsedData = JSON.parse(event.data);
                setData((data) => [...data, parsedData]);
              },
              onclose() {
                console.log("Connection closed by the server");
              },
              onerror(err) {
                console.log("There was an error from server", err);
              },
            });

    }

    useEffect(() => {
        sendCode();
        startSSE();
    }, [])
    
    useEffect(() => {
        // console.log(data);
    }, [data])



  return (
    <>
        <h1>You have been authorised to see this page</h1>
        
    </>
  )
}

export default TestPage;
