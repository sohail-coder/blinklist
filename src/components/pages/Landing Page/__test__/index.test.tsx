import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import LandingPage from "../index";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

const MockPage = () => {
  return (
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );
};
describe("LandingPage", () => {
  it("rendering Landing Page", () => {
    render(<MockPage />);
    const LandingPageElement = screen.getByText("Explore");
    expect(LandingPageElement).toBeInTheDocument();
  });

  it("rendering Landing Page with readagain", () => {
    render(<MockPage />);
    const LandingPageElement = screen.getByText("Explore");

    fireEvent.click(LandingPageElement);

    expect(LandingPageElement).toBeInTheDocument();
    expect(screen.getByTestId("Explore-Popup")).toBeVisible();
  });
});
