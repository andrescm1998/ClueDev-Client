import React from 'react';
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export const File = () => {

    const file = <FontAwesomeIcon icon={faFile}/>;
    const folder = <FontAwesomeIcon icon={faFolder}/>;
    return (
        <>
            <section className='file-container'>

                <section className='file-section'>
                    {/* file or folder icon */}
                    {/* <span className='icon'>{file}</span> */}
                    <span className='icon'>{folder}</span>
                    <h5>File/Folder name</h5>
                </section>

                <section className='counter-section'>
                    {/* map all collaborators and render counters */}
                    {/* counter component */}
                    
                </section>
            </section>
        </>
    )
}
