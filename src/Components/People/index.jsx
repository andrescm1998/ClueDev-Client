import React from 'react';
import './index.css';

import { Counter } from '../Counter';

export const People = () => {
    return (
        <>
            <section className='people-container'>
                {/* persons github icon */}
                <Counter/>
                <h5 className='name'>Person name</h5>
                {/* map all files that person has a counter on */}
                <h5 className='file'>File name</h5>
            </section>
        </>
    )
}
