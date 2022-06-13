import React from 'react';
import { NavLink } from 'react-router-dom';
import './../Styles/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/students">Students Table</NavLink>
                </li>
                <li>
                    <NavLink to="/student">Create student</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/registr">Registr</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
