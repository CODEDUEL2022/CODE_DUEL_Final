import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

// storyのmetadataをdefault export
export default {
  title: 'Button', // コンポーネントのタイトル(任意)
  component: Button, // 実際に使用するコンポーネント（上でimportしたもの）
} as ComponentMeta<typeof Button>;

/// 1. Storybookで描画するためのコンポーネントの雛形を用意しておく
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// 2. bindを用いて雛形を元にしたコピーを作成
// 名前付きエクスポートはデフォルトでストーリーオブジェクトを表す
export const Default: ComponentStory<typeof Button> = Template.bind({});

Default.args = {
  fontSize: '1.5em',
  text: 'hoge',
  handleClick: () => console.log('aaa'),
};
Default.storyName = 'デフォルト';

export const PlayButton: ComponentStory<typeof Button> = Template.bind({});

PlayButton.args = {
  fontSize: '1.5em',
  text: 'PLAY',
  handleClick: () => console.log('aaa'),
};
PlayButton.storyName = 'playボタン';

export const CardList: ComponentStory<typeof Button> = Template.bind({});
CardList.args = {
  fontSize: '1em',
  text: 'Card List',
  handleClick: () => console.log('aaa'),
};
CardList.storyName = 'カード一覧';
