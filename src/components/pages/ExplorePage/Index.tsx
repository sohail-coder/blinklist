import { useState, useEffect } from "react";
import Footer from "../../molecules/Footer";
import Header from "../../organisms/Header";
import Template1 from "../../templates/Template1";
import Banner from "../../molecules/Banner/Banner";
import { ReactComponent as SearchIcon } from "../../../assets/SearchIcon.svg";
import { SvgIcon } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import CustomTypo from "../../atoms/CustomTypo";
import { customStyles } from "../../../theme/mainTheme";
import CardGrid from "../../organisms/CardsGrid";
import { Box } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Index = () => {
  const classes = customStyles();
  const navigate = useNavigate();

  const [trending, setTrending] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/trendingblinks").then((res) => {
      setTrending(res.data);
    });
  }, []);

  const [justAdded, setJustAdded] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/justadded").then((res) => {
      setJustAdded(res.data);
    });
  }, []);

  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/featured").then((res) => {
      setFeatured(res.data);
    });
  }, []);

  const handleClick = (id: number, _finished: boolean, cat: string) => {
    console.log(id);
    console.log(cat);

    navigate(`/bookDetailPage/${cat}+${id}`);
  };
  return (
    <Template1
      Header={<Header />}
      Content={
        <>
          <Banner />

          <Box sx={{ marginBottom: "80px", width: "658px" }}>
            <TextField
              fullWidth
              placeholder="Search by title or author"
              inputProps={{
                sx: {
                  "&::placeholder": {
                    color: "#6D787E",
                    fontSize: "24px",
                    fontWeight: 700,
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      component={SearchIcon}
                      sx={{ width: "23.7px", height: "23.7px" }}
                    />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Box>

          <Box
            sx={{
              display: "flex",

              flexDirection: "column",
              mb: 10,
            }}
            style={{ paddingTop: "15px", fontFamily: "Cera Pro" }}
          >
            <CustomTypo
              variant="heading3"
              component="div"
              children="Trending blinks"
              className={classes.trendingBooks}
            />

            <CardGrid addtoLib details={trending} handleClick={handleClick} />
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", mb: 10 }}
            style={{ paddingTop: "15px", fontFamily: "Cera Pro" }}
          >
            <CustomTypo
              variant="heading3"
              component="div"
              children="Just added"
              className={classes.trendingBooks}
            />

            <CardGrid addtoLib details={justAdded} handleClick={handleClick} />
          </Box>

          <Box style={{ paddingTop: "15px", fontFamily: "Cera Pro" }}>
            <CustomTypo
              variant="heading3"
              component="div"
              children="Featured audio blinks"
              className={classes.trendingBooks}
            />

            <CardGrid addtoLib details={featured} handleClick={handleClick} />
          </Box>
        </>
      }
      Footer={<Footer />}
    />
  );
};

export default Index;
