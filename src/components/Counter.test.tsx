import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("renders learn react link", () => {
  render(<Counter />);
  const linkElement = screen.getByText(/This is Counter/i);
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = screen.getByText(/increment/i);
  expect(linkElement2).toBeInTheDocument();
  const linkElement3 = screen.getByText(/decrement/i);
  expect(linkElement3).toBeInTheDocument();
});
