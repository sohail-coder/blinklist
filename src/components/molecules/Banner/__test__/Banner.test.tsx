import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import theme from "../../../../theme/mainTheme";
import { ThemeProvider } from "@emotion/react";
import Banner from "../Banner";

afterEach(cleanup);
test("Banner Check", () => {
  render(
    <ThemeProvider theme={theme}>
      <Banner />
    </ThemeProvider>
  );
  const banner = screen.getByTestId("full-Banner");
  expect(banner).toBeInTheDocument();
  expect(banner).toBeTruthy();
});
