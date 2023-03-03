import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SubButton } from './SubButton';

export default {
  title: 'SubButton',
  component: SubButton,
} as ComponentMeta<typeof SubButton>;

const Template: ComponentStory<typeof SubButton> = (args) => <SubButton {...args} />;

export const Default: ComponentStory<typeof SubButton> = Template.bind({});

Default.args = {
  text: 'hogehoge',
};
Default.storyName = 'デフォルト';

export const CardList: ComponentStory<typeof SubButton> = Template.bind({});

CardList.args = {
  text: 'カード一覧',
};
CardList.storyName = 'カード一覧';

export const HowToPlay: ComponentStory<typeof SubButton> = Template.bind({});

HowToPlay.args = {
  text: '遊び方',
};
HowToPlay.storyName = '遊び方';
