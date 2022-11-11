import React from 'react'
import {Button, Box} from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Brands from '@fortawesome/fontawesome-free-brands';
import './index.css'

const github = <FontAwesomeIcon icon ={ Brands.faGithub } />

function Home() {

  async function auth(){
    const response = await fetch('http://localhost:3000/auth');
    // console.log(response);
    const data = await response.json();
    window.location.assign(data.url);
  }


  return (
    <Box id='home'>
        <h1 id='logo-name'>ClueDev.</h1>
        <section id='moto'>
            <p>Less merge conflicts.</p>
            <p>No miscommunication.</p>
            <p>No stress.</p>
        </section>
        <Button onClick={auth} variant='contained'  id='github-btn'><span >{github}</span>Sign in with GitHub</Button>
    </Box>
  )
}

export default Home
