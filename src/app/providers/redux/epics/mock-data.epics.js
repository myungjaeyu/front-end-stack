import { Observable } from 'rxjs';
import { ActionTypes } from '../constants';
import { getMockDataSuccess } from '../actions';

import mockState from '../../mock-state';

import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';

export const GetMockData$ = (epic) => epic.pipe(
                                            ofType(ActionTypes.GET_MOCK_DATA),
                                            // map(e => console.log(e)),
                                            map(_ => getMockDataSuccess(mockState))
                                        );