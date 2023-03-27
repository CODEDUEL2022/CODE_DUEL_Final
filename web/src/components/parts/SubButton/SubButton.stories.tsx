import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SubButton } from './SubButton';
import { FiSettings, FiFile } from 'react-icons/fi';

export default {
  title: 'SubButton',
  component: SubButton,
} as ComponentMeta<typeof SubButton>;

const Template: ComponentStory<typeof SubButton> = (args) => <SubButton {...args} />;

export const Default: ComponentStory<typeof SubButton> = Template.bind({});

Default.args = {
  children: <div>hogehoge</div>,
};
Default.storyName = 'デフォルト';

export const CardList: ComponentStory<typeof SubButton> = Template.bind({});

CardList.args = {
  children: (
    <>
      <FiFile></FiFile>
      <div style={{ paddingLeft: '5px' }}>カード一覧</div>
    </>
  ),
};
CardList.storyName = 'カード一覧';

export const HowToPlay: ComponentStory<typeof SubButton> = Template.bind({});

HowToPlay.args = {
  children: (
    <>
      <FiSettings></FiSettings>
      <div style={{ paddingLeft: '5px' }}>遊び方</div>
    </>
  ),
};
HowToPlay.storyName = '遊び方';
