import React from 'react';
import { useState } from 'react';
import './index.css';

import { People } from '../People';

export const Map = () => {

    const selectedButton = 'selected';

// STATE FOR SELECTED TAB (PEOPLE OR FILES)
    const [peopleSelected, setPeopleSelected] = useState(false);
    const [filesSelected, setFilesSelected] = useState(false);

    const selectFiles = () => {
        // e.target.className = 'mapBtn 1 selected'
        if(filesSelected == false) {
            setFilesSelected(!filesSelected);
        }


        if(peopleSelected == true) {
            setPeopleSelected(!peopleSelected);
        }
        console.log(filesSelected);
    }

    const selectPeople = () => {
        // e.target.className = 'mapBtn 2 selected'
        if(peopleSelected == false) {
            setPeopleSelected(!peopleSelected);
        }

        if(filesSelected == true) {
            setFilesSelected(!filesSelected);
        }  
        console.log(peopleSelected);
    }


    return (
        <main className='map-container'>

            <section className='header'>
                <h1>Repo name</h1>
                <section className='links'>
                    <button style={{fontWeight: filesSelected ? 'bold' : ''}} className='mapBtn' onClick={selectFiles}>Files</button>
                    <button style={{fontWeight: peopleSelected ? 'bold' : ''}} className='mapBtn' onClick={selectPeople}>People</button>
                </section>
            </section>
            <hr/>

            <section className='repo-list'>
                <People />
            </section>
        </main>
    )
}

