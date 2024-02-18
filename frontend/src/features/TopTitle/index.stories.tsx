import type { Meta, StoryObj } from '@storybook/react';
import { TopTitlePresentation } from './presentations';

type T = typeof TopTitlePresentation;

const meta: Meta<T> = {
  title: 'features/TopTitle',
  component: TopTitlePresentation,
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
