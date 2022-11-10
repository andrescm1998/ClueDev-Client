import React from 'react';
import {useState} from 'react'
import { Button } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Modal from '../Modal';
import { Counter } from '../Counter';
import './index.css'

// hold ellipsis icon 
const dots = <FontAwesomeIcon icon ={faEllipsis} />

const Dashboard = () => {
const [toggle, setToggle] = useState(true)

const [showHide, setShowHide] = useState(false)

const buttonToggle = () => {
        setToggle(!toggle)     
}

const showHidden = () => {
    setShowHide(!showHide)     
}



    return (
        <>
            <main className='dash-container'>
                <section className='header'>
                    <h1>Workspaces</h1>
                    <section className='links'>
                        < Modal />
                        <Button onClick={buttonToggle}>Toggle</Button>
                    </section>
                </section>
                <hr/>
                <section className='workspace-list'>
                <p className={toggle ? 'workspace-active': 'no-workspace-active' }>
                There are no workspaces, click the plus icon to add a new workspace
                </p>
                    {/* <Workspace /> */}
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
                            <div className={showHide ? 'showOptions': 'hideOptions' }> 
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
                   
                </section>
            </main>

            <div>

            </div>
        </>
      )

}

export default Dashboard;
