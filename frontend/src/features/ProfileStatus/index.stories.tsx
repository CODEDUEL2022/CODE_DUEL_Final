import type { Meta, StoryObj } from '@storybook/react';
import { ProfileStatusPresentation } from './presentations';

type T = typeof ProfileStatusPresentation;

const meta: Meta<T> = {
  title: 'features/ProfileStatus',
  component: ProfileStatusPresentation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {},
};
