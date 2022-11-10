import React from 'react';
import Modal from '../Modal';
import './index.css'

const Repositories = () => {

    return <>
        <main className='dash-container'>
                <section className='header'>
                    <h1>Repositories</h1>
                    <section className='links'>
                        < Modal />
                        {/* on click of create button in modal will send data to create workspace card component  */}
                    </section>
                </section>
                <hr/>
                <section className='workspace-list'>
                    <section className='workspaces-container'>
                        {/* <WorkspaceCard /> 
                        <WorkspaceCard /> 
                        <WorkspaceCard /> 
                        <WorkspaceCard />
                        <WorkspaceCard />
                        <WorkspaceCard /> */}
                    </section>  
                </section>
            </main>
    </>
}

export default Repositories
