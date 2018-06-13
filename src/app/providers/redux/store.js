import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootEpics from './epics';
import rootReducers from './reducers';

export default createStore(
    combineReducers({
        ...rootReducers
    }),
    applyMiddleware(
        createEpicMiddleware(
           rootEpics
        )
    )
);