## Match-Before-003

<br />
<table>
    <tr>
        <td>API機能No</td>
        <td>Match-Before-003</td>
    </tr>
    <tr>
        <td>API名</td>
        <td>DeleteRoom</td>
    </tr>
    <tr>
        <td>更新日/更新者</td>
        <td>2023-01-11/かわちゃん</td>
    </tr>
    <tr>
        <td>概要</td>
        <td>ルームを作成したが、ぺージをリロードあるいは削除をするなどして退出した際に消す為のAPI</td>
    </tr>
</table>

| 入力 | |
| -- | -- |
| アクセスURL | api/match/before/delete_room |

<br/>

## フロント
### POSTデータ

| JSON_Key | 型 | サイズ | 必須 | 暗号化 | 検索条件 | 値の説明 |
| -- | -- | -- | -- | -- | -- | -- |
| game_id | str | | 〇 | | 完全一致 | ルーム作成をした際にgame_idを貰ってるので、それを取得して保存しておこうぜ |
| user_id | int | | | | 完全一致 | リロードした際にgame_idが消えるかもしれないから、一応ルーム情報を紐づけてあるuser_idを送信しておきたい |


<br/>

## バック
### 返却データ(JSON形式)
| JSON_Key | 型 | サイズ | 必須 | 値の説明 |
| -- | -- | -- | -- | -- |
| status | int | | 〇 | 処理結果ステータス |
| messages | list | | | エラーメッセージ群 |
| result | list | | | フロントに渡す値の配列 |
| - is_success | int | | 〇 | 正常にルームを削除出来たか否かのフラグ |


<br/>

## メッセージ
### 処理結果ステータス
| ステータス | 共個 | メッセージ内容 | 
| -- | -- | -- |
| 200 | 共通 | 成功 |
| 400 | 共通 | Bad Request(アクセスURLミス等) |
| 403 | 共通 | Forbidden(コードエラー等) |
| 500 | 共通 | Internal Server Error(バックエンドエラー) |

