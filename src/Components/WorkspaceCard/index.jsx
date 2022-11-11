import React from 'react';
import {useState} from 'react'
import { Button } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { Counter } from '../Counter';
import './index.css';
import { DeleteModal } from '../DeleteModal';
import { WorkspaceSettings } from '../WorkspaceSettings';

// hold ellipsis icon 
const dots = <FontAwesomeIcon icon ={faEllipsis} />

export const WorkspaceCard = () => {

    const [showHide, setShowHide] = useState(false)

    
    const showHidden = () => {
        setShowHide(!showHide)     
    }

    return <>
        <div className='main-container'>
            <div className='workspace-card-container'>
                        <div className="block">
                            <div className="block-header">
                                <h3>Workspace Name</h3>
                                <Button sx={{padding: '0', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', color: '#545151', minWidth: '10px'}} disableRipple onClick={showHidden}>{dots}</Button>
                            </div>
                            <div className="counters">
                                <span>< Counter /></span>
                                <span>< Counter /></span>
                                <span>< Counter /></span>
                            </div>
                        </div>
                
                        <WorkspaceSettings showHide={showHide}/>
                </div>
        </div>
    
    </>
}


