## HOGE-000

<br />
<table>
    <tr>
        <td>API機能No</td>
        <td>HOGE-000</td>
    </tr>
    <tr>
        <td>API名</td>
        <td>HOGE</td>
    </tr>
    <tr>
        <td>更新日/更新者</td>
        <td>2022-12-30/かわちゃん</td>
    </tr>
    <tr>
        <td>概要</td>
        <td>API仕様書の見本です。</td>
    </tr>
</table>

| 入力 | |
| -- | -- |
| アクセスURL | api/hoge/hoge |

<br/>

## フロント
### POSTデータ

| JSON_Key | 型 | サイズ | 必須 | 暗号化 | 検索条件 | 値の説明 |
| -- | -- | -- | -- | -- | -- | -- |
| hoge_name | str | 10 | 〇 | | 完全一致 | プレイヤー名 |
| hoge_pw | str | 10 | 〇 | 〇 | 完全一致 | パスワード |

<br/>

## バック
### 返却データ(JSON形式)
| JSON_Key | 型 | サイズ | 必須 | 値の説明 |
| -- | -- | -- | -- | -- |
| status | int | | 〇 | 処理結果ステータス |
| messages | list | | | エラーメッセージ群 |
| result | list | | | フロントに渡す値の配列 |
| - hoge_id | int | 10 | 〇 | hogeのID |
| - hoge_type | int | 1 | 〇 | hogeの識別暗号 |
| - hoge_title | str | 100 | | hogeのタイトル |
| - hoge_body_text | str | 100 | | hogeの本文 |

<br/>

## メッセージ
### 処理結果ステータス
| ステータス | 共個 | メッセージ内容 | 
| -- | -- | -- |
| 200 | 共通 | ログアウトしています |
