// Button.stories.ts|tsx

import React from 'react';

import { ComponentMeta,ComponentStory } from '@storybook/react';

import Index from './index'

export default {
  
  title: 'atoms/avatar',
  component: Index,
} as ComponentMeta<typeof Index>;


const Template:ComponentStory<typeof Index> = (args) => <Index  {...args}/>;


export const A = Template.bind({});
A.args = {text:"A"}

