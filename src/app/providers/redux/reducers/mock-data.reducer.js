import immutable from 'immutability-helper';
import createReducer from '../createReducer';

import { ActionTypes } from '../constants';

const mockState = {
    pending: false,
    data : {}
};

export default {
    mockData : createReducer(mockState, {
        [ActionTypes.GET_MOCK_DATA](state) {
            return immutable(state, {
                pending: { 
                    $set : true
                }
            });
        },
        [ActionTypes.GET_MOCK_DATA_SUCCESS](state, { data }) {
            return immutable(state, {
                pending: { 
                    $set : false
                },
                data : {
                    $set : data
                }
            });
        },
    })
};