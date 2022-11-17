import * as React from "react";
import {useState, useEffect} from 'react'
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Button, Menu, MenuItem, Breadcrumbs, Link, Typography } from '@mui/material'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faGear, faArrowRightFromBracket, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { setUser } from '../../store/user';
import './index.css'

const dots = <FontAwesomeIcon icon ={faEllipsis} />
const settings = <FontAwesomeIcon icon ={faGear} />
const logout = <FontAwesomeIcon icon ={faArrowRightFromBracket} />
const goBack = <FontAwesomeIcon icon ={faArrowLeft} />

const Header = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const pathnames = pathname.split("/").filter(Boolean);
    
    // Get username of the user currently logged in
    const loggedUser = useSelector(state => state.user.value);
    const dispatch = useDispatch();

    // States for dropdown menu
    const [ anchorEl, setAnchorEl ] = useState(null);
    let open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const Logout = async () => {
        open = null;
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
                {/* Navigation bar */}
                <NavLink to="/dashboard" style={{color: '#747bff'}} className="logo">
                    ClueDev
                </NavLink>

                {/* Breadcrumb navigation*/}
                <Breadcrumbs>
                {pathnames.length ? (
                    <Link onClick={() => navigate("/dashboard")} style={{color: '#747bff'}} className="username">{loggedUser.ghUsername}</Link>
                ) : (
                    <Button onClick={() => navigate(-1)}>{goBack}</Button> 
                )}
                {pathnames.reduce((acc, val, index) => {
                    if (isNaN(val)) {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;
                        const crumb = isLast ? (
                        <Typography key={val} style={{color: '#747bff'}}>{val}</Typography>
                        ) : (
                        <Link key={val} onClick={() => navigate(routeTo)} style={{color: '#747bff'}}>
                            {val}
                        </Link>
                        );
                        return acc.concat(crumb)
                    } else {
                        return acc
                    }
                }, [])}
                </Breadcrumbs>

                {/* Menu button */}
                <Button id="nav-button"  
                aria-controls={open ? 'nav-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{color: '#747bff'}}
                >{dots}</Button>
              
                {/* Dropdown menu on navigation bar */}
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
                        //  borderStyle: "solid",
                        //  borderWidth: "1px",
                        //  borderColor: "#AAA6A6",
                        //  backgroundColor: "#F8F8F8",
                        //  boxShadow:"none"
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
        <Outlet />
    </>
    )
};

export default Header;
