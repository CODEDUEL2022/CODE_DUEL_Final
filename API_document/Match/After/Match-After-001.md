## Match-After-001

<br />
<table>
    <tr>
        <td>API機能No</td>
        <td>Match-After-001</td>
    </tr>
    <tr>
        <td>API名</td>
        <td>SendResult</td>
    </tr>
    <tr>
        <td>更新日/更新者</td>
        <td>2023-01-19/かわちゃん</td>
    </tr>
    <tr>
        <td>概要</td>
        <td>試合後の勝敗をバックエンドに送信します。</td>
    </tr>
</table>

| 入力 | |
| -- | -- |
| アクセスURL | api/match/after/send_result |

<br/>

## フロント
### POSTデータ

| JSON_Key | 型 | サイズ | 必須 | 暗号化 | 検索条件 | 値の説明 |
| -- | -- | -- | -- | -- | -- | -- |
| user_id | str | | 〇 | | 完全一致 | ユーザーのid。これをもとにレート変更を加える |
| result | int | | 〇 | | | 試合結果。敗北で0、勝利で1、を返す |


<br/>

## バック
### 返却データ(JSON形式)
| JSON_Key | 型 | サイズ | 必須 | 値の説明 |
| -- | -- | -- | -- | -- |
| status | int | | 〇 | 処理結果ステータス |
| messages | list | | | エラーメッセージ群 |
| result | list | | | フロントに渡す値の配列 |
| - is_success | int | | 〇 | 処理が完了したかどうか。これが帰ってきたらホームに戻るor戻ることができるようにしたい |


<br/>

## メッセージ
### 処理結果ステータス
| ステータス | 共個 | メッセージ内容 | 
| -- | -- | -- |
| 200 | 共通 | 成功 |
| 400 | 共通 | Bad Request(アクセスURLミス等) |
| 403 | 共通 | Forbidden(コードエラー等) |
| 500 | 共通 | Internal Server Error(バックエンドエラー) |

