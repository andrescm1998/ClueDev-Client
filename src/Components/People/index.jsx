import React from 'react';
import './index.css';

import { Counter } from '../Counter';

export const People = () => {
    return (
        <>
            <section className='people-container'>

                <section className='person-section'>
                    {/* persons github icon */}
                    <Counter/>
                    <h5 className='name'>Person name</h5>
                </section>

                <section className='person-files'>
                    {/* map all files that person has a counter on */}
                    <h5 className='file'>File name</h5>
                    {/* <h5 className='file'>File name</h5>
                    <h5 className='file'>File name</h5> */}
                </section>
            </section>
        </>
    )
}
