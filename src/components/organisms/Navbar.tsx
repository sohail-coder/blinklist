import React from "react";
import { Grid } from "@mui/material";
import blinklist from "../../assets/blinklist.png";
import searchIcon from "../../assets/searchIcon.png";
import Buttons from "../atoms/Buttons/Buttons";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import dropdown from "../../assets/drop_down.png";
import Ava from "../atoms/Avatar/index";
import { useState } from "react";

const Navbar = () => {
  const [clicked, handler] = useState(false);

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      role="Header"
      sx={{
        position: "relative",
        top: "20px",
        width: "1440px",
        height: "86px",
      }}
    >
      <Grid
        item
        container
        direction="row"
        columnGap={"36px"}
        wrap="nowrap"
        sx={{
          display: "flex",
          alignItems: "center",
          background: "#FFFFFF",
          width: "925px",
          position: "absolute",
          left: "18%",
        }}
      >
        <Grid
          item
          sx={{
            height: "24px",
            width: "150px",
          }}
        >
          <img src={blinklist} alt="blinklist" width="129" height="26" />
        </Grid>

        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={searchIcon} alt="searchIcon" />
        </Grid>

        <Grid item>
          <Buttons
            variant="text"
            endIcon={clicked ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            onClick={() => handler(!clicked)}
            sx={{
              width: "79px",
              height: "20px",
              textTransform: "none",
              color: "#03314B",
              fontSize: "16px",
            }}
          >
            Explore
          </Buttons>
        </Grid>

        <Grid item>
          <Buttons
            variant="text"
            sx={{
              width: "120px",
              height: "20px",
              textTransform: "none",
              color: "#03314B",
              fontSize: "16px",
            }}
          >
            My Library
          </Buttons>
        </Grid>

        <Grid item sx={{ position: "absolute", left: "98%" }}>
          <Ava text="SK" />
        </Grid>

        <Grid
          item
          sx={{
            width: "1440px",
            position: "absolute",
            left: "100%",
          }}
        >
          <Buttons>
            <img src={dropdown} alt="dropdown" />
          </Buttons>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
