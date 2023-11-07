import { render, screen } from "@testing-library/react";
import "./App";

test("render the App", () => {
  render(<App />);
  const navbarElement = screen.getByText("Menu");
  expect(navbarElement).toBeInTheDocument();
});
