import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import "@testing-library/jest-dom";

const MockLoginPage = () => {
  return <LoginPage />;
};
describe("testing login", () => {
  test("rendering loginpage", () => {
    render(<MockLoginPage />);
    const bodyElement = screen.getByText(/Welcome/i);
    expect(bodyElement).toBeInTheDocument();
  });
  test("rendering the login button", () => {
    render(<MockLoginPage />);
    const button = screen.getByRole("loginButton");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("MuiButton-contained");
    expect(button).toHaveTextContent("Login");
  });

  test("rendering the signup button", () => {
    render(<MockLoginPage />);
    const button = screen.getByRole("signUpButton");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("MuiButton-contained");
    expect(button).toHaveTextContent("Signup");
  });
  test("rendering the typography", () => {
    render(<MockLoginPage />);
    const button = screen.getByText("Welcome!!");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("MuiTypography-h2");
    expect(button).toHaveTextContent("Welcome!!");
  });
});
