import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ExplorePage from "../Index";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

const MockPage = () => {
  return (
    <BrowserRouter>
      <ExplorePage />
    </BrowserRouter>
  );
};
describe("ExplorePage", () => {
  it("rendering the  ExplorePage", () => {
    render(<MockPage />);
    const ExplorePageElement = screen.getByText("Explore");
    expect(ExplorePageElement).toBeInTheDocument();
  });

  it("rendering the  ExplorePage with popup", () => {
    render(<MockPage />);
    const ExploreButton = screen.getByText("Explore");

    fireEvent.click(ExploreButton);

    expect(ExploreButton).toBeInTheDocument();
    expect(screen.getByTestId("Explore-Popup")).toBeVisible();
  });

  it("rendering the  ExplorePage with LibButton", () => {
    render(<MockPage />);
    const ExploreButton = screen.getByText("Explore");
    const LibraryButton = screen.getByText("My Library");

    fireEvent.click(LibraryButton);

    expect(ExploreButton).toBeInTheDocument();
    expect(screen.getByTestId("Explore-Popup")).not.toBeVisible();
  });

  it("AddtoLib", () => {
    render(<MockPage />);
    const ExploreButton = screen.getByText("Explore");
    const LibraryButton = screen.getByText("My Library");

    fireEvent.click(LibraryButton);

    expect(ExploreButton).toBeInTheDocument();
    expect(screen.getByTestId("Explore-Popup")).not.toBeVisible();
  });
});
