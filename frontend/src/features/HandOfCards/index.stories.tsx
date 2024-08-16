import type { Meta, StoryObj } from '@storybook/react';
import { HandOfCardsPresentation } from './presentations';

type T = typeof HandOfCardsPresentation;

const meta: Meta<T> = {
  title: 'features/HandOfCards',
  component: HandOfCardsPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<T>;

const types = ['attack', 'heal', 'absorption'] as const;

const sampleCards = [
  {
    name: 'Card Name 1',
    image_src: 'https://via.placeholder.com/150',
    value: 1,
    type: types[0],
  },
  {
    name: 'Card Name 2',
    image_src: 'https://via.placeholder.com/150',
    value: 2,
    type: types[1],
  },
  {
    name: 'Card Name 3',
    image_src: 'https://via.placeholder.com/150',
    value: 3,
    type: types[2],
  },
  {
    name: 'Card Name 4',
    image_src: 'https://via.placeholder.com/150',
    value: 4,
    type: types[0],
  },
  {
    name: 'Card Name 5',
    image_src: 'https://via.placeholder.com/150',
    value: 5,
    type: types[1],
  },
  {
    name: 'Card Name 6',
    image_src: 'https://via.placeholder.com/150',
    value: 6,
    type: types[2],
  },
];

export const Default: Story = {
  args: {
    cards: sampleCards,
  },
};
