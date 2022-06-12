import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Linear from "./Linear";

export default {
  title: "atoms/avatar",
  component: Linear,
} as ComponentMeta<typeof Linear>;

const Template: ComponentStory<typeof Linear> = (args) => <Linear />;

export const A = Template.bind({});
