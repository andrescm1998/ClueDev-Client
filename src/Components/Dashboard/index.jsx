import React from 'react';
import {useState} from 'react'
import { Button } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from '../Modal';
import { WorkspaceCard } from '../WorkspaceCard';
import './index.css'

const Dashboard = () => {
const [toggle, setToggle] = useState(true)

// Will possibly need a state here to hold repos attached as an array and another state to handle name change of workspace

const buttonToggle = () => {
        setToggle(!toggle)     
}

    return (
        <>
            <main className='dash-container'>
                <section className='header'>
                    <h1>Workspaces</h1>
                    <section className='links'>
                        < Modal />
                        {/* on click of create button in modal will send data to create workspace card component  */}
                        <Button onClick={buttonToggle}>Toggle</Button>
                    </section>
                </section>
                <hr/>
                <section className='workspace-list'>
                    <p className={toggle ? 'workspace-active': 'no-workspace-active' }>
                    There are no workspaces, click the plus icon to add a new workspace
                    </p>
                    <section className='workspaces-container'>
                        <WorkspaceCard /> 
                        <WorkspaceCard /> 
                        <WorkspaceCard /> 
                        <WorkspaceCard />
                        <WorkspaceCard />
                        <WorkspaceCard />
                    </section>  
                </section>
            </main>
        </>
      )

}

export default Dashboard;
