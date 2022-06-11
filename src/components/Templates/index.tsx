import { Grid } from "@mui/material";
import React from "react";

interface Props {
  Header: React.ReactNode;
  Content: React.ReactNode;
  Footer: React.ReactNode;
}

const index = ({ Header, Content, Footer }: Props) => {
  return (
    <Grid container direction="column" spacing={10}>
      <Grid item>{Header}</Grid>
      <Grid item>{Content}</Grid>
      <Grid
        item
        style={{
          position: "absolute",
          left: "-300px",
          bottom: "-900px",
          right: 0,
        }}
      >
        {Footer}
      </Grid>
    </Grid>
  );
};

export default index;
