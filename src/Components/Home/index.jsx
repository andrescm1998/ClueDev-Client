import React from 'react'
import {Button, Box} from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Brands from '@fortawesome/fontawesome-free-brands';
import { Particle } from '../Particle';
import './index.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const github = <FontAwesomeIcon icon ={ Brands.faGithub } />

function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    let cookies = document.cookie.split(';');
    cookies = cookies.map(el => el.trim());

    console.log("cookies", cookies);
    
    cookies.forEach(cookie => {
      if (cookie.includes('ClueDev')){
        navigate('/dashboard')
      }
    })
    
    
  },[])

  async function auth(){
    const response = await fetch('http://localhost:3000/users/auth');
    // console.log(response);
    const data = await response.json();
    // console.log(data.url)
    window.location.assign(data.url);
  }


  return (
    <>
        <Particle className='bg-wrapper'/>
        <div id='home-container'>
          <h1 id='logo-name'>ClueDev</h1>
          <section id='moto'>
              <p>Less merge conflicts.</p>
              <p>No miscommunication.</p>
              <p>No stress.</p>
          </section>
          <Button onClick={auth} variant='contained' id='github-btn'><span >{github}</span>Sign in with GitHub</Button>
        </div> 
    </>

  )
}

export default Home
