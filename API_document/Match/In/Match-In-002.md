## API機能No

<br />
<table>
    <tr>
        <td>API機能No</td>
        <td>Match-In-002</td>
    </tr>
    <tr>
        <td>API名</td>
        <td>GetAttackInfo</td>
    </tr>
    <tr>
        <td>更新日/更新者</td>
        <td>2023-01-11/かわちゃん</td>
    </tr>
    <tr>
        <td>概要</td>
        <td>websocketを用いたAPI。SendAttackInfoが発火した際に、ルーム内に送信される。アクセスURLは設定出来ないのでnone</td>
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
| - card_id_list | list | | 〇 | 相手が出したカードのidのリスト。[int] |
| - value | int | | 〇 | 攻撃力 |



<br/>

## メッセージ
### 処理結果ステータス
| ステータス | 共個 | メッセージ内容 | 
| -- | -- | -- |
| 200 | 共通 | 成功 |
| 400 | 共通 | Bad Request(アクセスURLミス等) |
| 403 | 共通 | Forbidden(コードエラー等) |
| 500 | 共通 | Internal Server Error(バックエンドエラー) |

