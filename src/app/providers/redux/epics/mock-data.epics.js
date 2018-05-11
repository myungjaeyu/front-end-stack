import { Observable } from 'rxjs';
import { GET_MOCK_DATA, getMockDataSuccess } from '../actions';

import mockState from '../../mock-state';

export const GetMockData$ = (epic) => epic.ofType(GET_MOCK_DATA)
                                    .switchMap( (action) => Observable.ajax({
                                        url : '',
                                        method : 'GET',
                                        crossDomain : true
                                    })
                                    .map(e => e.response)
                                    .catch(err => console.error(err))
                                    )
                                    .map(v => getMockDataSuccess(mockState)); // mock