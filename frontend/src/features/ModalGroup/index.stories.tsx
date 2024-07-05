import type { Meta, StoryObj } from '@storybook/react';
import { ModalGroupPresentation } from './presentations';

type T = typeof ModalGroupPresentation;

const meta: Meta<T> = {
  title: 'features/ModalGroup',
  component: ModalGroupPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    cards: {
      description: 'カードの情報',
      table: {
        type: {
          summary: 'Cards',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    cards: [
      {
        name: 'カード1',
        value: 1,
        type: 'attack',
        image_src: 'https://via.placeholder.com/150',
      },
      {
        name: 'カード2',
        value: 2,
        type: 'heal',
        image_src: 'https://via.placeholder.com/150',
      },
      {
        name: 'カード3',
        value: 3,
        type: 'absorption',
        image_src: 'https://via.placeholder.com/150',
      },
      {
        name: 'カード4',
        value: 4,
        type: 'attack',
        image_src: 'https://via.placeholder.com/150',
      },
      {
        name: 'カード5',
        value: 5,
        type: 'heal',
        image_src: 'https://via.placeholder.com/150',
      },
      {
        name: 'カード6',
        value: 6,
        type: 'absorption',
        image_src: 'https://via.placeholder.com/150',
      },
      {
        name: 'カード7',
        value: 7,
        type: 'attack',
        image_src: 'https://via.placeholder.com/150',
      },
      {
        name: 'カード8',
        value: 8,
        type: 'heal',
        image_src: 'https://via.placeholder.com/150',
      },
      {
        name: 'カード9',
        value: 9,
        type: 'absorption',
        image_src: 'https://via.placeholder.com/150',
      },
      {
        name: 'カード10',
        value: 10,
        type: 'attack',
        image_src: 'https://via.placeholder.com/150',
      },
    ],
  },
};
