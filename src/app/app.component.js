import { hot } from 'react-hot-loader';
import * as React from 'react';
import './app.component.sass';

import HeaderComponent from './shared/header.component';
import MainComponent from './pages/main.component';

class AppComponent extends React.Component {
    render() {
        return (
        <div className="App">
            <HeaderComponent title="Front End Stack" subTitle = "u4bi" />
            <MainComponent content="____🚀"/>
        </div>
        );
    }
}

export default hot(module)(AppComponent);