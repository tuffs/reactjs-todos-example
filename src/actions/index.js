// set initial todo id to 0
let nextTodoId = 0;

/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'REMOVE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * action creators
 */

export const addTodo = value => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    value
  }
};

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  }
};