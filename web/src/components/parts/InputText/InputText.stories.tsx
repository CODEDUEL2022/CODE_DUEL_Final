
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputText } from './InputText';

export default {
    title: 'InputText',
    component: InputText,
} as ComponentMeta<typeof InputText>

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />;

export const Default: ComponentStory<typeof InputText> = Template.bind({});

Default.args = {

};
Default.storyName = 'デフォルト';
