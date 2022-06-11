import Buttons from "./Buttons";

export default {
  title: "atoms/Buttons",
  component: Buttons,
};

export const buttons = () => {
  return (
    <Buttons variant="outlined">
      Read now
    </Buttons>
  );
};

