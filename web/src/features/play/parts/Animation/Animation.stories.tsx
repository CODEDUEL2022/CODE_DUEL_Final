
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Animation } from './Animation';

export default {
    title: 'Animation',
    component: Animation,
} as ComponentMeta<typeof Animation>

const Template: ComponentStory<typeof Animation> = (args) => <Animation {...args} />;

export const Default: ComponentStory<typeof Animation> = Template.bind({});

Default.args = {

};
Default.storyName = 'デフォルト';
