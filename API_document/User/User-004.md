## User-004

<br />
<table>
    <tr>
        <td>API機能No</td>
        <td>User-004</td>
    </tr>
    <tr>
        <td>API名</td>
        <td>DeleteUser</td>
    </tr>
    <tr>
        <td>更新日/更新者</td>
        <td>2023-01-11/かわちゃん</td>
    </tr>
    <tr>
        <td>概要</td>
        <td>ユーザーアカウントの削除の為のAPI</td>
    </tr>
</table>

| 入力 | |
| -- | -- |
| アクセスURL | api/user/delete_user |

<br/>

## フロント
### POSTデータ

| JSON_Key | 型 | サイズ | 必須 | 暗号化 | 検索条件 | 値の説明 |
| -- | -- | -- | -- | -- | -- | -- |
| user_id | int | | 〇 | 〇 | 完全一致 | ユーザーidをローカルストレージに保存してるので、それを取得して投げます |


<br/>

## バック
### 返却データ(JSON形式)
| JSON_Key | 型 | サイズ | 必須 | 値の説明 |
| -- | -- | -- | -- | -- |
| status | int | | 〇 | 処理結果ステータス |
| messages | list | | | エラーメッセージ群 |
| result | list | | | フロントに渡す値の配列 |
| - is_success | int | | 〇 | 削除に成功したか否かのフラグです。boolenと言っても過言ではない |


<br/>

## メッセージ
### 処理結果ステータス
| ステータス | 共個 | メッセージ内容 | 
| -- | -- | -- |
| 200 | 共通 | 成功 |
| 400 | 共通 | Bad Request(アクセスURLミス等) |
| 403 | 共通 | Forbidden(コードエラー等) |
| 500 | 共通 | Internal Server Error(バックエンドエラー) |

