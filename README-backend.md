## バックエンド環境構築方法

### 環境構築-api
1. `docker compose up --build api`
2. (次回から)`docker compose up`

### 環境構築-db
1. `docker compose up db`

### 初期設定-db
ここでは、apiでprismaのschemaを作成し、dbに反映をします。
(テーブルが作成されるところまでは確認済みです。)
1. `docker compose exec api bash`
2. `npx prisma migrate dev --name init`

### 初期データ投入
1. `docker compose exec db bash`
2. `psql -h localhost -U user -d codeduel`
3. `\i docker-entrypoint-initdb.d/init.sql`(なぜかコンテナ起動時に自動実行されないので手動入力お願いします。。。)

