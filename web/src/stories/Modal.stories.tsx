import React, { Children } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from '../components/parts/Modal/Modal';

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default: ComponentStory<typeof Modal> = Template.bind({});

Default.args = {
  width: '500px',
  children: (
    <div>
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </div>
  ),
};
Default.storyName = 'デフォルト';
