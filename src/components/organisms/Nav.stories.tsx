// Button.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Nav from "./Nav";

export default {
  title: "organisms/header",
  component: Nav,
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = () => <Nav />;

export const header = Template.bind({});
