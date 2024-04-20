import type { Meta, StoryObj } from '@storybook/react';
import { DeckCarouselPresentation } from './presentations';
import { Cards } from '../../../api/@types';

type T = typeof DeckCarouselPresentation;

const meta: Meta<T> = {
  title: 'features/DeckCarousel',
  component: DeckCarouselPresentation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    deckName: { control: { type: 'text' } },
    cards: { control: { type: 'object' } },
    handlePrevDeck: { action: 'handlePrevDeck' },
    handleNextDeck: { action: 'handleNextDeck' },
  },
};

export default meta;
type Story = StoryObj<T>;

const sampleCards = Array.from({ length: 20 }, (_, i) => ({
  name: `card${i}`,
  image_src: 'https://via.placeholder.com/32x48',
  value: i,
  type: 'attack',
}));

export const Default: Story = {
  args: {
    deckName: 'deckName',
    cards: sampleCards as Cards,
  },
};
