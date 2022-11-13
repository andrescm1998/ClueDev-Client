import React from 'react';
import { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from '../Modal';
import { WorkspaceCard } from '../WorkspaceCard';
import './index.css'

const Dashboard = () => {
    const [workspaces, setWorkspaces] = useState([])

    useEffect(() => {
        getWorkspaces();
    }, [])

    const getWorkspaces = async () => {
        const options = {
            credentials: 'include'
          }
        const response = await fetch('http://localhost:3000/workspace/user', options);
        const data = response.status === 200 ? await response.json() : [];
        setWorkspaces(data)
    }
    console.log(workspaces)

    return (
        <>
            <main className='dash-container'>
                <section className='header'>
                    <h1>Workspaces</h1>
                    <section className='links'>
                        < Modal setWorkspaces={setWorkspaces} />
                        {/* on click of create button in modal will send data to create workspace card component  */}
                        {/* <Button onClick={buttonToggle}>Toggle</Button> */}
                    </section>
                </section>
                <hr/>
                <section className='workspace-list'>
                    { workspaces.length === 0 && <p>There are no workspaces, click the plus icon to add a new workspace</p> }
                    <section className='workspaces-container'>
                        { workspaces.map(workspace => <WorkspaceCard key={workspace.id} data={workspace} />)}
                    </section>  
                </section>
            </main>
        </>
      )

}

export default Dashboard;
