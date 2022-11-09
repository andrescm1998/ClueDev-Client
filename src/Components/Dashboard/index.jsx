import React from 'react';
import { Button } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from '../Modal';
import './index.css'

const plus = <FontAwesomeIcon icon = {faPlus} />

const Dashboard = () => {

    return (
        <>
            <main className='dash-container'>
                <section className='header'>
                    <h1>Workspaces</h1>
                    <section className='links'>
                        <Button className='addBtn'>{plus}</Button>
                        < Modal />
                    </section>
                </section>
                <hr/>
                <section className='workspace-list'>
                <p>
                There are no workspaces, click the plus icon to add a new workspace
                </p>
                    {/* <Workspace /> */}
                </section>
            </main>

            <div>

            </div>
        </>
      )

}

export default Dashboard;
