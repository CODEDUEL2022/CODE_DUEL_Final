import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PlayerInformationPresentation } from './PlayerInformationPresentation';

export default {
  title: 'PlayerInformation',
  component: PlayerInformationPresentation,
} as ComponentMeta<typeof PlayerInformationPresentation>;

const Template: ComponentStory<typeof PlayerInformationPresentation> = (args) => (
  <div style={{ width: '100px' }}>
    <PlayerInformationPresentation {...args} />
  </div>
);

export const Default: ComponentStory<typeof PlayerInformationPresentation> = Template.bind({});

Default.args = {
  name: 'テストユーザー',
  rate: 1500,
};
Default.storyName = 'デフォルト';
