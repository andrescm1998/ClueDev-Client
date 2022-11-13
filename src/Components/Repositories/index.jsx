import React, { useEffect, useState } from 'react';
import './index.css'
import  { RepositoryCard } from '../RepositoryCard';
import AttachRepoModal from '../AttachRepoModal';
import { useParams } from 'react-router-dom';



const Repositories = () => {

    const { workspace } = useParams();


    return <>
        <main className='dash-container'>
                <section className='header'>
                    <h1>{workspace}</h1>
                    <section className='links'>
                        < AttachRepoModal />
                        {/* on click of create button in modal will send data to create workspace card component  */}
                    </section>
                </section>
                <hr/>
                <section className='workspace-list'>
                    <section className='workspaces-container'>
                         <RepositoryCard /> 
                         <RepositoryCard /> 
                         <RepositoryCard /> 
                         <RepositoryCard /> 
                         <RepositoryCard /> 

                        
                    </section>  
                </section>
            </main>
    </>
}

export default Repositories
