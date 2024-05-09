import type { Meta, StoryObj } from '@storybook/react';
import { ModalButtonPresentation } from './presentations';
import { BsFile } from 'react-icons/bs';

type T = typeof ModalButtonPresentation;

const meta: Meta<T> = {
  title: 'features/ModalButton',
  component: ModalButtonPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    icon: BsFile,
    text: 'カード一覧',
  },
};
