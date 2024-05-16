import actionTypes from "../constants/action-types";

export const todoTextHandler = (text) => {
  return {
    type: actionTypes.TODO_TEXT,
    payload: text,
  };
};

export const addTodo = (text) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: text,
  };
};

export const deleteTodo = (todoIndex) => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: todoIndex,
  };
};
