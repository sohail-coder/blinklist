import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Typography from "../index";
import { ThemeProvider } from "styled-components";
import theme from "../../../../theme/mainTheme";

afterEach(cleanup);
test("rendering Typography", () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Sohail" component="div" />
    </ThemeProvider>
  );
  const typo = screen.getByRole("Typography");
  expect(typo).toBeInTheDocument();
  expect(typo).toHaveTextContent("Sohail");
  expect(typo).toBeTruthy();
});

test("rendering Typography with heading", () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Sohail" component="div" variant="heading" />
    </ThemeProvider>
  );
  const typo = screen.getByText("Sohail");
  expect(typo).toHaveClass("MuiTypography-heading");
});

test("rendering Typography with heading3", () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Sohail" component="div" variant="heading3" />
    </ThemeProvider>
  );
  const typo = screen.getByText("Sohail");
  expect(typo).toHaveClass("MuiTypography-heading3");
});

test("rendering Typography with subtitle2", () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Sohail" component="div" variant="subtitle2" />
    </ThemeProvider>
  );
  const typo = screen.getByText("Sohail");
  expect(typo).toHaveClass("MuiTypography-subtitle2");
});

test("rendering Typography with body1", () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Sohail" component="div" variant="body1" />
    </ThemeProvider>
  );
  const typo = screen.getByText("Sohail");
  expect(typo).toHaveClass("MuiTypography-body1");
});

test("rendering Typography with subtitle1", () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Sohail" component="div" variant="subtitle1" />
    </ThemeProvider>
  );
  const typo = screen.getByText("Sohail");
  expect(typo).toHaveClass("MuiTypography-subtitle1");
});

test("rendering Typography with body2", () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Sohail" component="div" variant="body2" />
    </ThemeProvider>
  );
  const typo = screen.getByText("Sohail");
  expect(typo).toHaveClass("MuiTypography-body2");
});

test("rendering Typography with caption", () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Sohail" component="div" variant="caption" />
    </ThemeProvider>
  );
  const typo = screen.getByText("Sohail");
  expect(typo).toHaveClass("MuiTypography-caption");
});

test("rendering Typography with button", () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Sohail" component="div" variant="button" />
    </ThemeProvider>
  );
  const typo = screen.getByText("Sohail");
  expect(typo).toHaveClass("MuiTypography-button");
});

test("rendering Typography with overline", () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Sohail" component="div" variant="overline" />
    </ThemeProvider>
  );
  const typo = screen.getByText("Sohail");
  expect(typo).toHaveClass("MuiTypography-overline");
});

test("rendering Typography with subtitle5", () => {
  render(
    <ThemeProvider theme={theme}>
      <Typography children="Sohail" component="div" variant="subtitle5" />
    </ThemeProvider>
  );
  const typo = screen.getByText("Sohail");
  expect(typo).toHaveClass("MuiTypography-subtitle5");
});
