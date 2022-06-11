import Book from "./components/molecules/Book";
import { ThemeProvider } from "@mui/material/styles";
import Nav from "./components/organisms/Nav";
import mainTheme from "./theme1/mainTheme";
import Footer from "./components/organisms/Footer";
import { Grid, Typography } from "@mui/material";
import BookLoop from "./utils/BookLoop";
import { data } from "./data/data";
import Page from "./components/pages/Libpage/index";
function App() {
  return (
    // <Navbar />

    // <ThemeProvider theme={mainTheme}>
    //   <Grid
    //     container
    //     direction="row"
    //     position="absolute"
    //     style={{ width: "100%" }}
    //     sx={{ top: "20px" }}
    //   >
    //     <Grid item xs={3}></Grid>
    //     <Grid item xs={9}>
    //       <Nav />
    //     </Grid>
    //     <Grid item xs={3}></Grid>
    //     <Grid item xs={9}>
    //       <Typography
    //         sx={{ position: "relative", top: "105px", left: "-100px" }}
    //         variant="heading"
    //       >
    //         {"My Library"}
    //       </Typography>
    //     </Grid>
    //     <Grid item lg={3}></Grid>
    //     <Grid
    //       container
    //       lg={9}
    //       spacing={4}
    //       sx={{ top: "200px", position: "relative", left: "-100px" }}
    //     >
    //       <BookLoop />
    //     </Grid>
    //     <Grid item lg={12} style={{ position: "relative", top: "-100px" }}>
    //       <Footer />
    //     </Grid>
    //   </Grid>
    // </ThemeProvider>

    <Page />
  );
}

export default App;
