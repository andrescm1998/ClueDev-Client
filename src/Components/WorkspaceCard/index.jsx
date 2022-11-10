import React from 'react';
import {useState} from 'react'
import { Button } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { Counter } from '../Counter';
import './index.css';

// hold ellipsis icon 
const dots = <FontAwesomeIcon icon ={faEllipsis} />

export const WorkspaceCard = () => {

    const [showHide, setShowHide] = useState(false)

    
    const showHidden = () => {
        setShowHide(!showHide)     
    }

    return <>
    
    <div className="workspaces-container">
                        <div className="block">
                            <div className="block-header">
                                <h3>Workspace 1</h3>
                                <Button onClick={showHidden}>{dots}</Button>
                            </div>
                            <div className="counters">
                                <span>< Counter /></span>
                                <span>< Counter /></span>
                                <span>< Counter /></span>

                            </div>
                            <div id="" className={showHide ? 'showOptions': 'hideOptions' }> 
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-header">
                                <h3>Workspace 2</h3>
                                <Button>{dots}</Button>
                            </div>
                            <div className="counters">
                                <span>< Counter /></span>
                                <span>< Counter /></span>
                                <span>< Counter /></span>

                            </div>
                        </div>

                        <div className="block">
                            <div className="block-header">
                                <h3>Workspace 3</h3>
                                <Button>{dots}</Button>
                            </div>
                            <div className="counters">
                                <span>< Counter /></span>
                                <span>< Counter /></span>
                                <span>< Counter /></span>

                            </div>
                        </div>
                        <div className="block">
                            <div className="block-header">
                                <h3>Workspace 4</h3>
                                <Button>{dots}</Button>
                            </div>
                            <div className="counters">
                                <span>< Counter /></span>
                                <span>< Counter /></span>
                                <span>< Counter /></span>

                            </div>
                        </div>
                        <div className="block">
                            <div className="block-header">
                                <h3>Workspace 4</h3>
                                <Button>{dots}</Button>
                            </div>
                            <span>< Counter /></span>
                        </div>
                        <div className="block">
                            <div className="block-header">
                                <h3>Workspace 4</h3>
                                <Button>{dots}</Button>
                            </div>
                            <span>< Counter /></span>
                        </div>
                        
                    </div>
    
    </>
}


