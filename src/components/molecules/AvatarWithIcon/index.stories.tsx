import AvatarIcon from "./index";

import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "molecules/AvatarWithIcon",
  component: AvatarIcon,
} as ComponentMeta<typeof AvatarIcon>;

const Template: ComponentStory<typeof AvatarIcon> = () => (
  <AvatarIcon
    logClick={false}
    handleLogin={() => {
      console.log("Login Handler");
    }}
  />
);

export const AvatarDown = Template.bind({});
