import React from 'react';
import {useState} from 'react'
import { Button } from '@mui/material'
import AvatarGroup from '@mui/material/AvatarGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Avatar from '@mui/material/Avatar';
import './index.css';
import { DeleteModal } from '../DeleteModal';
import { WorkspaceSettings } from '../WorkspaceSettings';

// hold ellipsis icon 
const dots = <FontAwesomeIcon icon ={faEllipsis} />

export const WorkspaceCard = ({ data }) => {

    const [showHide, setShowHide] = useState(false)
    const [counterLimit, setCounterLimit] = useState(5)

    
    const showHidden = (e) => {
        e.stopPropagation();
        setShowHide(!showHide)     
    }

    const handleCLick = () => {
        window.location.assign(`/${data.id}/${data.name}`)
        console.log('test')
    }

    return <>
        <div className='main-container' onClick={handleCLick} on>
            <div className='workspace-card-container'>
                        <div className="block">
                            <div className="block-header">
                                <h3>{data.name}</h3>
                                <Button sx={{padding: '3px', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', color: '#545151', minWidth: '10px'}} disableRipple onClick={showHidden}>{dots}</Button>
                            </div>
                            <AvatarGroup spacing={5} sx={{'& .MuiAvatar-root': { width: 28, height: 28, fontSize: 14, border: 0 }}} max={6} className="counters">
                                {data.collaborators.map((collaborator) => 

                                    <Avatar src={collaborator.ghAvatar} />
                                    
                                )}

                            </AvatarGroup>
                        </div>

                            <WorkspaceSettings id={data.id} showHide={showHide}/>
                        
                </div>
        </div>
    
    </>
}


