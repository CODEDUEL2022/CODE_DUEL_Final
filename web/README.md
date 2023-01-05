## run on the web

```zsh
cd web
yarn dev
```

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
│ │ │ ├ views/ # ページ全体
│ │ │ │ └ HomePage.tsx
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

├ pages/ # ルーティングに関係するもの
│ ├ home/
│ │ └ index.ts　# features/home/views/HomePage.tsxをexportする
│ ├ deck/
│ │ └ index.ts
│ ├ waiting/
│ │ └ index.ts
│ ├ play/
│ │ └ [id].ts # idはroomIDを動的に埋め込む

├ .eslintrc.json # lintの設定
├ .prettierrc # prettierの設定
...
```