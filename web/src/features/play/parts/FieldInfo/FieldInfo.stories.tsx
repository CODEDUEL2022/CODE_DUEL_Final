
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FieldInfo } from './FieldInfo';

export default {
    title: 'FieldInfo',
    component: FieldInfo,
} as ComponentMeta<typeof FieldInfo>

const Template: ComponentStory<typeof FieldInfo> = (args) => <FieldInfo {...args} />;

export const Default: ComponentStory<typeof FieldInfo> = Template.bind({});

Default.args = {

};
Default.storyName = 'デフォルト';
