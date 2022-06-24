import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../../../../theme/mainTheme";
import Card from "../index";
test("card is testing", () => {
  render(
    <ThemeProvider theme={theme}>
      <Card
        id={0}
        imgsrc={""}
        bookName="Bring Your Human To Work"
        authorName="Eric Keswin"
        time="13-minute read"
        nReads="1.9k reads"
        icon1={""}
        icon2={""}
        finished={false}
        handleClick={function (id: number, finish: boolean, cat: string): void {
          throw new Error("Function not implemented.");
        }}
        cat={""}
      />
    </ThemeProvider>
  );

  const card = screen.getByTestId("RF-Card");
  expect(card).toBeInTheDocument();
  expect(card).toBeTruthy();
});
