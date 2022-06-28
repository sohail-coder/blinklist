import { Grid } from "@mui/material";
import React, { useState } from "react";
import AvatarWithIcon from "../../molecules/AvatarWithIcon";
import BlinkList from "../../../assets/blinklist.png";
import CustomTypo from "../../atoms/CustomTypo";
import { customStyles } from "../../../theme/mainTheme";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import Buttons from "../../atoms/Buttons/Buttons";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as SearchIcon } from "../../../assets/SearchIcon.svg";
import ExploreDrop from "../Explore/index";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Tooltip from "@mui/material/Tooltip";
const Index = () => {
  const [clicked, handler] = useState(false);
  const navigate = useNavigate();
  const classes = customStyles();
  const [logClick] = useState(true);
  const { logout } = useAuth0();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      // sx={{ width: "1440px" }}
      role="Header"
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
        }}
      >
        <Grid
          item
          container
          direction="row"
          columnGap={"40px"}
          wrap="nowrap"
          sx={{ width: "auto", display: "flex", alignItems: "center" }}
        >
          <Grid item sx={{ height: "24px", width: "100px" }}>
            <img src={BlinkList} alt="logo" />
          </Grid>

          <Grid item sx={{ display: "flex", alignItems: "center" }}>
            <SvgIcon
              component={SearchIcon}
              sx={{ width: "20.31px", height: "20.31px" }}
            />
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
        </Grid>

        <Grid
          item
          sx={{
            width: "78px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Buttons
            variant="text"
            onClick={() => navigate("/")}
            sx={{ textTransform: "none" }}
            role="Lib-button"
          >
            <CustomTypo
              variant="body2"
              component="div"
              children="My Library"
              className={classes.bookInfo}
            />
          </Buttons>
        </Grid>

        <Grid item>
          <Tooltip title="Logout">
            <span onClick={() => logout({ returnTo: window.location.origin })}>
              <AvatarWithIcon
                logClick={logClick}
                handleLogin={() => console.log("logout clicked")}
              />
            </span>
          </Tooltip>
        </Grid>
      </Grid>

      <Grid
        item
        sx={{ width: "1440px" }}
        className={clicked ? classes.visible : classes.hidden}
        data-testid="Explore-Popup"
      >
        <ExploreDrop handleChange={() => navigate("/explorePage")} />
      </Grid>
    </Grid>
  );
};

export default Index;
