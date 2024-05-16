import React from "react";
import "./mainContainer.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, todoTextHandler } from "../../redux/actions/todoActions";
import TodoList from "../todoList";
import { getDateByEpoch } from "../../helpers/dateAndTime";

const MainContainer = () => {
  const dispatch = useDispatch();

  const todoText = useSelector((state) => state.todoReducer.inputText);

  const todayEpoch = Date.now();

  return (
    <div className="todo-app-container">
      <h4>Today</h4>
      <h5>{getDateByEpoch(todayEpoch)}</h5>
      <form>
        {/* <label htmlFor="todo-input">Enter todo</label> */}
        <input
          type="text"
          id="todo-input"
          value={todoText}
          onChange={(e) => dispatch(todoTextHandler(e.target.value))}
        />

        <button
        className="add-todo-btn"
          onClick={(e) => {
            e.preventDefault();
            if (todoText !== "") {
              dispatch(addTodo(todoText));
            }
          }}
        >
          +
        </button>
      </form>
      <TodoList />
    </div>
  );
};

export default MainContainer;
