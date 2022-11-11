import React from 'react';
import { useState } from 'react';
import './index.css';
import { BackButton } from '../BackButton';
import { FolderFile } from '../FolderFile';

export const Folder = () => {

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
