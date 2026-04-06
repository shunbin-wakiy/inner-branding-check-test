# Inner Branding Check Test（インナーブランディングチェック診断）

Next.js で実装した10問A/Bのセルフチェック診断です。回答のうち「B」の数に応じて結果が表示されます。

## 開発

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

## ビルド

```bash
npm run build
npm start
```

## GitHub

本プロジェクト用のリポジトリ名の例: **`inner-branding-check-test`**（`package.json` の `name` と揃えています）。

リポジトリ名が `--------------` などになってしまった場合は、GitHub 上で次のとおり変更してください。

1. 対象リポジトリを開く → **Settings**（設定）→ **General**
2. **Repository name** を `inner-branding-check-test` など希望の名前に変更して **Rename** を保存

リネーム後、ローカルの `origin` を合わせます（未設定なら `add`、既にあるなら `set-url`）。

```bash
git remote add origin https://github.com/shunbin-wakiy/inner-branding-check-test.git
# すでに origin がある場合:
# git remote set-url origin https://github.com/shunbin-wakiy/inner-branding-check-test.git
git push -u origin main
```

## ベース

元プロジェクトは [Branding-Step-up-Test](https://github.com/shunbin-wakiy/Branding-Step-up-Test) をベースにしています（本リポジトリの履歴とは独立しています）。
