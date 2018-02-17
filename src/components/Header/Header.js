import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import './Header.css';

import MainNav from "./MainNav/MainNav";

const Header = () => {

    return (
        <header>
            <div className="container">

                <NavLink
                    exact
                    to="/"
                    className="logo"
                    activeClassName=""
                >
                    <img src={logo} alt="BisLite"/>

                </NavLink>
                <MainNav/>
            </div>
        </header>
    )
};

export default Header;