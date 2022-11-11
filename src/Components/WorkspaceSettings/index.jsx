import React from 'react';
import { Button } from '@mui/material'
import { DeleteModal } from '../DeleteModal';

export const WorkspaceSettings = ({showHide}) => {
    return (
        <>
        {showHide == true && 
            <section id="showBtns" className='container'>
                <Button sx={{color: '#6429B0', padding: '6px 16px'}}>Edit</Button>
                <div class="vl"></div>
                <DeleteModal />
            </section>}
            
        </>
    )

}
