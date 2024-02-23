import type { Meta, StoryObj } from '@storybook/react';
import { TopLinkPresentation } from './presentations';

type T = typeof TopLinkPresentation;

const meta: Meta<T> = {
  title: 'features/TopLink',
  component: TopLinkPresentation,
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