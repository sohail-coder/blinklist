import Explore from "./index";

export default {
  title: "organisms/Explore",
  component: Explore,
};

export const card = () => {
  return (
    <Explore
      handleChange={() => {
        console.log("Button Clicked");
      }}
    />
  );
};
