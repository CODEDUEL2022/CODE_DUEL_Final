import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PlayerInformation } from './PlayerInformation';

export default {
  title: 'PlayerInformation',
  component: PlayerInformation,
} as ComponentMeta<typeof PlayerInformation>;

const Template: ComponentStory<typeof PlayerInformation> = (args) => (
  <div style={{ width: '100px' }}>
    <PlayerInformation {...args} />
  </div>
);

export const Default: ComponentStory<typeof PlayerInformation> = Template.bind({});

Default.args = {
  name: 'テストユーザー',
  rate: 1500,
};
Default.storyName = 'デフォルト';
