import React from 'react';
import './index.css';

export const Counter = ({ avatar }) => {

    // get request with id
    console.log(avatar)

    const styleObj = {
        padding: '10px',
        margin: '5px',
        borderRadius: '50%',
        backgroundImage: `url(${avatar})`,
        backgroundSize: 'cover',   
        backgroundColor: 'blue',
        width: '5px',
        height: '5px',
    }
    

    return (
        // insert image tied with response id
        <section style={styleObj}/>
    )
}
