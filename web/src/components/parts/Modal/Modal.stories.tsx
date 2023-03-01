import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default: ComponentStory<typeof Modal> = Template.bind({});

Default.args = {
  isModalOpen: false,
  width: '80%',
  children: (
    <div>
      <div>タイトル</div>
      <div>
        テキストテキスト<span>テキスト</span>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </div>
    </div>
  ),
  onClick: () => console.log('aaa'),
};
Default.storyName = 'デフォルト';
