import type { Meta, StoryObj } from '@storybook/react';
import { MatchButtonsPresentation } from './presentations';

type T = typeof MatchButtonsPresentation;

const meta: Meta<T> = {
  title: 'features/MatchButtons',
  component: MatchButtonsPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {},
};