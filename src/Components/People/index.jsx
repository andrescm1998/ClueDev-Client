import React from 'react';
import './index.css';

import { Counter } from '../Counter';

export const People = () => {
    return (
        <>
            <section>
                <hr className='divider'/>
                <section className='people-container'>

                    <section className='person-section'>
                        {/* counter rendered based on github user */}
                        <Counter/>
                        {/* name rendered based on github user */}
                        <h4 className='name'>Person name</h4>
                    </section>

                    <section className='person-files'>
                        {/* map all files that person has a counter on */}
                        <h4 className='file'>File name1</h4>
                        <h4 className='file'>File name2</h4>
                    </section>

                </section>
            </section>
        </>
    )
}
