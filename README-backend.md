## バックエンド環境構築方法

### 環境構築-api
1. docker compose up --build api
2. (次回から)docker compose up

### 環境構築-db
1. docker compose up
2. docker compose exec db bash
3. psql -h localhost -U user

### 初期設定-db
ここでは、apiでprismaのschemaを作成し、dbに反映をします。
(テーブルが作成されるところまでは確認済みです。)
1. docker compose exec api bash
2. npx prisma migrate dev --name init