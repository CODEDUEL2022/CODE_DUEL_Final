import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

type T = typeof Button;

const meta: Meta<T> = {
  title: 'commons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    size: { control: { type: 'select', options: ['sm', 'md', 'lg'] } },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    text: 'Button',
  },
};

export const Error: Story = {
  args: {
    text: 'Button',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Button',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    text: 'Button',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    text: 'Button',
    size: 'lg',
  },
};
