import React, { useEffect, useState } from 'react';
import './index.css'
import  { RepositoryCard } from '../RepositoryCard';
import AttachRepoModal from '../AttachRepoModal';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Repositories = () => {
    const { ws } = useSelector((state) => state.ws.value)
    const [repos, setRepos] = useState([]);
    const { workspace, wsid } = useParams();

    useEffect(() => {
        getRepos()
    }, [])

    console.log(repos)

    const getRepos = async () => {
        const options = {
            credentials: 'include'
          }
        const response = await fetch(`http://localhost:3000/repo/workspace?wsid=${wsid}`, options);
        const data = response.status === 200 ? await response.json() : [];
        setRepos(data)
    }


    return <>
        <main className='repo-container'>
            <section className='repo-wrapper'>
                <section className='repo-header'>
                    <h1>{workspace}</h1>
                    <section className='links'>
                        < AttachRepoModal repos={repos} setRepos={setRepos}/>
                        {/* on click of create button in modal will send data to create workspace card component  */}
                    </section>
                </section>

                <section>
                    <hr className='repo-hr'/>
                </section>
            </section>


                <section className='workspace-list'>
                    { repos.length === 0 && <p>There are no repositories, click the plus icon to add a new repository</p> }
                    <section className='workspaces-container'>
                        { repos.map(repo => <RepositoryCard key={repo.id} data={repo} />)}
                         {/* <RepositoryCard /> 
                         <RepositoryCard /> 
                         <RepositoryCard /> 
                         <RepositoryCard /> 
                         <RepositoryCard />  */}
                    </section>  
                </section>
            </main>
    </>
}

export default Repositories
