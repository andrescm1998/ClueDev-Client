import React, { useEffect, useState } from 'react';
import './index.css'
import  { RepositoryCard } from '../RepositoryCard';
import AttachRepoModal from '../AttachRepoModal';
import { useParams } from 'react-router-dom';



const Repositories = () => {
    const [repos, setRepos] = useState([]);
    const { workspace } = useParams();

    useEffect(() => {
        getRepos()
    }, [])

    console.log(repos)

    const getRepos = async () => {
        const options = {
            credentials: 'include'
          }
        const response = await fetch(`http://localhost:3000/repo/workspace?wsName=${workspace}`, options);
        const data = response.status === 200 ? await response.json() : [];
        setRepos(data)
    }


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
