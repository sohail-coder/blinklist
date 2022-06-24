import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../../../theme/mainTheme";
import Component from "../index";

test("rendering the component", () => {
  render(
    <ThemeProvider theme={theme}>
      <Component ColGap="2" Path="" text="Hello" />
    </ThemeProvider>
  );
  const component = screen.getByTestId("IconWithText");
  expect(component).toBeInTheDocument();
  expect(component).toBeTruthy();
});
