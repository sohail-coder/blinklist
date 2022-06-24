import React from "react";
import { Grid } from "@mui/material";

interface TemplateProps {
  Header: React.ReactNode;
  Content: React.ReactNode;
  Footer: React.ReactNode;
}

const Template1 = ({ Header, Footer, Content }: TemplateProps) => {
  return (
    <Grid
      container
      direction="column"
      role="template"
      sx={{ alignItems: "center", textAlign: "left" }}
    >
      <Grid item mb={"60px"}>
        {Header}
      </Grid>

      <Grid item container>
        <Grid item xs={false} sm={3} />
        <Grid item container direction="column" xs={6}>
          {Content}
        </Grid>
        <Grid item xs={false} sm={3} />
      </Grid>

      <Grid item mt={"111px"}>
        {Footer}
      </Grid>
    </Grid>
  );
};

export default Template1;
