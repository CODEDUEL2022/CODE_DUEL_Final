import type { Meta, StoryObj } from '@storybook/react';
import { TopTitle } from '.';

type T = typeof TopTitle;

const meta: Meta<T> = {
  title: 'ui/TopTitle',
  component: TopTitle,
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
