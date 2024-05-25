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
    modalLabel: { control: 'text' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    icon: BsFile,
    text: 'カード一覧',
    isOpen: false,
    modalLabel: 'カード一覧',
    children: 'カード一覧の内容',
  },
};

export const Open: Story = {
  args: {
    icon: BsFile,
    text: 'カード一覧',
    isOpen: true,
    modalLabel: 'カード一覧',
    children: 'カード一覧の内容',
  },
};
