import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '.';
import { BiWorld } from 'react-icons/bi';

type T = typeof IconButton;

const meta: Meta<T> = {
  title: 'ui/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    handleClick: { action: 'clicked' },
    text: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<T>;

export const RandomMatch: Story = {
  args: {
    icon: BiWorld,
    text: 'Random Match',
  },
};
