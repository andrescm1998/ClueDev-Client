import React from 'react';
import { Button } from '@mui/material'
import { DeleteModal } from '../DeleteModal';
import {useState} from 'react'
import { EditModal } from '../EditModal';



export const WorkspaceSettings = ({showHide, id}) => {

    const icon = "delete";
    
     return (
        <>
        {showHide == true && 
            <section id="showBtns" className='container'>
                <EditModal id={id} />
                <div className="vl"></div>
                <DeleteModal id={id} />
            </section>}
            
        </>
    )

}
