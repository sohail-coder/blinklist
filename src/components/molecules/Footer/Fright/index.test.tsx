import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../../../../theme/mainTheme";
import Compo from "../index";
test("rendering the component", () => {
  render(
    <ThemeProvider theme={theme}>
      <Compo />
    </ThemeProvider>
  );
  const component = screen.getByTestId("footer-right");
  expect(component).toBeInTheDocument();
  expect(component).toBeTruthy();
});
