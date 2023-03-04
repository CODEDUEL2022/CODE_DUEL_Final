import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HPBar } from './HPBar';

export default {
  title: 'HPBar',
  component: HPBar,
} as ComponentMeta<typeof HPBar>;

const Template: ComponentStory<typeof HPBar> = (args) => <HPBar {...args} />;

export const Default: ComponentStory<typeof HPBar> = Template.bind({});

Default.args = {
  HP: 200,
};
Default.storyName = 'デフォルト';

export const Damaged: ComponentStory<typeof HPBar> = Template.bind({});

Damaged.args = {
  HP: 100,
};
Damaged.storyName = 'HP100';
