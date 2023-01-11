## Match-Before-005

<br />
<table>
    <tr>
        <td>API機能No</td>
        <td>Match-Before-005</td>
    </tr>
    <tr>
        <td>API名</td>
        <td>StartBattle</td>
    </tr>
    <tr>
        <td>更新日/更新者</td>
        <td>2023-01-11/かわちゃん</td>
    </tr>
    <tr>
        <td>概要</td>
        <td>Websocketを用いたAPI。書くべきか迷ったけど一応記述。CustomMatchの際に定員に達したら試合を開始するが、そのフラグを司っている。RandomMatchの際に定員に達したら、リストから削除して試合を開始する。アクセスURLは不明なのでnoneを返してる。</td>
    </tr>
</table>

## 補足
このAPIは、POST, GETが無いです。<br/>
単純に定員に達したら、フラグを投げて試合開始をしてくれるものになります。
<br/>



<br/>

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
| status | int | |  | 処理結果ステータス |
| messages | list | | | エラーメッセージ群 |
| result | list | | | フロントに渡す値の配列 |


<br/>

## メッセージ
### 処理結果ステータス
    NONE

