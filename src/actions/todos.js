export const ADD_TODO = 'ADD_TODO';

let todos = [];

function addTodo(todo) {
	return {
		type: ADD_TODO,
		todo
	}
}

const saveTodo = function (value) {
	return new Promise((res, rej) => {
		const todo = {
			value,
			completed: false
		};
		todos = todos.concat(todo);
	});
}

export function handleAddTodo (value, cb) {
	return (dispatch) => {
		return saveTodo(value)
			.then((todo) => {
				dispatch(addTodo(todo));
				cb();
			})
			.catch(() => {
				alert('An error occurred, try again.');
			});
	}
}