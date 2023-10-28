import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { deleteTodo } from "./todoSlice";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todo.todos);

  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <ul role="todoList">
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}{" "}
          <button onClick={() => handleDelete(todo.id)} role="deleteButton">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
