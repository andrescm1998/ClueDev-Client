import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import './index.css'

const dots = <FontAwesomeIcon icon ={faEllipsis} />

const Header = () => {
    return (
    <>
        <header>
            <nav className="nav-links">
                <NavLink to="/dashboard">Username</NavLink>
                <NavLink to="/dashboard">ClueDev.</NavLink>
                <Button>{dots}</Button>
            </nav>
        </header>

        <Outlet />
    </>
    )
};

export default Header;
