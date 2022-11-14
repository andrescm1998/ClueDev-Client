import React from 'react';
import { Button } from '@mui/material'
import { DeleteModal } from '../DeleteModal';

export const WorkspaceSettings = ({showHide, id}) => {
    console.log(id)
    const icon = "delete";
    
    function handleEdit(e) {
        e.stopPropagation()
    }
     return (
        <>
        {showHide == true && 
            <section id="showBtns" className='container'>
                <Button onClick={handleEdit} sx={{color: '#6429B0', padding: '6px 16px'}}>Edit</Button>
                <div class="vl"></div>
                <DeleteModal id={id} />
            </section>}
            
        </>
    )

}
