import React from 'react';
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

import { Counter } from '../Counter';
import { useState } from 'react';

export const File = () => {

    const file = <FontAwesomeIcon icon={faFile}/>;
    const folder = <FontAwesomeIcon icon={faFolder}/>;
    return (
        <>
            {/* map against files/folders from repo */}
            {/* if index/key !== 0, render hr element*/}
            <hr className='divider'/>
            <section className='file-container'>

                <section className='file-section'>
                    {/* file or folder icon rendered depending on repo */}
                    {/* <span className='icon'>{file}</span> */}
                    <span className='icon'>{folder}</span>
                    {/* folder name rendered from repo */}
                    <h4>File/Folder name</h4>
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
