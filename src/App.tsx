import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Bookdetail from "./components/pages/BookDetailPage";
import LandingPage from "./components/pages/Landing Page/index";

import ExplorePage from "./components/pages/ExplorePage/Index";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import customTheme from "./theme/mainTheme";
import { ThemeProvider } from "@emotion/react";
import { StyledEngineProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
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
}

export default App;
