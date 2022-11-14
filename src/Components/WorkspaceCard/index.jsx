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

export const WorkspaceCard = ({ data }) => {

    const [showHide, setShowHide] = useState(false)

    console.log(data)

    
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
                            <div className="counters">
                                {data.collaborators.map(collaborator => {
                                    return <><span>< Counter avatar={collaborator.ghAvatar}/></span></>
                                })}
                                {/* <span>< Counter /></span>
                                <span>< Counter /></span>
                                <span>< Counter /></span> */}
                            </div>
                        </div>

                            <WorkspaceSettings id={data.id} showHide={showHide}/>
                        
                </div>
        </div>
    
    </>
}


