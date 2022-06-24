import React from "react";
import CustomTypo from "../../atoms/CustomTypo/index";
import { customStyles } from "../../../theme/mainTheme";
import { Grid } from "@mui/material";

type iprops = {
  className: string;
};
export interface IconTextProps {
  // Icons: React.FC<iprops>,
  text: string;
  ColGap: string;
  Path: string;
  className?: string;
}

const index = ({ text, ColGap, Path, className }: IconTextProps) => {
  const Classes = customStyles();
  return (
    <Grid
      container
      columnGap={ColGap}
      sx={{ alignItems: "center" }}
      className={className}
      data-testid="IconWithText"
    >
      <Grid item>
        <img src={Path} />
      </Grid>

      <Grid item mb={"5px"}>
        <CustomTypo
          variant="caption"
          component="div"
          children={text}
          className={Classes.iconText}
        />
      </Grid>
    </Grid>
  );
};

export default index;
