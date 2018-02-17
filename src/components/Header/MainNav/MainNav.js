import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainNav.css';

const MainNav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink
                    exact
                    to="/"
                    activeClassName="active"
                >Нome</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        activeClassName="active"
                    >About</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contacts"
                        activeClassName="active"
                    >Contacts</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default MainNav;