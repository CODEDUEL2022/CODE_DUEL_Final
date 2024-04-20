import type { Meta, StoryObj } from '@storybook/react';
import { DeckCarouselPresentation } from './presentations';

type T = typeof DeckCarouselPresentation;

const meta: Meta<T> = {
  title: 'features/DeckCarousel',
  component: DeckCarouselPresentation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {},
};
