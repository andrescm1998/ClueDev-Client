import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
    return 
    <>
    <header>
        <nav>
            <NavLink to="/">Username</NavLink>
            <NavLink to="/">ClueDev.</NavLink>
            <NavLink to="/">...</NavLink>
        </nav>
    </header>

    <Outlet />
    </>
};

export default Header;
