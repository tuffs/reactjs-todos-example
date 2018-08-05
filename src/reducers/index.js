import { ADD_TODO, SET_VISIBILITY_FILTER } from "../actions";
import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
