import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '.';

type T = typeof IconButton;

const meta: Meta<T> = {
  title: 'ui/IconButton',
  component: IconButton,
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
