import { render, screen } from "@testing-library/react";
import App from "../src/App";

const gitHub = require("../src/App");
const expect = require("chai").expect;

describe("App Component", () => {
  it("renders without error", () => {
    render(<App />);
  });
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
