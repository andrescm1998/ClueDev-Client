import React from 'react';
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

export const File = () => {

    const folder = <FontAwesomeIcon icon={faFolder}/>;
    return (
        <>
            <section className='file-container'>
                {/* file or folder icon */}
                <span className='icon'>{folder}</span>
                <h5>File/Folder name</h5>
                {/* map all collaborators and render counters */}
                {/* counter component */}
            </section>
        </>
    )
}
