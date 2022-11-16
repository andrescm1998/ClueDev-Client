import React from 'react';
import { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from '../Modal';
import { WorkspaceCard } from '../WorkspaceCard';
import './index.css'
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/user';
import { setWs } from '../../store/workspaces';

const Dashboard = () => {
    const [workspaces, setWorkspaces] = useState([])
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);

        getUser();
        getWorkspaces();
    }, [])

    const getUser = async () => {
        const options = {
            credentials: 'include'
          }
        const response = await fetch('http://localhost:3000/users', options);
        const data = response.status === 200 ? await response.json() : [];
        dispatch(setUser(data))

    }

    const getWorkspaces = async () => {
        const options = {
            credentials: 'include'
          }
        const response = await fetch('http://localhost:3000/workspace/user', options);
        const data = response.status === 200 ? await response.json() : [];
        console.log(data);
        setWorkspaces(data)
        dispatch(setWs(data))
        setLoading(false)
    }
        function showWorkspaces() {
            return (
                <>
                    <main className='dash-container'>
                        <section className='dash-wrapper'>
                            <section className='dash-header'>
                                <h1>Workspaces</h1>
                                <section className='links'>
                                    < Modal setWorkspaces={setWorkspaces} />
                                    {/* on click of create button in modal will send data to create workspace card component  */}
                                    {/* <Button onClick={buttonToggle}>Toggle</Button> */}
                                </section>
                            </section>
        
                            <section>
                                <hr className='dash-hr'/>
                            </section>
                        </section>
        
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
    
        return loading ? <h2><em>loading...</em></h2> : showWorkspaces();


}

export default Dashboard;
