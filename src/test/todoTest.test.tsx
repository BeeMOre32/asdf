import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; // Import userEvent from @testing-library/user-event
import { Provider } from "react-redux";
import store from "../store";
import TodoList from "../todoList";
import CreateTodo from "../createTodo";
import React from "react";

describe("Testing Todo component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <TodoList />
        <CreateTodo />
      </Provider>,
    );
  });

  it("should be rendered", () => {
    const todoList = screen.getByRole("todoList");
    const todoInput = screen.getByRole("todoInput");
    expect([todoInput, todoList]).toBeInTheDocument();
  });

  it("should add Todo by typing in input and clicking the button", async () => {
    const todoInput = screen.getByRole("todoInput") as HTMLInputElement;
    const addTodoButton = screen.getByRole("addTodoButton");
    const todoList = screen.getByRole("todoList");

    expect(todoList).toHaveTextContent("");

    userEvent.type(todoInput, "test todo");
    userEvent.click(addTodoButton);

    await waitFor(() => {
      expect(todoList).toHaveTextContent("test todo");
    });
  });

  it("should delete Todo by clicking the delete button", async () => {
    const todoInput = screen.getByRole("todoInput") as HTMLInputElement;
    const addTodoButton = screen.getByRole("addTodoButton");
    const todoList = screen.getByRole("todoList");

    expect(todoList).toHaveTextContent("");

    userEvent.type(todoInput, "test todo");
    userEvent.click(addTodoButton);

    await waitFor(() => {
      expect(todoList).toHaveTextContent("test todo");
    });

    const deleteButton = screen.getByRole("deleteButton");
    userEvent.click(deleteButton);

    await waitFor(() => {
      expect(todoList).not.toHaveTextContent("test todo");
    });
  });
});
