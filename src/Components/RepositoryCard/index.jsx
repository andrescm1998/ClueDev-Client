import React from 'react';
import {useState} from 'react'
import { Button } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Counter } from '../Counter';
import { DeleteRepo } from '../DeleteRepo';
import './index.css';
import { useLocation } from 'react-router-dom';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';

// hold ellipsis icon 
const xIcon = <FontAwesomeIcon icon ={faXmark} />

export const RepositoryCard = ({ data, setRepos }) => {
    const url = useLocation().pathname
    const [showHide, setShowHide] = useState(false)
    
    const showHidden = () => {
        setShowHide(!showHide)     
    }

    const handleCLick = () => {
        window.location.assign(`${url}/${data.id}/${data.name}`)
        console.log('test')
    }

    return <>
        <div onClick={handleCLick}>
            <div className="block workspace-card-container">
                <div className="block-header">
                    <h3>{data.name}</h3>
                    <DeleteRepo id={data.id} setRepos={setRepos} />
                </div>
                <AvatarGroup spacing={5} sx={{'& .MuiAvatar-root': { width: 28, height: 28, fontSize: 14, border: 0 }}} max={6} className="counters">
                    {data.collaborators.map((collaborator) => 

                        <Avatar src={collaborator.ghAvatar} />
                                    
                    )}
                </AvatarGroup>
            </div>
        </div>
    </>
}
