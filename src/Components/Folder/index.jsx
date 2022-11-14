import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';
import { BackButton } from '../BackButton';
import { FolderFile } from '../FolderFile';

export const Folder = () => {

    const { repoid, repo, folder, sha } = useParams();
    const [contents, setContents] = useState([]);

    console.log(contents)

    useEffect(() => {
        getContents()
    }, [])

    const getContents = async () => {
        const options = {
            credentials: 'include'
          }
        const response = await fetch(`http://localhost:3000/folder/?sha=${sha}&repoid=${repoid}`, options);
        const data = response.status === 200 ? await response.json() : [];
        data.tree.sort((a, b) => a.mode - b.mode)
        setContents(data.tree)
    }

    return (
        <main className='folder-container'>

            <section className='header'>
                {/* folder name rendered from repo */}
                <h1>Repo name / Folder name</h1>
            </section>
            <hr/>

            {/* CONDITIONAL - if no files, render no files text, else render folder list */}
            {/* <h2>
            There are currently no files in this folder
            </h2> */}
            <section className='folder-list'>
            
                <section className='back-container'>
                    <BackButton />
                </section>

                {/* folder files component */}
                <FolderFile />

            </section>
        </main>
    )
}
