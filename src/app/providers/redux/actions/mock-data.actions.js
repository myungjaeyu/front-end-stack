export const GET_MOCK_DATA         = '[MockData] GetMockData';
export const GET_MOCK_DATA_SUCCESS = '[MockData] GetMockDataSuccess';

export const getMockData = () => {
	return {
		type: GET_MOCK_DATA
	}
};

export const getMockDataSuccess = (data) => {
	return {
		type : GET_MOCK_DATA_SUCCESS,
		data : data
	}
};