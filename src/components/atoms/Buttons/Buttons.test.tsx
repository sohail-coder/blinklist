import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Button from "../Buttons";
import AddIcon from "@mui/icons-material/Add";
import CustomTypo from "../../../atoms/CustomTypo/index";

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
  expect(outlinedButton).toHaveClass("MuiButton-outlined");
});

test("button with text", () => {
  render(<Button variant="text" />);
  const textButton = screen.getByRole("button");
  expect(textButton).toHaveClass("MuiButton-text");
});
test("button with contained", () => {
  render(<Button variant="contained" />);
  const textButton = screen.getByRole("button");
  expect(textButton).toHaveClass("MuiButton-containedPrimary");
});
test("button with event", () => {
  render(<Button variant="contained" onClick={() => console.log("Clicked")} />);
  const textButton = screen.getByRole("button");
  fireEvent.click(textButton);
});

test("with icon", () => {
  render(
    <Button
      variant="outlined"
      startIcon={<AddIcon />}
      children={
        <CustomTypo variant="body2" component="div" children="Add to library" />
      }
      onClick={() => console.log("Clicked the button")}
    />
  );
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Add to library");
  expect(button).toHaveClass("MuiButton-outlined");
  fireEvent.click(button);
});
