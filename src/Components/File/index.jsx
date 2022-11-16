import React from 'react';
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTreeUrl } from '../../store/treeUrl'
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export const NewFile = ({ id, data, socket, setFolderClick, repoid }) => {
    const user = useSelector(state => state.user.value);

    const counterData = {
        userId: user.id,
        sha: data.sha,
        repoId: repoid,
        counterImg: user.ghAvatar
    }

    const file = <FontAwesomeIcon icon={faFile}/>;
    const folder = <FontAwesomeIcon icon={faFolder}/>;
    const dispatch = useDispatch()

    const [counters, setCounters] = useState([]);
    const [hasCounter, setHasCounter] = useState(false);

    console.log(counters, hasCounter)

    socket.on('updateCounters', (counters) => {
        let test = false
        const filtered = counters.reduce((acc, counter) => {
            if (counter.sha === data.sha) {
                if (counter.userId === user.id) test = true;
                return acc.concat(<Avatar src={counter.counterImg}/>)
            } else {
                return acc
            }
        }, [])

        setCounters(filtered)
        setHasCounter(test)
    })

    const handleClick = (e) => {
        e.stopPropagation();
        hasCounter ? socket.emit('deleteCounter', counterData) : socket.emit('addCounter', counterData);
    }

    function handleFolder(){
        dispatch(setTreeUrl(data.url))
        setFolderClick(prev => !prev)
    }

    if (data.mode === "040000") {
        return (
            <>
            { id !== 0 && <hr className='divider' />}
            <Link onClick={handleFolder} className='file-container'>

                <section className='file-section'>
                    <span className='icon'>{ folder }</span>
                    <h4>{data.path}</h4>
                </section>

                <section className='counter-section'>
                </section>
            </Link>
        </>
        )
    } else {
        return (
            <>
            { id !== 0 && <hr className='divider'/>}
            <section onClick={handleClick} className='file-container'>

                <section className='file-section'>
                    <span className='icon' style={ counters.length > 1 ? { color: '#EE4B2B' } : null}>{ file }</span>
                    <h4 style={ counters.length > 1 ? { color: '#EE4B2B' } : null}>{data.path}</h4>
                </section>

                <section className='counter-section' >
                    <AvatarGroup spacing={-5} sx={{'& .MuiAvatar-root': { width: 28, height: 28, fontSize: 14, border: 0 }}} max={6} className="counters">
                        {counters}
                    </AvatarGroup>
                </section>
            </section>
            </>
        )
    }
}
