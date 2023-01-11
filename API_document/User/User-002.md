## User-002

<br />
<table>
    <tr>
        <td>API機能No</td>
        <td>User-002</td>
    </tr>
    <tr>
        <td>API名</td>
        <td>MakeUser</td>
    </tr>
    <tr>
        <td>更新日/更新者</td>
        <td>2023-1-6/かわちゃん</td>
    </tr>
    <tr>
        <td>概要</td>
        <td>ユーザー作成の為のAPIです。</td>
    </tr>
</table>

| 入力 | |
| -- | -- |
| アクセスURL | api/user/make_user |

<br/>

## フロント
### POSTデータ

| JSON_Key | 型 | サイズ | 必須 | 暗号化 | 検索条件 | 値の説明 |
| -- | -- | -- | -- | -- | -- | -- |
| user_name | str | | 〇 | | 完全一致 | プレイヤーの名前です。 |
| user_password | str | | 〇 | 〇 | 完全一致 | プレイヤーのログインパスワードです。 |


<br/>

## バック
### 返却データ(JSON形式)
| JSON_Key | 型 | サイズ | 必須 | 値の説明 |
| -- | -- | -- | -- | -- |
| status | int | | 〇 | 処理結果ステータス |
| messages | list | | | エラーメッセージ群 |
| result | list | | | フロントに渡す値の配列 |
| - is_success | int |  | 〇 | ユーザー作成に成功したか否かの判定フラグ |



<br/>

## メッセージ
### 処理結果ステータス
| ステータス | 共個 | メッセージ内容 | 
| -- | -- | -- |
| 200 | 共通 | 成功 |
| 400 | 共通 | Bad Request(アクセスURLミス等) |
| 403 | 共通 | Forbidden(コードエラー等) |
| 500 | 共通 | Internal Server Error(バックエンドエラー) |

