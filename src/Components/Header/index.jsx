import React from "react";
import {useState} from 'react'
import { NavLink, Outlet } from "react-router-dom";
import { Button } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faGear } from "@fortawesome/free-solid-svg-icons";
import './index.css'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const dots = <FontAwesomeIcon icon ={faEllipsis} />
const settings = <FontAwesomeIcon icon ={faGear} />
// const logout = <FontAwesomeIcon icon ={faLogOut} />

const Header = () => {

    const [ open, setOpen ] = useState(null);

    const opened = Boolean(open);

    const handleClick = (event) => {

        setOpen(event.currentTarget);
    }

    const handleClose = () => {

        setOpen(null);
    }

    return (
    <>
        <header>
            <nav className="nav-links">
                <NavLink to="/dashboard">Username</NavLink>
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
                >
                    <MenuItem onClick={handleClose}>{settings} Settings</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </nav>
        </header>

        <Outlet />
    </>
    )
};

export default Header;
