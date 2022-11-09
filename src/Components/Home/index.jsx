import React from 'react'
import {Typography, Button, Box} from '@mui/material'
import './index.css'

function Home() {

  async function auth(){
    const response = await fetch('http://localhost:3000/auth');
    // console.log(response);
    const data = await response.json();
    window.location.assign(data.url);
  }


  return (
    <Box id='home'>
        <Typography id='logo-name'>ClueDev</Typography>
        <Typography id='moto'>
            <em>Less merge conflicts.</em>
            <em>No misscommunication.</em>
            <em>No stress.</em>
        </Typography>
        <Button onClick={auth} variant='contained'  id='github-btn'>Sign-Up with Github</Button>
    </Box>
  )
}

export default Home
