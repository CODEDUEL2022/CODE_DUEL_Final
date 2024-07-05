import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '.';

type T = typeof TextInput;

const meta: Meta<T> = {
  title: 'commons/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
};
