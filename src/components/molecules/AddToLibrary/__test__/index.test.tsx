import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import theme from "../../../../theme/mainTheme";
import { ThemeProvider } from "@emotion/react";
import AddButton from "../index";
import Button from "../../../atoms/Buttons/Buttons";

test("Adding to Library Button", () => {
  render(
    <ThemeProvider theme={theme}>
      <AddButton handleClick={() => console.log("Added to Library")} />
    </ThemeProvider>
  );
  const tester = screen.getByTestId("Addtolib");
  expect(tester).toHaveTextContent("Add to library");
  expect(tester).toBeTruthy();
  expect(tester).toBeInTheDocument();
});
