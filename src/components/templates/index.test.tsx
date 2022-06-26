import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Page from "../Template1";
import "@testing-library/jest-dom";
import theme from "../../../theme/mainTheme";
import { ThemeProvider } from "styled-components";

test("Rendering Template", () => {
  render(
    <ThemeProvider theme={theme}>
      <Page Content="" Footer="" Header="" />
    </ThemeProvider>
  );
  const template = screen.getByRole("template");
  expect(template).toBeInTheDocument();
  expect(template).toBeTruthy();
});
