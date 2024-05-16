import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./todoList.css";
import deleteIcon from "../../assets/delete-icon.png";
import { deleteTodo } from "../../redux/actions/todoActions";

const TodoList = () => {
  const todoList = useSelector((state) => state.todoReducer.todoList);
  const dispatch = useDispatch();
  return (
    <div>
      {todoList.map((list, index) => (
        <div className="todoTaskText" key={index}>
          <input id={`todo-${index + 1}`} type="checkbox" />
          <label htmlFor={`todo-${index + 1}`}>
            <span className="custom-checbox"></span>
            {list.todoTaskText}
            <ins>
              <i style={{ textDecoration: "line-through" }}>
                {list.todoTaskText}
              </i>
            </ins>
          </label>
          <img
            src={deleteIcon}
            width={20}
            height={20}
            onClick={() => dispatch(deleteTodo(index))}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
