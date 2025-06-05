# カウンターアプリケーション

React + TypeScript で実装したシンプルなカウンターアプリケーションです。

## 機能

- カウント値の表示
- プラスボタンでカウントアップ
- マイナスボタンでカウントダウン

## 技術スタック

- React 18
- TypeScript
- Create React App

## プロジェクト構造

```
src/
├── components/
│   ├── Button.tsx    # 再利用可能なボタンコンポーネント
│   └── Counter.tsx   # カウンター機能を持つコンポーネント
├── App.tsx           # アプリケーションのルートコンポーネント
└── App.css          # スタイリング
```

## 実装の詳細

### Button.tsx

再利用可能なボタンコンポーネントです。

```typescript
interface ButtonProps {
  label: string; // ボタンに表示するテキスト
  onClick: () => void; // クリック時のコールバック関数
}
```

- TypeScript で props の型を定義
- 関数コンポーネントとして実装
- スタイリングはインラインスタイルで実装

### Counter.tsx

カウンター機能を実装したコンポーネントです。

- `useState`フックを使用して状態管理
- カウントアップ/ダウン機能の実装
- `Button`コンポーネントの再利用
- 中央寄せなどの基本的なスタイリング

## 起動方法

1. 依存パッケージのインストール

```bash
npm install
```

2. 開発サーバーの起動

```bash
npm start
```

3. ブラウザで以下の URL にアクセス

```
http://localhost:3000
```

## 学習ポイント

- 関数コンポーネントの基本的な実装方法
- TypeScript での props 型定義
- コンポーネントの再利用
- React の状態管理（useState）
- JSX の基本的な書き方

## 今後の改善案

- スタイリングの改善（CSS Modules or Styled Components の導入）
- テストコードの追加
- カウントの最大値/最小値の設定
- リセット機能の追加
- アニメーションの追加
