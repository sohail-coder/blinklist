import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import theme from "../../../../../theme/mainTheme";
import { ThemeProvider } from "@emotion/react";
import LBanner from "../Bleft";
test("left side banner", () => {
  render(
    <ThemeProvider theme={theme}>
      <LBanner />
    </ThemeProvider>
  );
  const Banner = screen.getByTestId("Banner-left");
  expect(Banner).toBeInTheDocument();
  expect(Banner).toBeTruthy();
});
