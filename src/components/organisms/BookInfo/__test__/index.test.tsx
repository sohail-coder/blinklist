import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../../../theme/mainTheme";
import Component from "../index";

test("rendering the component", () => {
  render(
    <ThemeProvider theme={theme}>
      <Component
        authorName="Sohail"
        bookName="Book"
        cat="TrendingBlinks"
        finish={true}
        id={4}
        imgPath=""
      />
    </ThemeProvider>
  );
  const component = screen.getByRole("bookInfo");
  expect(component).toBeInTheDocument();
  expect(component).toBeTruthy();
});
