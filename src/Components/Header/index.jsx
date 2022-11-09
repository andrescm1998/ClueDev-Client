import React from "react";
import { NavLink, Outlet } from "react-router-dom";
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
                <NavLink to="/dashboard">{dots}</NavLink>
            </nav>
        </header>

        <Outlet />
    </>
    )
};

export default Header;
