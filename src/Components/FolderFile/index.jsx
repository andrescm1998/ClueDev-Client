import React from 'react';
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { Counter } from '../Counter';
import { useState } from 'react';

export const FolderFile = () => {

    const file = <FontAwesomeIcon icon={faFile}/>;

    return (
        <>
            <hr className='divider'/>
            <section className='file-container'>

                <section className='file-section'>
                    {/* file or folder icon rendered depending on repo */}
                    {/* <span className='icon'>{file}</span> */}
                    <span className='icon'>{file}</span>
                    {/* file name rendered from repo */}
                    <h4>File name</h4>
                </section>

                <section className='counter-section'>
                    {/* map all collaborators and render counters */}
                    {/* counter component */}
                    <Counter />
                    <Counter />
                    <Counter />
                </section>
            </section>
        </>
    )
}
