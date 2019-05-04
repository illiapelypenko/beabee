import { SET_DATE } from '../actions/types';

const initialState = {
	date: new Date()
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_DATE:
			return {
				...state,
				date: { ...action.payload }
			};
		default:
			return state;
	}
};
