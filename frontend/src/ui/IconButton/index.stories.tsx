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
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    icon: BiWorld,
    text: 'Random Match',
  },
};

export const Error: Story = {
  args: {
    icon: BiWorld,
    text: 'Random Match',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    icon: BiWorld,
    text: 'Random Match',
    disabled: true,
  },
};
