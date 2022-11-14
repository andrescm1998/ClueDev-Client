import React from "react";
import {useState, useEffect} from 'react'
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Button } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faGear, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import './index.css'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/user';
// import Breadcrumb from "./breadcrumb";

const dots = <FontAwesomeIcon icon ={faEllipsis} />
const settings = <FontAwesomeIcon icon ={faGear} />
const logout = <FontAwesomeIcon icon ={faArrowRightFromBracket} />

const Header = () => {
    
    // Get username of the user currently logged in
    const loggedUser = useSelector(state => state.user.value);
    const dispatch = useDispatch();

    const [ open, setOpen ] = useState(null);
    const navigate = useNavigate();

    const opened = Boolean(open);

    const handleClick = (event) => {

        setOpen(event.currentTarget);
    }

    const handleClose = () => {

        setOpen(null);
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
                <NavLink to="/dashboard">{loggedUser.ghUsername}</NavLink>
                <NavLink to="/dashboard">ClueDev.</NavLink>
                <Button id="nav-button"  
                aria-controls={opened ? 'nav-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={opened ? 'true' : undefined}
                onClick={handleClick}
                >{dots}</Button>

                <Menu
                    id="nav-menu"
                    sx={{ mt: 5,  ml: -10  }}
                    open={open}
                    opened={opened}
                    onClose={handleClose}
                    keepMounted={false}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                    MenuListProps={{
                    'aria-labelledby': 'nav-button',
                    }}
                    PaperProps={{
                        style: {
                         borderRadius: "20px",
                         width: "10%"
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
