import React from 'react';
import { useState, useEffect } from 'react';
import './index.css';
import { useParams } from 'react-router-dom';
import { NewFile } from '../File';
import { People } from '../People';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import FolderBackButton from '../FolderBackButton';
import loadSvg from '../../assets/loading.svg'

export const NewMap = () => {

    const { repoid, repo } = useParams();
    const [folderClick, setFolderClick] = useState(false);
    const [loading, setLoading] = useState(true);
    const [contents, setContents] = useState([]);
    const treeUrl = useSelector(state => state.treeUrl.value)

    const newSocket = io('http://localhost:3000');
    newSocket.emit('create', `${repoid}`)

    useEffect(() => {
        setLoading(true);
        console.log('This is current tree:', treeUrl)
        if(treeUrl.length === 0){
            getContents()
        }else{
            
            getFolderContents(treeUrl.length)
        }
        
    }, [folderClick])

    const getContents = async () => {
        const options = {
            credentials: 'include'
          }
        const response = await fetch(`http://localhost:3000/repo/${repoid}`, options);
        const data = response.status === 200 ? await response.json() : [];
        data.tree.sort((a, b) => a.mode - b.mode)
        console.log(data.tree)
        setContents(data.tree)
        setLoading(false)
    }

    const getFolderContents = async (treeL) => {
        const options = {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                url: treeUrl[(treeL-1)]
            })
        }
        const response = await fetch(`http://localhost:3000/folder/`, options);
        const data = response.status === 200 ? await response.json() : [];
        data.tree.sort((a, b) => a.mode - b.mode)
        setContents(data.tree)
        setLoading(false)
    }

    // STATE FOR SELECTED TAB (PEOPLE OR FILES)
    const [peopleSelected, setPeopleSelected] = useState(false);
    const [filesSelected, setFilesSelected] = useState(true);

    const selectFiles = () => {
        // TOGGLE FILES
        if (peopleSelected && !filesSelected) {
            setFilesSelected(!filesSelected);
            setPeopleSelected(!peopleSelected);
        } 
    }

    const selectPeople = () => {
        // TOGGLE PEOPLE
        if (!peopleSelected && filesSelected) {
            setFilesSelected(!filesSelected);
            setPeopleSelected(!peopleSelected);
        }
    }

    return (
        <main className='map-container'>
            <section className='wrapper'>
                <section className='map-header'>
                    <h1>{repo}</h1>
                    <section className='links'>
                        <button style={ filesSelected ? {fontWeight: 'bold', color: '#213547'} : { color: '#A0A0A0'}} className='mapBtn' onClick={selectFiles}>Files</button>
                        <button style={ peopleSelected ? {fontWeight: 'bold', color: '#213547'} : { color: '#A0A0A0' }} className='mapBtn' onClick={selectPeople}>People</button>
                    </section>
                </section>
                
                <section>
                    <hr className='header-hr'/>
                </section>
            </section>
            <section className='repo-list'>
                
                {filesSelected && 
                <>
                    {Boolean(treeUrl.length) && <><FolderBackButton setFolderClick={setFolderClick}/></>}
                    { !loading ? contents.map((item, idx) => {
                        return <><NewFile key={idx} id={idx} data={item} setFolderClick={setFolderClick} socket={newSocket} repoid={repoid}/></>
                    }) : <></>}
                    
                </>}
                {peopleSelected && <><People /><People /></>}
            </section>
            {loading ? <><img src={loadSvg} alt="load SVG" /></> : <></> }

        </main>
    )
}

