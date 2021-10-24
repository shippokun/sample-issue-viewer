# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## MEMO

- barrel がうまく効いてない
- たぶん全体的に computed が意図した動きになっていない
  - production だと computed で取得すると Proxy な Object ではなく、Dm(?)ていう Obj が飛んでくる
  - dev でも pagination の動的変更ができていない
    - 初回アクセス時に totalCount が加算されずに 0 になっている(pagination を触ると更新されるので、監視ができていない？)
- pagination は共通化をするべきコンポーネント
  - 同時に使い回しができるように要リファクタ対象
- 他のリポジトリの issue なども見れるようにするに store の持ち方を考えるか、ビルド先に合わせて repo や org を変えるなどをやってみても面白そう
  - store で合わせる場合は、root が org や repo を持つ?
- build サイズが大きくなっているので（これだけで）パフォーマンス的にはよくない（ビルド時の警告参照）
- vite はあくまでローカルに特化させるくらいが現時点ではいい？（感想）
- この構成で進めるならある程度作成するファイル（および中身）は決まっているので hygen などで自動化させるのがよい
