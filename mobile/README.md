# CODE_DUEL

## react-native-webview ビルド手順
### androidの場合
1. android studioでCODE_DUEL_Finalを開く
2. Device ManagerでAPI Levelが31のデバイスを選択
   - 他のでもいいかもだけど、一応公式に書いてあった31を使用。
   - ない場合は[こちらのサイト](https://developer.android.com/studio/run/managing-avds)を参考に、Create DeviceからAPI 31のデバイスを作成してください

3. `mobile`ディレクトリで以下コマンドを実行
```
npm start
```
4. 別でターミナルを開き、`mobile`ディレクトリで以下コマンドを実行
```
npx react-native run-android
```
### iOSの場合(macの人だけ)
1. `mobile`ディレクトリで以下コマンドを実行
```
npm start
```
2. 別でターミナルを開き、`mobile`ディレクトリで以下コマンドを実行
```
npx react-native run-ios
```
