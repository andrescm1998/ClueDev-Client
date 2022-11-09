import React from 'react'
import {Typography, Button, Box} from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import './index.css'

const plus = <FontAwesomeIcon icon ={faPlus} />

const Dashboard = () => {

    return (
        // <Box id='dashboard'>
        //     <section id='title'>
        //     <h1>Workspaces</h1>
        //     <Button id='plus'>+</Button>
        //     </section>
        //     <hr />
        //     <Typography id='starter-text'>
        //         <p>
        //         There are no workspaces, click the plus icon to add a new workspace
        //         </p>
        //     </Typography>
        // </Box>

        <main className='dash-container'>
            <section className='header'>
                <h1>Workspaces</h1>
                <section className='links'>
                    <Button className='addBtn'>{plus}</Button>
                </section>
            </section>
            <hr/>
            <section className='workspace-list'>
            <p>
              There are no workspaces, click the plus icon to add a new workspace
            </p>
                {/* <People /> */}
            </section>
        </main>
      )

}

export default Dashboard;
