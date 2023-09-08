import React from "react";
import { render, screen } from "@testing-library/react";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import App from "../src/App";

chai.use(chaiAsPromised);

describe("App Component", () => {
  it("renders without error", () => {
    render(<App />);
  });

  it("Display a search input field", () => {
    const { getByPlaceholderText } = render(<App />);
    const inputElement = getByPlaceholderText("Enter GitHub user");
    expect(inputElement).to.exist;
  });
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
