import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './app/app.component';
import { Provider } from 'react-redux';
import { configureStore } from './app/providers/redux/store';

import './assets/favicon.ico';
import './assets/stylesheets/theme.sass';
import 'semantic-ui-css/semantic.min.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <AppComponent />
    </Provider>, document.getElementById('root'));