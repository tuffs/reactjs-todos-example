import { ADD_TODO, SET_VISIBILITY_FILTER } from "../actions";
import { combineReducers } from 'redux';

function todoApp (state = initialState, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER :
			return Object.assign({}, state, {
				visibilityFilter: action.filter
			});
		case ADD_TODO :
			return Object.assign({}, state, {
				todos: [
					...state.todos,
					{
						value: action.value,
						completed: false
					}
				]
			});
		default :
			return state;
  }
	return state;
}

const initialState = {
	visibilityFilter: 'SHOW_ALL',
	todos: []
};

export default combineReducers({
	todoApp
});