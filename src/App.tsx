// App.tsx
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import CreateTodo from "./createTodo";
import TodoList from "./todoList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TodoList />
      <CreateTodo />
    </Provider>
  );
};

export default App;
