import React from 'react';
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTreeUrl } from '../../store/treeUrl'

import { Counter } from '../Counter';
import { useState } from 'react';

export const NewFile = ({ id, data, setFolderClick }) => {
    
    // console.log(urlFolder);
    const file = <FontAwesomeIcon icon={faFile}/>;
    const folder = <FontAwesomeIcon icon={faFolder}/>;
    const dispatch = useDispatch()


    function handleClick(){
        dispatch(setTreeUrl(data.url))
        setFolderClick(prev => !prev)
    }

    if (data.mode === "040000") {
        return (
            <>
            {/* map against files/folders from repo */}
            {/* if index/key !== 0, render hr element*/}
            { id !== 0 && <hr className='divider' />}
            <Link onClick={handleClick}  className='file-container'>

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
                    <Counter />
                    <Counter />
                    <Counter />
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

    return (
        <>
            {/* map against files/folders from repo */}
            {/* if index/key !== 0, render hr element*/}
            { id !== 0 && <hr className='divider'/>}
            <section className='file-container'>

                <section className='file-section'>
                    {/* file or folder icon rendered depending on repo */}
                    {/* <span className='icon'>{file}</span> */}
                    <span className='icon'>{ data.mode === "040000" ? folder : file }</span>
                    {/* folder name rendered from repo */}
                    <h4>{data.path}</h4>
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
