import { ActionTypes } from '../constants';

export const getMockData = () => {
	return {
		type: ActionTypes.GET_MOCK_DATA
	}
};

export const getMockDataSuccess = (data) => {
	return {
		type : ActionTypes.GET_MOCK_DATA_SUCCESS,
		data : data
	}
};