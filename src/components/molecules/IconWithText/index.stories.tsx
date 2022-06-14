import IconText from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Time from "../../../assets/Image/Time.png";
import { customStyles } from "../../../theme/mainTheme";

export default {
  title: "molecules/IconText",
  component: IconText,
} as ComponentMeta<typeof IconText>;

export const displayTime: ComponentStory<typeof IconText> = () => {
  const classes = customStyles();
  return <IconText Path={Time} text="13-minute read" ColGap="5.67px" />;
};
