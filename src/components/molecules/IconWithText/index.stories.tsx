import IconText from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Time from "../../../assets/Image/Time.png";

export default {
  title: "molecules/IconText",
  component: IconText,
} as ComponentMeta<typeof IconText>;

export const displayTime: ComponentStory<typeof IconText> = () => {
  return <IconText Path={Time} text="13-minute read" ColGap="5.67px" />;
};
