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
                <h1>Repo name</h1>
                <section className='links'>
                    <button style={{fontWeight: filesSelected ? 'bold' : '', color: filesSelected ? 'black' : '#D2D2D2'}} className='mapBtn' onClick={selectFiles}>Files</button>
                    <button style={{fontWeight: peopleSelected ? 'bold' : '', color: peopleSelected ? 'black' : '#D2D2D2'}} className='mapBtn' onClick={selectPeople}>People</button>
                </section>
            </section>
            <hr/>

            <section className='repo-list'>
                {/* render based on selected */}
                {/* <People /> */}
                {filesSelected == true && <File />}
                {filesSelected == false && <People />}
     
            </section>
        </main>
    )
}

