## API機能No

<br />
<table>
    <tr>
        <td>API機能No</td>
        <td>Match-In-003</td>
    </tr>
    <tr>
        <td>API名</td>
        <td>SendDisconnect</td>
    </tr>
    <tr>
        <td>更新日/更新者</td>
        <td>2023-01-19/かわちゃん</td>
    </tr>
    <tr>
        <td>概要</td>
        <td>切断した際にルームにいる人に送られるAPI。対戦相手を勝利にするか、CPU戦に移行するか、とかあったけど、現状実装できそうなのは「勝利にする」方。WebSocketを使うからアクセスURLは無い。何も送信しないし何も返さない。</td>
    </tr>
</table>

| 入力 | |
| -- | -- |
| アクセスURL | none |

<br/>

## フロント
### POSTデータ

| JSON_Key | 型 | サイズ | 必須 | 暗号化 | 検索条件 | 値の説明 |
| -- | -- | -- | -- | -- | -- | -- |


<br/>

## バック
### 返却データ(JSON形式)
| JSON_Key | 型 | サイズ | 必須 | 値の説明 |
| -- | -- | -- | -- | -- |
| status | int | | 〇 | 処理結果ステータス |
| messages | list | | | エラーメッセージ群 |
| result | list | | | フロントに渡す値の配列 |


<br/>

## メッセージ
### 処理結果ステータス
| ステータス | 共個 | メッセージ内容 | 
| -- | -- | -- |
| 200 | 共通 | 成功 |
| 400 | 共通 | Bad Request(アクセスURLミス等) |
| 403 | 共通 | Forbidden(コードエラー等) |
| 500 | 共通 | Internal Server Error(バックエンドエラー) |

