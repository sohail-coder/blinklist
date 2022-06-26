import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import "@testing-library/jest-dom";
// import { Auth0Provider } from "@auth0/auth0-react";

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
});
