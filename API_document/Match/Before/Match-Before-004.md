## Match-Before-004

<br />
<table>
    <tr>
        <td>API機能No</td>
        <td>Match-Before-004</td>
    </tr>
    <tr>
        <td>API名</td>
        <td>LeaveUser</td>
    </tr>
    <tr>
        <td>更新日/更新者</td>
        <td>2023-01-11/かわちゃん</td>
    </tr>
    <tr>
        <td>概要</td>
        <td>オートマッチングで待機していたプレイヤーが、待機画面から抜けた場合の為のAPI。待機中リストの中から、該当するuser_idを削除します</td>
    </tr>
</table>

| 入力 | |
| -- | -- |
| アクセスURL | api/match/before/leave_user |

<br/>

## フロント
### POSTデータ

| JSON_Key | 型 | サイズ | 必須 | 暗号化 | 検索条件 | 値の説明 |
| -- | -- | -- | -- | -- | -- | -- |
| user_id | int | | 〇 | | 完全一致 | ユーザーのidです。ローカルストレージに保存してあるので、そこから取得して投げます |


<br/>

## バック
### 返却データ(JSON形式)
| JSON_Key | 型 | サイズ | 必須 | 値の説明 |
| -- | -- | -- | -- | -- |
| status | int | | 〇 | 処理結果ステータス |
| messages | list | | | エラーメッセージ群 |
| result | list | | | フロントに渡す値の配列 |
| - is_success | int | | 〇 | 正常に削除できたか否かのフラグ |  


<br/>

## メッセージ
### 処理結果ステータス
| ステータス | 共個 | メッセージ内容 | 
| -- | -- | -- |
| 200 | 共通 | 成功 |
| 400 | 共通 | Bad Request(アクセスURLミス等) |
| 403 | 共通 | Forbidden(コードエラー等) |
| 500 | 共通 | Internal Server Error(バックエンドエラー) |

