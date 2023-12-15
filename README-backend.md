## バックエンド環境構築方法

### 環境構築-api
1. docker compose up --build api
2. (次回から)docker compose up
### 環境構築-db
1. docker compose up
2. docker compose exec db bash
3. pgsql -h localhost -U user