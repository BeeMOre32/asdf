import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./counter";
describe("Testing Counter component", () => {
  let unmount: () => void;
  beforeEach(() => {
    const view = render(<Counter />);
    unmount = view.unmount;
  });

  afterEach(() => {
    unmount();
  });

  it("should be rendered", () => {
    const count = screen.getByRole("count");
    expect(count).toBeInTheDocument();
  });

  it("should have initial count of 0", () => {
    const count = screen.getByRole("count");
    expect(count).toHaveTextContent("0");
  });

  it("should be increase value by click + button", async () => {
    const count = screen.getByRole("count");
    const plusButton = screen.getByText("+");
    expect(count).toHaveTextContent("0");
    userEvent.click(plusButton);
    await waitFor(() => {
      expect(count).toHaveTextContent("1");
    });
  });
});

const InputElement: React.FC = () => {
  return <input type="text" role="text"></input>;
};

describe("Testing input component", () => {
  it("should be changeValue by Users Input", () => {
    const { getByRole } = render(<InputElement />);
    const input = getByRole("text");
    userEvent.type(input, "23");
    expect(input).toHaveValue("23");
  });
});
