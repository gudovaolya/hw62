import React from 'react';
import { NavLink } from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import Home from "../../containers/Home/Ноme";
import About from "../../containers/About/About";
import Contacts from "../../containers/Contacts/Contacts";


const MainNav = (props) => {
    return (
        <div className="main-nav">
            <NavLink
                to="/"
                activeClassName="active"
            >Нome</NavLink>
            <NavLink
                to="/about"
                activeClassName="active"
            >About</NavLink>
            <NavLink
                to="/contacts"
                activeClassName="active"
            >Contacts</NavLink>

            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" exact component={About}/>
                <Route path="/contacts" exact component={Contacts}/>
                <Route render={() => <h1>404 page not found</h1>}/>
            </Switch>
        </div>
    )
};

export default MainNav;