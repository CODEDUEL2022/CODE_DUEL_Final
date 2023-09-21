
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PlayButtons } from './PlayButtons';

export default {
    title: 'PlayButtons',
    component: PlayButtons,
} as ComponentMeta<typeof PlayButtons>

const Template: ComponentStory<typeof PlayButtons> = (args) => <PlayButtons {...args} />;

export const Default: ComponentStory<typeof PlayButtons> = Template.bind({});

Default.args = {

};
Default.storyName = 'デフォルト';
