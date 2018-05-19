import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import './app.component.sass';

import HeaderComponent from './shared/header/header.component';
import MainComponent from './pages/main/main.component';

import { getMockData } from './providers/redux/actions';

class AppComponent extends React.Component {

    componentDidMount() {
        const { getMockData } = this.props;
        getMockData();
    }

    render() {
        const { mockData } = this.props;

        return (
        <Router basename='/' history = {browserHistory} >
            <div className="App">
                <HeaderComponent title={ mockData.title } subTitle = { mockData.subTitle } />
                <Switch>
                    <Route exact path='/' render={ () => (
                        <MainComponent content={ mockData.content }/>
                    )}/>
                </Switch>
            </div>
        </Router>
        );
    }
}

const mapState = (state, ownProps) => ({
    mockData : state.mockData.data
});

const mapDispatch = (dispatch, ownProps) => ({
    getMockData : () => dispatch(getMockData())
});

export default connect(mapState, mapDispatch)(
    hot(module)(AppComponent));