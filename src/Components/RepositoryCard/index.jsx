import React from 'react';
import {useState} from 'react'
import { Button } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Counter } from '../Counter';
import { DeleteRepo } from '../DeleteRepo';
import './index.css';

// hold ellipsis icon 
const xIcon = <FontAwesomeIcon icon ={faXmark} />

 export const RepositoryCard = () => {

    const [showHide, setShowHide] = useState(false)
    
    const showHidden = () => {
        setShowHide(!showHide)     
    }

    return <>
    
    <div>
                        <div className="block">
                            <div className="block-header">
                                <h3>Repo Name</h3>
                                <DeleteRepo />
                            </div>
                            <div className="counters">
                                <span>< Counter /></span>
                                <span>< Counter /></span>
                                <span>< Counter /></span>
                            </div>
                        </div>
                    </div>
    
    </>
}

