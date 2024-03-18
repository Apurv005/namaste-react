import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

test("testing weather the about us component is loaded", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
