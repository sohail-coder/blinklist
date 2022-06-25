import React from "react";
import "./App.css";
import Bookdetail from "./components/pages/BookDetailPage";
import LandingPage from "./components/pages/Landing Page/index";

import ExplorePage from "./components/pages/ExplorePage/Index";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Typography } from "@mui/material";
import customTheme from "./theme/mainTheme";
import { ThemeProvider } from "@emotion/react";
import { StyledEngineProvider } from "@mui/material/styles";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "./components/pages/LoginPage/LoginPage";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }
  if (isAuthenticated) {
    return (
      // eslint-disable-next-line jsx-a11y/aria-role
      <div className="App" role="parentContainer">
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={customTheme}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="bookDetailPage/:id" element={<Bookdetail />} />
                <Route path="explorePage" element={<ExplorePage />} />
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </StyledEngineProvider>
      </div>
    );
  } else
    return (
      <ThemeProvider theme={customTheme}>
        <LoginPage />
      </ThemeProvider>
    );
}

export default App;
