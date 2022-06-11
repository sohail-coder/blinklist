import { Grid } from "@mui/material";
import { useState } from "react";
import logo from "../../assets/blinklist.png";
import searchIcon from "../../assets/searchIcon.png";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import Buttons from "../atoms/Buttons/Buttons";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import dropdown from "../../assets/drop_down.png";
function Nav() {
  const [clicked, handler] = useState(false);

  return (
    <Grid
      container
      alignItems="center"
      style={{ position: "absolute", left: "250px" }}
    >
      <Grid item>
        <img src={logo} alt="logo" />
      </Grid>
      <Grid
        item
        style={{ position: "relative", left: "30px" }}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={searchIcon} alt="logo" />
      </Grid>
      <Grid item style={{ left: "10px", position: "relative" }}>
        <Buttons
          variant="text"
          endIcon={clicked ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          onClick={() => handler(!clicked)}
          sx={{
            // width: "150px",
            left: "50px",
            height: "20px",
            textTransform: "none",
            color: "#03314B",
            fontSize: "16px",
            position: "relative",
          }}
        >
          Explore
        </Buttons>
      </Grid>
      <Grid item>
        <Buttons
          variant="text"
          sx={{
            // width: "180px",
            left: "80px",
            height: "20px",
            textTransform: "none",
            color: "#03314B",
            fontSize: "16px",
            position: "relative",
          }}
        >
          My Library
        </Buttons>
      </Grid>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          left: "80px",
          position: "relative",
        }}
      >
        <Grid
          item
          // lg={12}
          sx={{
            display: "flex",
            position: "relative",
            alignItems: "center",
            left: "570px",
          }}
        >
          <Avatar sx={{ bgcolor: deepOrange[500] }}>SK</Avatar>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            position: "relative",
            alignItems: "center",
            left: "560px",
          }}
        >
          <Buttons>
            <img src={dropdown} alt="dropdown" />
          </Buttons>
        </Grid>
      </div>
    </Grid>
  );
}

export default Nav;
