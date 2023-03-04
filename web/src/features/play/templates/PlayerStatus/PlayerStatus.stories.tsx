import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PlayerStatus } from './PlayerStatus';

export default {
  title: 'PlayerStatus',
  component: PlayerStatus,
} as ComponentMeta<typeof PlayerStatus>;

const Template: ComponentStory<typeof PlayerStatus> = (args) => <PlayerStatus {...args} />;

export const Default: ComponentStory<typeof PlayerStatus> = Template.bind({});

Default.args = {
  playerData: {
    id: 111,
    name: 'ゆってぃー',
    hp: 150,
    turn: false,
    game_id: 'hogehoge',
  },
  color: '#fff',
};
Default.storyName = 'デフォルト';

export const Mine: ComponentStory<typeof PlayerStatus> = Template.bind({});

Mine.args = {
  playerData: {
    id: 111,
    name: 'ゆってぃー',
    hp: 100,
    turn: false,
    game_id: 'hogehoge',
  },
  color: '#FAFF00',
};
Mine.storyName = '自分のステータス';

export const Opponent: ComponentStory<typeof PlayerStatus> = Template.bind({});

Opponent.args = {
  playerData: {
    id: 111,
    name: 'ゆってぃー',
    hp: 20,
    turn: false,
    game_id: 'hogehoge',
  },
  color: '#FF9900',
};
Opponent.storyName = '相手のステータス';
