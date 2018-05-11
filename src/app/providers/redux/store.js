import { applyMiddleware, combineReducers, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { GetMockData$ } from './epics';
import rootReducers from './reducers';

export default createStore(
    combineReducers(rootReducers),
    applyMiddleware(
        createEpicMiddleware(
            combineEpics(GetMockData$))));