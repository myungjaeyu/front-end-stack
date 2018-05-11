import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.component.sass';

import HeaderComponent from './shared/header.component';
import MainComponent from './pages/main.component';

import mockState from './providers/mock-state';

class AppComponent extends React.Component {

    state = mockState;

    render() {
        const { title, subTitle, content } = this.state;

        return (
        <Router basename='/' >
            <div className="App">
                <HeaderComponent title={ title } subTitle = { subTitle } />
                <Switch>
                    <Route exact path='/' render={ () => (
                        <MainComponent content={ content }/>
                    )}/>
                </Switch>
            </div>
        </Router>
        );
    }
}

export default hot(module)(AppComponent);