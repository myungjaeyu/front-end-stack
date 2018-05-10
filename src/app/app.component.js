import { hot } from 'react-hot-loader';
import * as React from 'react';
import './app.component.sass';

class AppComponent extends React.Component {
    render() {
        return (
        <div className="App">
            <h1 className="App__Title">
                Front End Stack <span className="App_Title__Sub">u4bi</span>
            </h1>
        </div>
        );
    }
}

export default hot(module)(AppComponent);