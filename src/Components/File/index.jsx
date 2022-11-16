import React from 'react';
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from 'react-router-dom';
import { Counter } from '../Counter';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const File = ({ id, data, socket, repoid }) => {
    const user = useSelector(state => state.user.value);

    const counterData = {
        userId: user.id,
        sha: data.sha,
        repoId: repoid
    }

    const url = useLocation().pathname;
    const file = <FontAwesomeIcon icon={faFile}/>;
    const folder = <FontAwesomeIcon icon={faFolder}/>;

    const [counters, setCounters] = useState([]);
    const [hasCounter, setHasCounter] = useState(false);

    console.log(counters, hasCounter)

    socket.on('updateCounters', (counters) => {
        let test = false
        const filtered = counters.reduce((acc, counter) => {
            if (counter.sha === data.sha) {
                if (counter.user_id === user.id) test = true;
                return acc.concat(<Counter/>)
            } else {
                return acc
            }
        }, [])

        setCounters(filtered)
        setHasCounter(test)
    })

    const handleClick = (e) => {
        e.stopPropagation();
        hasCounter ? socket.emit('deleteCounter', counterData) : socket.emit('addCounter', counterData)
        // if(!hasCounter) {
        //     socket.emit('addCounter', counterData)
        // }

        // if(hasCounter) {
        //     socket.emit('deleteCounter', counterData)
        //     // setCounters([]);
        //     // setHasCounter(false)
        // }
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
                    {/* {counters} */}
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
                    <span className='icon' style={ counters.length > 1 ? { color: '#EE4B2B' } : null}>{ file }</span>
                    {/* folder name rendered from repo */}
                    <h4 style={ counters.length > 1 ? { color: '#EE4B2B' } : null}>{data.path}</h4>
                </section>

                <section onClick={handleClick} className='counter-section' >
                    {/* map all collaborators and render counters */}
                    {/* counter component */}
                    {counters}
                    {/* {counters.map(counter => <Counter/>)} */}
                    {/* {counters.map(counter => <Counter/>)} */}
                </section>
            </section>
            </>
        )
    }
}
