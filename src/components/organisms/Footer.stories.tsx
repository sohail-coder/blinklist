import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Index from "./Footer";

export default {
  title: "organisms/footer",
  component: Index,
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = () => <Index />;

export const footer = Template.bind({});
