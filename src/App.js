import React, { Component, Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Ноme";
import About from "./containers/About/About";
import Contacts from "./containers/Contacts/Contacts";

class App extends Component {




  render() {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" exact component={About}/>
                <Route path="/contacts" exact component={Contacts}/>
                <Route render={() => <h1>404 page not found</h1>}/>
            </Switch>
            <Footer />
        </Fragment>

    );
  }
}

export default App;
