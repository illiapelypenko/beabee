import {
	GET_TODOS,
	GET_TODO,
	DELETE_TODO,
	ADD_TODO,
	UPDATE_TODO
} from './types';

export const getTodos = () => async dispatch => {
	const res = await fetch('http://localhost:5100/api/todos/todos');

	const data = await res.json();

	dispatch({
		type: GET_TODOS,
		payload: data
	});
};

export const deleteTodo = _id => async dispatch => {
	const res = await fetch(`http://localhost:5100/api/todos/todo`, {
		method: 'DELETE',
		body: JSON.stringify({ _id: _id }),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const data = await res.json();

	dispatch({
		type: DELETE_TODO,
		payload: data
	});
};

export const addTodo = todo => async dispatch => {
	const res = await fetch(`http://localhost:5100/api/todos/todo`, {
		method: 'POST',
		body: JSON.stringify(todo),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const data = await res.json();

	dispatch({
		type: ADD_TODO,
		payload: data
	});
};

export const updateTodo = todo => async dispatch => {
	const res = await fetch(`http://localhost:5100/api/todos/todo`, {
		method: 'PUT',
		body: JSON.stringify({ ...todo }),
		headers: {
			'Content-type': 'application/json'
		}
	});

	const data = await res.json();

	dispatch({
		type: UPDATE_TODO,
		payload: data
	});
};

// export const getTodo = _id => async dispatch => {
//   const res = await fetch(`http://localhost:5100/api/todos/todo`);

//   const data = await res.json();

//   console.log(data);

//   //   dispatch({
//   //     type: GET_TODO,
//   //     payload: data
//   //   });
// };
