import actionTypes from "../constants/action-types";
const initialState = {
  inputText: "",
  todoList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TODO_TEXT:
      return {
        ...state,
        inputText: action.payload,
      };

    case actionTypes.ADD_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            status: "Active",
            todoTaskText: action.payload,
            color: "",
          },
        ],
        inputText: "",
      };

    case actionTypes.DELETE_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList.slice(0, action.payload),
          ...state.todoList.slice(action.payload + 1),
        ],
      };

    default:
      return state;
  }
};

export { todoReducer };
