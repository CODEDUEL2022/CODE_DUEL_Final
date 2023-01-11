## User-003

<br />
<table>
    <tr>
        <td>API機能No</td>
        <td>User-003</td>
    </tr>
    <tr>
        <td>API名</td>
        <td>GetUserInfo</td>
    </tr>
    <tr>
        <td>更新日/更新者</td>
        <td>2023-01-11/かわちゃん</td>
    </tr>
    <tr>
        <td>概要</td>
        <td>リロード時などにユーザーの情報を取得するためのAPI</td>
    </tr>
</table>

| 入力 |  |
| -- | -- |
| アクセスURL | api/user/get_user_info |

<br/>

## フロント
### POSTデータ

| JSON_Key | 型 | サイズ | 必須 | 暗号化 | 検索条件 | 値の説明 |
| -- | -- | -- | -- | -- | -- | -- |
| user_id | int | | 〇 | 〇 | 完全一致 | プレイヤーのidをローカルストレージに保存するので、それを取得して投げる |


<br/>

## バック
### 返却データ(JSON形式)
| JSON_Key | 型 | サイズ | 必須 | 値の説明 |
| -- | -- | -- | -- | -- |
| status | int | | 〇 | 処理結果ステータス |
| messages | list | | | エラーメッセージ群 |
| result | list | | | フロントに渡す値の配列 |
| - user_name | str | | 〇 | ユーザーの名前 |
| - user_level | list | | 〇 | ユーザーのレベルを格納しているリスト [exp(int) , level(int)] |



<br/>

## メッセージ
### 処理結果ステータス
| ステータス | 共個 | メッセージ内容 | 
| -- | -- | -- |
| 200 | 共通 | 成功 |
| 400 | 共通 | Bad Request(アクセスURLミス等) |
| 403 | 共通 | Forbidden(コードエラー等) |
| 500 | 共通 | Internal Server Error(バックエンドエラー) |

