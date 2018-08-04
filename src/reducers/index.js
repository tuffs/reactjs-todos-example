import {
  ADD_TODO
} from '../actions/todos';

import { combineReducers } from 'redux';

function todos (state = [], action) {
	switch (action.type) {
		case ADD_TODO :
			return state.concat([action.todo]);
		default :
			return state;
	}
}

export default combineReducers({
	todos
});