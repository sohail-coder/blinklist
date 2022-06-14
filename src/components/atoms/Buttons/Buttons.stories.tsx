import Buttons from "./Buttons";
import { customStyles } from "../../../theme/mainTheme";

export default {
  title: "atoms/Buttons",
  component: Buttons,
};

export const buttons = () => {
  const classes = customStyles();
  return (
    <Buttons
      variant="outlined"
      className={`${classes.buttonstyle} ${classes.readNowButton}`}
    >
      Read now
    </Buttons>
  );
};
