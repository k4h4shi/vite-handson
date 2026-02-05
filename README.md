# Figma Design Token + Todo App (Vite)

Vitest + React + TypeScript で、Figma Design Token を試してみたリポジトリです。

## できること

- Figma Variables → Tokens Studio → JSON 連携
- JSON → CSS 変数生成（Style Dictionary）
- shadcn/ui で Todo UI を実装（SPA）
- タブ選択を URL で保持

## セットアップ

```bash
npm install
```

## 開発

```bash
npm run dev
```

## デザイントークンの反映

1. Tokens Studio で `tokens.json` に JSON を Push（free plan向けのsingle-file運用）。
2. CSS 変数に変換

```bash
npm run tokens:build
```

生成物:

- `src/tokens.css`

## 主要スクリプト

- `npm run dev`: 開発サーバ
- `npm run build`: 本番ビルド
- `npm run tokens:build`: トークンを CSS 変数へ変換
