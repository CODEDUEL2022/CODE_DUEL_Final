
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PlayButtonsPresentation } from './PlayButtonsPresentation';

export default {
    title: 'PlayButtons',
    component: PlayButtonsPresentation,
} as ComponentMeta<typeof PlayButtonsPresentation>

const Template: ComponentStory<typeof PlayButtonsPresentation> = (args) => <PlayButtonsPresentation {...args} />;

export const Default: ComponentStory<typeof PlayButtonsPresentation> = Template.bind({});

Default.args = {

};
Default.storyName = 'デフォルト';
