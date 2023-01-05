## run on the web

```
cd web
yarn dev
```

## run storybook

```
cd web 
yarn storybook
```
### storybookとは?

各コンポーネントのUIの確認や、渡されたpropsによる挙動を試すことができるツールです。

カタログのようにコンポーネントの管理ができるので便利です。

storybook上でコンポーネントの確認がしたい場合、`src/stories`下に拡張子`stories.tsx`のファイルを作成してください。

詳しくは[この記事](https://qiita.com/suzu1997/items/2afcfc2d13f4bdd12841#storybook%E3%81%AB%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%82%92%E7%99%BB%E9%8C%B2%E3%81%99%E3%82%8B)を参考にしてください。

## webディレクトリ構成

```
web/
├ .next/
├ node_modules/
├ public/ # 画像、音声など
├ src/

│ ├ features/ # 各ページ固有のコンポーネント
│ │ ├ home/ 
│ │ │ ├ parts/ 
│ │ │ ├ templates/ # partsを組み合わせたもの
│ │ │ └ HomePage.tsx # ページ全体
│ │ ├ deck/ 
│ │ ├ waiting/ 
│ │ ├ play/ 

│ ├ components/ 汎用的なコンポーネント
│ | ├ parts/ 
│ | ├ templates/ 

│ ├ libs/ # 汎用的な機能
│ │ ├ hooks/　# api用のフック、useContextなど
│ │ ├ utils/ #　汎用的な関数
│ │ ├ type/　# 汎用的な型

│ ├ pages/ # ルーティングに関係するもの
│ │ ├ home/
│ │ │ └ index.ts　# features/home/views/HomePage.tsxをexportする?
│ │ ├ deck/
│ │ │ └ index.ts
│ │ ├ waiting/
│ │ │ └ index.ts
│ │ ├ play/
│ │ │ └ [id].ts # idはroomIDを動的に埋め込む

│ ├ stories/ # storybook用

├ .eslintrc.json # lintの設定
├ .prettierrc # prettierの設定
...
```