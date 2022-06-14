import React from "react";
import CustomAvatar from "../../atoms/Avatar/index";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { Button } from "@mui/material";

interface Props {
  logClick: boolean;
  handleLogin: any;
}

const Index = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        width: "62px",
        height: "40px",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
      data-testid="avatarLogin"
    >
      <CustomAvatar children="A" />
      {props.logClick ? (
        <KeyboardArrowDownIcon
          sx={{ color: "#042330", width: "20px", height: "20px" }}
        />
      ) : (
        <>
          <KeyboardArrowUpIcon
            sx={{ color: "#042330", width: "20px", height: "20px" }}
          />

          <Button
            variant="contained"
            sx={{
              position: "absolute",
              top: "50px",
              right: "24%",
              background: "white",
            }}
            onClick={() => {
              props.handleLogin();
            }}
          >
            LogOut
          </Button>
        </>
      )}
    </div>
  );
};

export default Index;
