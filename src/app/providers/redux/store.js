import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootEpics from './epics';
import rootReducers from './reducers';

export const configureStore = _ => {

    const epicMiddleware = createEpicMiddleware();

    const store = createStore(
        combineReducers({
            ...rootReducers
        }),
        applyMiddleware(
            epicMiddleware
        ));

    epicMiddleware.run(rootEpics);

    return store;
};