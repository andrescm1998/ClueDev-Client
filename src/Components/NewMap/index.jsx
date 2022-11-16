import React from 'react';
import { useState, useEffect } from 'react';
import './index.css';
import { useParams } from 'react-router-dom';
import { NewFile } from '../NewFile';
import { People } from '../People';
import { useDispatch, useSelector } from 'react-redux';
import { setTreeUrl } from '../../store/treeUrl'
import FolderBackButton from '../FolderBackButton';

export const NewMap = () => {
    const { repoid, repo } = useParams();
    const [folderClick, setFolderClick] = useState(false);
    const selectedButton = 'selected';
    const [contents, setContents] = useState([]);
    const [displayData, setDisplayData] = useState([]);
    const dispatch = useDispatch();
    const treeUrl = useSelector(state => state.treeUrl.value)
    console.log(contents)
    //

    // const url = useSelector(state => state.treeUrl.value);
    // console.log(url);
    useEffect(() => {
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
    }

    // STATE FOR SELECTED TAB (PEOPLE OR FILES)
    const [peopleSelected, setPeopleSelected] = useState(false);
    const [filesSelected, setFilesSelected] = useState(true);

    const selectFiles = () => {
        // TOGGLE TAB CSS
        if (peopleSelected && !filesSelected) {
            setFilesSelected(!filesSelected);
            setPeopleSelected(!peopleSelected);
        } 
        // RENDER FILES COMPONENT
    }

    const selectPeople = () => {
        // TOGGLE TAB CSS
        if (!peopleSelected && filesSelected) {
            setFilesSelected(!filesSelected);
            setPeopleSelected(!peopleSelected);
        }
        // RENDER PEOPLE COMPONENT
    }

    return (
        <main className='map-container'>

            <section className='wrapper'>
                {/* repo name rendered from repo */}
                <section className='map-header'>
                    <h1>{repo}</h1>
                    <section className='links'>
                        <button style={ filesSelected ? {fontWeight: 'bold', color: 'black'} : { color: '#D2D2D2'}} className='mapBtn' onClick={selectFiles}>Files</button>
                        <button style={ peopleSelected ? {fontWeight: 'bold', color: 'black'} : { color: '#D2D2D2' }} className='mapBtn' onClick={selectPeople}>People</button>
                    </section>
                </section>
                
                <section>
                    <hr className='header-hr'/>
                </section>
            </section>
            
            {/* CONDITIONAL - if no files, render no files text, else render folder list */}
            {/* <h2>
            There are currently no folders or files in this repository
            </h2> */}
            <section className='repo-list'>
                {/* render based on selected (file or people)*/}
                {/* <People /> */}
                {Boolean(treeUrl.length) && <><FolderBackButton setFolderClick={setFolderClick}/></>}
                {filesSelected && <>
                    {contents.map((item, idx) => {
                        return <><NewFile key={idx} id={idx} data={item} setFolderClick={setFolderClick}/></>
                    })}
                    {/* <File /> */}
                </>}
                {peopleSelected && <><People /><People /></>}
     
            </section>
        </main>
    )
}

