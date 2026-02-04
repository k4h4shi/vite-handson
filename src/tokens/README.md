## デザイントークン連携（Figma + Tokens Studio）

このフォルダは Tokens Studio の **Token Storage (Git)** 連携先として使います。
無料プランでは「リモートに新規フォルダ作成」ができないため、先に
`vite-handson/src/tokens` を作っておく必要があります。

### あなたにお願いしたい作業（Figma側）

1. Figma に Tokens Studio プラグインをインストール
2. Tokens Studio の **Settings → Token Storage** を GitLab に接続
3. **Token Storage Location** を `vite-handson/src/tokens` に設定
4. Token Format は **W3C DTCG** を選択（推奨）
5. まずは `global` など 1 セット作成して **Push** できることを確認

> Multi-file Sync (Pro) を使う場合は、Token Set ごとに
> JSON ファイルがこのフォルダに生成されます。

### コード側の反映ポイント

`src/index.css` から `src/tokens.css` を読み込みます。
Tokens Studio の JSON は `npm run tokens:build` で CSS 変数に変換されます。

#### 実行コマンド

```bash
npm run tokens:build
```

生成物:

- `src/tokens.css`

> 変換は `build-tokens.cjs` で管理しています。
> 将来的に `core/semantic` 分割やテーマ化もここで調整できます。

### 参考

- Tokens Studio: Multi-file sync の概要
  https://docs.tokens.studio/token-storage/remote-multi-file-sync
- Figma Variables
  https://help.figma.com/hc/ja/articles/14058141993947
