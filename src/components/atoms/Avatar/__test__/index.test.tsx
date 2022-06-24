import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Avatar from "../index";
import "@testing-library/jest-dom";

describe("This is avatar", () => {
  render(<Avatar children="sk" />);
  const inputElement = screen.getByRole("Avatar");
  test("rendering Avatar", () => {
    expect(inputElement).toBeInTheDocument();
  });

  test("Text in Avatar", () => {
    expect(inputElement).toHaveTextContent("sk");
  });

  test("No focus", () => {
    expect(inputElement).not.toHaveFocus();
  });
});
