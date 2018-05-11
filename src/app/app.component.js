import { hot } from 'react-hot-loader';
import * as React from 'react';
import './app.component.sass';

import HeaderComponent from './shared/header.component';
import MainComponent from './pages/main.component';

import mockState from './providers/mock-state';

class AppComponent extends React.Component {

    state = mockState;

    render() {
        const { title, subTitle, content } = this.state;

        return (
        <div className="App">
            <HeaderComponent title={ title } subTitle = { subTitle } />
            <MainComponent content={ content }/>
        </div>
        );
    }
}

export default hot(module)(AppComponent);