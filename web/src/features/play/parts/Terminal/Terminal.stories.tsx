import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Terminal } from './Terminal';

export default {
  title: 'Terminal',
  component: Terminal,
} as ComponentMeta<typeof Terminal>;

const Template: ComponentStory<typeof Terminal> = (args) => <Terminal {...args} />;

export const Default: ComponentStory<typeof Terminal> = Template.bind({});

Default.args = {};
Default.storyName = 'デフォルト';
