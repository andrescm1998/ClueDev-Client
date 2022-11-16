import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { popUrl } from '../../store/treeUrl'

const FolderBackButton = ({setFolderClick}) => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.treeUrl.value)
    

    const handleClick = () => {
        // const le = value.length - 1;
        // console.log(le);
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
