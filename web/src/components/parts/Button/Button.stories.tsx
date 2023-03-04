import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainButton } from './MainButton';

// storyのmetadataをdefault export
export default {
  title: 'MainButton', // コンポーネントのタイトル(任意)
  component: MainButton, // 実際に使用するコンポーネント（上でimportしたもの）
} as ComponentMeta<typeof MainButton>;

/// 1. Storybookで描画するためのコンポーネントの雛形を用意しておく
const Template: ComponentStory<typeof MainButton> = (args) => <MainButton {...args} />;

// 2. bindを用いて雛形を元にしたコピーを作成
// 名前付きエクスポートはデフォルトでストーリーオブジェクトを表す
export const Default: ComponentStory<typeof MainButton> = Template.bind({});

Default.args = {
  children: <div>あああ</div>,
  handleClick: () => console.log('aaa'),
};
Default.storyName = 'デフォルト';

export const PlayButton: ComponentStory<typeof MainButton> = Template.bind({});

PlayButton.args = {
  children: <div>あああ</div>,
  handleClick: () => console.log('aaa'),
};
PlayButton.storyName = 'playボタン';

export const CardList: ComponentStory<typeof MainButton> = Template.bind({});
CardList.args = {
  children: <div>あああ</div>,
  handleClick: () => console.log('aaa'),
};
CardList.storyName = 'カード一覧';
