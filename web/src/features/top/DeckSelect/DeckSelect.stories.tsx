
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DeckSelectPresentation } from './DeckSelectPresentation';
import { sampleCards } from 'libs/mocks/cards';

export default {
    title: 'DeckSelect',
    component: DeckSelectPresentation,
} as ComponentMeta<typeof DeckSelectPresentation>

const Template: ComponentStory<typeof DeckSelectPresentation> = (args) => <DeckSelectPresentation {...args} />;

export const Default: ComponentStory<typeof DeckSelectPresentation> = Template.bind({});

Default.args = {
    cards: sampleCards,
    name: 'デッキ名',
    description: 'デッキの説明',
};
Default.storyName = 'デフォルト';
