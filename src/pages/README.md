# pages

- ルーティングに関係するコンポーネントを管理するディレクトリです。
- `src/pages/` 以下の階層では何らかの model(user など)ごとにディレクトリを切っていきます。
- model は複数の状態を持つことを想定しているので複数形でディレクトリを切ります。
- 各状態に関しては名称=コンポーネント名としたいため、[Vue のスタイルガイド](https://jp.vuejs.org/v2/style-guide/index.html#%E8%A4%87%E6%95%B0%E5%8D%98%E8%AA%9E%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E5%90%8D-%E5%BF%85%E9%A0%88)に合わせて複数単語とします。
- 例）user に関心をもつ詳細ページ: `src/pages/users/user-detail`

## コンポーネント設計について

基本方針は

- 一貫性
- 関心ごとの分離
- 依存は単方向
- 関心ごとは近くに配置する

としています。
そのためテストもテスト対象と同一ディレクトリで行うこととします。

- `Container / Presentational` パターンを基本とします。

```text
src/pages
├── README.md
└── users
    └── user-detail
        ├── user-detail.page.vue  // Page Component
        ├── index.ts  // barrel
        ├── containers
        |   └── user-detail
        |       ├── user-detail.container.vue  // Container Component
        |       ├── user-detail.hooks.ts  // hooks
        |       ├── user-detail.hooks.spec.ts
        |       └── index.ts
        └── components
            └── user-detail
                ├── user-detail.component.vue  // Presentational Component
                ├── user-detail.component.spec.ts
                ├── user-detail.presenter.ts  // Presenter
                ├── user-detail.presenter.spec.ts
                └── index.ts
```

- Page Component: URL パラメータ解決用コンポーネント
- Container Component: ストアアクセスや hooks の管理用のコンポーネント
- hooks(optional): Container の肥大化したときに作成を考慮する
- Presentational Component: 表示用コンポーネント
- Presenter(optional): 表示に必要なデータ加工や validator、form の管理などはここで行う
