## API機能No

<br />
<table>
    <tr>
        <td>API機能No</td>
        <td>Match-In-001</td>
    </tr>
    <tr>
        <td>API名</td>
        <td>SendAttackInfo</td>
    </tr>
    <tr>
        <td>更新日/更新者</td>
        <td>2023-01-11/かわちゃん</td>
    </tr>
    <tr>
        <td>概要</td>
        <td>攻撃した際、何を出したか、という情報を受け取るAPI。これを叩くだけで、攻撃・ターン進行・ドローなどの処理が行える。</td>
    </tr>
</table>

| 入力 | |
| -- | -- |
| アクセスURL | api/match/in/send_attack_info |

<br/>

## フロント
### POSTデータ

| JSON_Key | 型 | サイズ | 必須 | 暗号化 | 検索条件 | 値の説明 |
| -- | -- | -- | -- | -- | -- | -- |
| card_id_list | list | | 〇 | | 完全一致 | 出したカードのidのリスト。[int] |
| value | int | | 〇 | | | 攻撃力。火力。 |

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

