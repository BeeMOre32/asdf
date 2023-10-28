import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing App component", () => {
  it("should be rendered", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
