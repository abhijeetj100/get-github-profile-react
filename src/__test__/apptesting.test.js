import { render, screen } from "@testing-library/react";
import { App } from "../App.js";
// import React from "react";

test("renders an h1", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello CodeSandbox/i);
  expect(linkElement).toBeInTheDocument();
});
