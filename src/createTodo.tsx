// CreateTodo.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import { AppDispatch } from "./store";

export default function CreateTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div>
      <input
        role="todoInput"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd} role="addTodoButton">
        Add Todo
      </button>
    </div>
  );
}
