import { combineEpics } from 'redux-observable';
import { GetMockData$ } from './mock-data.epics';

export default combineEpics(
    GetMockData$
);