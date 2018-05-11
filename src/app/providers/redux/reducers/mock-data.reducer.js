import newState from '../new-state';
import { GET_MOCK_DATA, GET_MOCK_DATA_SUCCESS } from '../actions';

const initialState = {
    pending: false,
    data : {}
};

const mockData = (state = initialState, action) => {

    switch (action.type) {
        case GET_MOCK_DATA:
            return newState(state, { pending: true });
        case GET_MOCK_DATA_SUCCESS:
            return newState(state, { pending: false, data : action.data });
        default : return state;
    }
};

export default mockData;