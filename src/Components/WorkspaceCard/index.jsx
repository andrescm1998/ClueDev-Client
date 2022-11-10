import React from 'react';
import {useState} from 'react'
import { Button } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { Counter } from '../Counter';
import './index.css';
import { DeleteModal } from '../DeleteModal';

// hold ellipsis icon 
const dots = <FontAwesomeIcon icon ={faEllipsis} />

export const WorkspaceCard = () => {

    const [showHide, setShowHide] = useState(false)

    
    const showHidden = () => {
        setShowHide(!showHide)     
    }

    return <>
    
    <div>
                        <div className="block">
                            <div className="block-header">
                                <h3>Workspace Name</h3>
                                <Button disableRipple onClick={showHidden}>{dots}</Button>
                            </div>
                            <div className="counters">
                                <span>< Counter /></span>
                                <span>< Counter /></span>
                                <span>< Counter /></span>

                            </div>
                            <div id="showBtns" className={showHide ? 'showOptions': 'hideOptions' }> 
                                <Button>Edit</Button>
                                {/* <Button>Delete</Button> */}
                                <DeleteModal />
                            </div>
                        </div>
                    </div>
    
    </>
}


