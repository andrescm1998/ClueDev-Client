import React from 'react';
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from 'react-router-dom';

import { Counter } from '../Counter';
import { useState } from 'react';

export const File = ({ id, data }) => {
    const url = useLocation().pathname;
    const file = <FontAwesomeIcon icon={faFile}/>;
    const folder = <FontAwesomeIcon icon={faFolder}/>;

    const [counters, setCounters] = useState([]);
    const [hasCounter, setHasCounter] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation();
        if(!hasCounter) {
            setCounters(counters.concat(<Counter key={(counters.length)}/>));
            setHasCounter(true);
        }

        if(hasCounter) {
            setCounters([]);
            setHasCounter(false)
        }
        //emit click event
        //set counters
        // console.log("counters", counters);
        console.log("clicked"); 
    }

    if (data.mode === "040000") {
        return (
            <>
            {/* map against files/folders from repo */}
            {/* if index/key !== 0, render hr element*/}
            { id !== 0 && <hr className='divider' />}
            <Link to={`${url}/${data.path}/${data.sha}`} className='file-container'>

                <section className='file-section'>
                    {/* file or folder icon rendered depending on repo */}
                    {/* <span className='icon'>{file}</span> */}
                    <span className='icon'>{ folder }</span>
                    {/* folder name rendered from repo */}
                    <h4>{data.path}</h4>
                </section>

                <section className='counter-section'>
                    {/* map all collaborators and render counters */}
                    {/* counter component */}
                    {counters}
                </section>
            </Link>
        </>
        )
    } else {
        return (
            <>
            {/* map against files/folders from repo */}
            {/* if index/key !== 0, render hr element*/}
            { id !== 0 && <hr className='divider'/>}
            <section className='file-container'>

                <section className='file-section'>
                    {/* file or folder icon rendered depending on repo */}
                    {/* <span className='icon'>{file}</span> */}
                    <span className='icon'>{ file }</span>
                    {/* folder name rendered from repo */}
                    <h4>{data.path}</h4>
                </section>

                <section onClick={handleClick} className='counter-section'>
                    {/* map all collaborators and render counters */}
                    {/* counter component */}
                    {counters}
                </section>
            </section>
            </>
        )
    }
}
