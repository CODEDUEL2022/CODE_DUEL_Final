import type { Meta, StoryObj } from '@storybook/react';
import { TopFormAndLinkPresentation } from './presentations';

type T = typeof TopFormAndLinkPresentation;

const meta: Meta<T> = {
  title: 'features/TopFormAndLink',
  component: TopFormAndLinkPresentation,
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