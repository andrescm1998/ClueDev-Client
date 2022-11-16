import * as React from "react";
import {useState, useEffect} from 'react'
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Button, Menu, MenuItem } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faGear, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { setUser } from '../../store/user';
// import Breadcrumb from "./breadcrumb";
import './index.css'

const dots = <FontAwesomeIcon icon ={faEllipsis} />
const settings = <FontAwesomeIcon icon ={faGear} />
const logout = <FontAwesomeIcon icon ={faArrowRightFromBracket} />

const Header = () => {

    const navigate = useNavigate();
    
    // Get username of the user currently logged in
    const loggedUser = useSelector(state => state.user.value);
    const dispatch = useDispatch();

    const [ anchorEl, setAnchorEl ] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const Logout = async () => {
        setOpen(null);
        const options = {
            credentials: 'include'
          }
      
          const response = await fetch('http://localhost:3000/users/logout', options);
          navigate('/');
          
    }

    useEffect(() => {
        getUser(); 
    }, []);

    async function getUser() {
        const options = {
            credentials: 'include'
          }
        const response = await fetch('http://localhost:3000/users', options);
        const data = response.status === 200 ? await response.json() : [];
        dispatch(setUser(data))
    }

    return (
    <>
        <header>
            <nav className="nav-links">
                <NavLink to="/dashboard" style={{color: '#747bff'}} className="username">{loggedUser.ghUsername}</NavLink>
                <NavLink to="/dashboard" style={{color: '#747bff'}} className="logo">ClueDev</NavLink>
                <Button id="nav-button"  
                aria-controls={open ? 'nav-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{color: '#747bff'}}
                >{dots}</Button>

                <Menu
                    id="nav-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'nav-button',
                    }}
                    PaperProps={{
                        style: {
                         borderRadius: "10px",
                         borderStyle: "solid",
                         borderWidth: "1px",
                         borderColor: "#AAA6A6",
                         backgroundColor: "#F8F8F8",
                         boxShadow:"none"
                        }
                    }}
                    >
                    <MenuItem onClick={handleClose}><span className="settings">{settings}</span>Settings</MenuItem>
                    {/* <NavLink to="/" className="redirect"> */}
                    <MenuItem onClick={Logout}><span className="logout">{logout}</span>Logout</MenuItem>
                    {/* </NavLink> */}
                </Menu>
            </nav>
        </header>

        {/* <Breadcrumb /> */}

        <Outlet />
    </>
    )
};

export default Header;
