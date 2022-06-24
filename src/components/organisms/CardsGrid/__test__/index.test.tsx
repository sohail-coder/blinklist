import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../../../theme/mainTheme";
import Component from "../index";
const mockFunc = jest.fn();
test("Cards Grid rendering", () => {
  const book = [
    {
      id: 1,
      finished: false,
      imgsrc: "",
      bookName: "Bring Your Human To Work",
      authorName: "Eric Keswin",
      time: "13-minute read",
      nReads: "1.9k reads",
      icon1: "",
      icon2: "",
      cat: "",
    },
  ];
  render(
    <ThemeProvider theme={theme}>
      <Component addtoLib={false} details={book} handleClick={mockFunc} />
    </ThemeProvider>
  );

  const CardGridElement = screen.getByTestId("Card-Grid");
  expect(CardGridElement).toBeInTheDocument();
});
