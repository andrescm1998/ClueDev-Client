import React from 'react';
// import { Modal } from '@mui/material'
import './index.css'

const Modal = () => {

    // const [open, setOpen] = useState();

    // const openModal = () => {

    //     setOpen(true);
    // }

    // const closeModal = () => {

    //     setOpen(false);
    // }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 className='modal-title'>Create a new workspace</h4>
                </div>
                <div className='modal-body'>
                    Modal form will be here
                </div>
                <div className='modal-footer'>
                    <button className='create-button'>Create Workspace</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
