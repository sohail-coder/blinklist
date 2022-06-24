import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Button from "../Buttons";
import exp from "constants";

afterEach(cleanup);
describe("Testing Button Atom", () => {
  render(<Button children="Read Now" />);
  const button = screen.getByRole("button");

  test("Rendering the button", () => {
    expect(button).toBeInTheDocument();
  });
  test("button with test", () => {
    expect(button).toHaveTextContent("Read Now");
  });
});

test("button with outlined", () => {
  render(
    <Button variant="outlined" onClick={() => console.log("Button Clicked")} />
  );
  const outlinedButton = screen.getByRole("button");
  expect(outlinedButton).toBeInTheDocument();
  //   expect(outlinedButton).
  //   fireEvent.click(outlinedButton);
  //   expect(outlinedButton).toBeCalled();
});
