
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SubButton } from './SubButton';

export default {
    title: 'SubButton',
    component: SubButton,
} as ComponentMeta<typeof SubButton>

const Template: ComponentStory<typeof SubButton> = (args) => <SubButton {...args} />;

export const Default: ComponentStory<typeof SubButton> = Template.bind({});

Default.args = {

};
Default.storyName = 'デフォルト';
