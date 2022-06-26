import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import FunctionalGrid from "../index";
import "@testing-library/jest-dom";

const mockfunction = jest.fn();

describe("FunctionalGrid", () => {
  it("should render FunctionalGrid element with finished button", () => {
    render(
      <FunctionalGrid
        fetchRecords={mockfunction}
        books={[
          {
            id: 1,
            finished: false,
            imgsrc: "/BookCovers/bringyourhumantowork.png",
            bookName: "Bring Your Human To Work",
            authorName: "Eric Keswin",
            time: "13-minute read",
            nReads: "1.9k reads",
            icon1: "Image/Time.png",
            icon2: "Image/Person.png",
            cat: "TrendingBlinks",
          },
        ]}
      />
    );

    const FunctionalGridElement = screen.getByText("Eric Keswin");
    const RFCard = screen.getByTestId("RF-Card");

    expect(FunctionalGridElement).toBeInTheDocument();
    expect(RFCard).toBeInTheDocument();
  });
});
