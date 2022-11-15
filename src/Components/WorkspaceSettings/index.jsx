import React from 'react';
import { Button } from '@mui/material'
import { DeleteModal } from '../DeleteModal';
import {useState} from 'react'
import { EditModal } from '../EditModal';



export const WorkspaceSettings = ({showHide, id}) => {

    const icon = "delete";
    
    function handleEdit(e) {
        e.stopPropagation()
        return(
            <>
            <h1>hi</h1>
            </>
        )
    }
     return (
        <>
        {showHide == true && 
            <section id="showBtns" className='container'>
                <EditModal id={id} />
                <div class="vl"></div>
                <DeleteModal id={id} />
            </section>}
            
        </>
    )

}
