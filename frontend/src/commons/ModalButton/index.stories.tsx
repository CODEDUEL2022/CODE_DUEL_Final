import type { Meta, StoryObj } from '@storybook/react';
import { ModalButtonPresentation } from './presentations';
import { BsFile } from 'react-icons/bs';

type T = typeof ModalButtonPresentation;

const meta: Meta<T> = {
  title: 'commons/ModalButton',
  component: ModalButtonPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    isOpen: { control: 'boolean' },
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

export const Open: Story = {
  args: {
    icon: BsFile,
    text: 'カード一覧',
    isOpen: true,
  },
};
