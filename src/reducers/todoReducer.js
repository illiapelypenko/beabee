import {
    GET_TODOS,
    GET_TODO,
    DELETE_TODO,
    ADD_TODO,
    UPDATE_TODO
} from '../actions/types';

const initialState = {
    todos: [],
    todo: {} // Current todo we are working on
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload
            };
        case GET_TODO:
            return {
                ...state,
                todo: action.payload
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: action.payload
            };
        case ADD_TODO:
            return {
                ...state,
                todos: action.payload
            };
        case UPDATE_TODO:
            return {
                ...state,
                todos: action.payload
            };
        default:
            return state;
    }
};
