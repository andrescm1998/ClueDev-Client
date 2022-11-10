import React from 'react';
import { useState } from 'react';
import './index.css';

import { File } from '../File';
import { People } from '../People';

export const Map = () => {

    const selectedButton = 'selected';

// STATE FOR SELECTED TAB (PEOPLE OR FILES)
    const [peopleSelected, setPeopleSelected] = useState(false);
    const [filesSelected, setFilesSelected] = useState(true);

    const selectFiles = () => {
        // TOGGLE TAB CSS
        if(filesSelected == false) {
            setFilesSelected(!filesSelected);
        }

        if(peopleSelected == true) {
            setPeopleSelected(!peopleSelected);
        }

        // RENDER FILES COMPONENT
    }

    const selectPeople = () => {
        // TOGGLE TAB CSS
        if(peopleSelected == false) {
            setPeopleSelected(!peopleSelected);
        }

        if(filesSelected == true) {
            setFilesSelected(!filesSelected);
        }  

        // RENDER PEOPLE COMPONENT
    }


    return (
        <main className='map-container'>

            <section className='header'>
                {/* repo name rendered from repo */}
                <h1>Repo name</h1>
                <section className='links'>
                    <button style={{fontWeight: filesSelected ? 'bold' : '', color: filesSelected ? 'black' : '#D2D2D2'}} className='mapBtn' onClick={selectFiles}>Files</button>
                    <button style={{fontWeight: peopleSelected ? 'bold' : '', color: peopleSelected ? 'black' : '#D2D2D2'}} className='mapBtn' onClick={selectPeople}>People</button>
                </section>
            </section>
            <hr/>
            {/* CONDITIONAL - if no files, render no files text, else render folder list */}
            {/* <h2>
            There are currently no folders or files in this repository
            </h2> */}
            <section className='repo-list'>
                {/* render based on selected (file or people)*/}
                {/* <People /> */}
                {filesSelected == true && <><File /><File /></>}
                {filesSelected == false && <><People /><People /></>}
     
            </section>
        </main>
    )
}

