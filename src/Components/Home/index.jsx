import React from 'react'
import {Typography, Button, Box} from '@mui/material'

function Home() {
  return (
    <Box id='home'>
        <Typography id='logo-name'>ClueDev</Typography>
        <Typography id='moto'>
            <span>No merge conflicts.</span>
            <span>No misscommunication.</span>
            <span>No stress.</span>
        </Typography>
        <Button id='github-btn'>Sign Up with Github</Button>
    </Box>
  )
}

export default Home
