import React, { useState, useEffect } from "react";
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

const Index = () => {
  const classes = customStyles();
  const navigate = useNavigate();

  const [trending, setTrending] = useState([
    {
      id: 10,
      imgsrc: "/1.png",
      bookName: "Being Boss",
      authorName: "Kathleen Shannon and Emily...",
      time: "13-minute read",
      nReads: "1.9k reads",
      icon1: "Image/Time.png",
      icon2: "Image/Person.png",
      finished: true,
    },
    {
      id: 11,
      imgsrc: "/BookCovers/beyondentrepreneurship.png",
      bookName: "Beyond Entrepreneurship",
      authorName: "Jim Collins & Bill Lazier",
      time: "13-minute read",
      nReads: "1.9k reads",
      icon1: "Image/Time.png",
      icon2: "Image/Person.png",
      finished: false,
    },
  ]);

  const [justAdded, setJustAdded] = useState([
    {
      id: 7,
      imgsrc: "/BookCovers/thelonelycentury.png",
      bookName: "The Lonely Century",
      authorName: "Noreena Hertz",
      time: "15-minute read",
      nReads: "1.9k reads",
      icon1: "Image/Time.png",
      icon2: "Image/Person.png",
      finished: true,
    },
    {
      id: 8,
      imgsrc: "/BookCovers/eatbetterfeelbetter.png",
      bookName: "Eat Better, Feel Better",
      authorName: "Giada De Laurentiis",
      time: "13-minute read",
      nReads: "1.9k reads",
      icon1: "Image/Time.png",
      icon2: "Image/Person.png",
      finished: true,
    },
  ]);

  const [featured, setFeatured] = useState([
    {
      id: 1,
      imgsrc: "/BookCovers/bringyourhumantowork.png",
      bookName: "Bring Your Human To Work",
      authorName: "Eric Keswin",
      time: "13-minute read",
      nReads: "1.9k reads",
      icon1: "Image/Time.png",
      icon2: "Image/Person.png",
      finished: false,
    },
  ]);

  const handleClick = (id: number) => {
    console.log(id);
    navigate(`/bookDetailPage/${id}`);
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

          <Box sx={{ display: "flex", flexDirection: "column", mb: 10 }}>
            <CustomTypo
              variant="heading3"
              component="div"
              children="Trending blinks"
              className={classes.trendingBooks}
            />

            <CardGrid addtoLib details={trending} handleClick={handleClick} />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", mb: 10 }}>
            <CustomTypo
              variant="heading3"
              component="div"
              children="Just added"
              className={classes.trendingBooks}
            />

            <CardGrid addtoLib details={justAdded} handleClick={handleClick} />
          </Box>

          <Box>
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
