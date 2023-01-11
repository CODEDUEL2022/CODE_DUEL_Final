## User-001

<br />
<table>
    <tr>
        <td>API機能No</td>
        <td>User-001</td>
    </tr>
    <tr>
        <td>API名</td>
        <td>Login</td>
    </tr>
    <tr>
        <td>更新日/更新者</td>
        <td>2023-1-6/かわちゃん</td>
    </tr>
    <tr>
        <td>概要</td>
        <td>ログイン処理を行う為のAPIです。</td>
    </tr>
</table>

| 入力 | |
| -- | -- |
| アクセスURL | api/user/login |

<br/>

## フロント
### POSTデータ

| JSON_Key | 型 | サイズ | 必須 | 暗号化 | 検索条件 | 値の説明 |
| -- | -- | -- | -- | -- | -- | -- |
| user_name | str | | 〇 | | 完全一致 | ユーザー名です |
| user_password | str | | 〇 | 〇 | 完全一致 | パスワードです |

<br/>

## バック
### 返却データ(JSON形式)
| JSON_Key | 型 | サイズ | 必須 | 値の説明 |
| -- | -- | -- | -- | -- |
| status | int | | 〇 | 処理結果ステータス |
| messages | list | | | エラーメッセージ群 |
| result | list | | | フロントに渡す値の配列 |
| - is_success | int |  | 〇 | ログインに成功したか否かのboolen |
| - user_id | int | | 〇 | ローカルストレージに保存する用のプレイヤーid。リロードした際はこれを元にプレイヤー情報をDBから取得する |
| - user_level | list | | 〇 | プレイヤーのレートを取得します [exp(int) , level(int)]|
| - user


<br/>

## メッセージ
### 処理結果ステータス
| ステータス | 共個 | メッセージ内容 | 
| -- | -- | -- |
| 200 | 共通 | 成功 |
| 400 | 共通 | Bad Request(アクセスURLミス等) |
| 403 | 共通 | Forbidden(コードエラー等) |
| 500 | 共通 | Internal Server Error(バックエンドエラー) |
