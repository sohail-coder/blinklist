import React from "react";
import { Button, ButtonProps } from "@mui/material";

const Buttons = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button {...rest} role="button">
      {children}
    </Button>
  );
};

export default Buttons;
