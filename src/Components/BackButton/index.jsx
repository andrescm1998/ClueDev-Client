import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export const BackButton = () => {

    const handleClick = () => {
        console.log("clicked");

    }


    return (
        <>
        <Link to="..">
            <button>
                <section className='back-button'>
                    <section className='circle back'/>
                    <section className='circle back'/>
                </section>
            </button>
        </Link> 
            
        </>
    )
}
