import type { Meta, StoryObj } from '@storybook/react';
import { Terminal } from '.';

type T = typeof Terminal;

const meta: Meta<T> = {
  title: 'commons/Terminal',
  component: Terminal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    texts: {
      description: '表示するテキスト',
      table: {
        type: {
          summary: 'string[]',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    texts: ['テキスト1', 'テキスト2', 'テキスト3'],
  },
};
