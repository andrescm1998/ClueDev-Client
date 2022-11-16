import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { popUrl } from '../../store/treeUrl'

const FolderBackButton = ({setFolderClick}) => {
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(popUrl());
        setFolderClick(prev => !prev)
    }

    return (
        <>
        <Link onClick={handleClick}>
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

export default FolderBackButton
