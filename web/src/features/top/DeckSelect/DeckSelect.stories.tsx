
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DeckSelect } from './DeckSelect';

export default {
    title: 'DeckSelect',
    component: DeckSelect,
} as ComponentMeta<typeof DeckSelect>

const Template: ComponentStory<typeof DeckSelect> = (args) => <DeckSelect {...args} />;

export const Default: ComponentStory<typeof DeckSelect> = Template.bind({});

Default.args = {

};
Default.storyName = 'デフォルト';
