import React from 'react';
import {useState} from 'react'
import { Button } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Counter } from '../Counter';
import { DeleteRepo } from '../DeleteRepo';
import './index.css';
import { useLocation } from 'react-router-dom';

// hold ellipsis icon 
const xIcon = <FontAwesomeIcon icon ={faXmark} />

export const RepositoryCard = ({ data }) => {
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
            <div className="block">
                <div className="block-header">
                    <h3>{data.name}</h3>
                    <DeleteRepo id={data.id} />
                </div>
                <div className="counters">
                    {data.collaborators.map(collaborator => {
                        return <><span>< Counter avatar={collaborator.ghAvatar}/></span></>
                    })}
                </div>
            </div>
        </div>
    </>
}

