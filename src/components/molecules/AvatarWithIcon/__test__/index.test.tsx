import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import theme from "../../../../theme/mainTheme";
import { ThemeProvider } from "@emotion/react";
import Icon from "../index";

afterEach(cleanup);

test("Testing Avatar with icon", () => {
  render(
    <ThemeProvider theme={theme}>
      <Icon logClick={false} handleLogin={() => console.log("login")} />
    </ThemeProvider>
  );
  const icon = screen.getByTestId("avatarLogin");
  expect(icon).toBeInTheDocument();
  expect(icon).toBeTruthy();
  expect(icon).toHaveTextContent("SK");
});
