# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

```
react-task-app
├─ .eslintrc.cjs
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ ActionButton
│  │  │  ├─ ActionButton.css.ts
│  │  │  ├─ ActionButton.tsx
│  │  │  └─ DropDownForm
│  │  │     ├─ DropDownForm.css.ts
│  │  │     └─ DropDownForm.tsx
│  │  ├─ BoardList
│  │  │  ├─ BaordList.tsx
│  │  │  ├─ BoardList.css.ts
│  │  │  └─ SideForm
│  │  │     ├─ SideForm.tsx
│  │  │     └─ SideFrom.css.ts
│  │  ├─ EditModal
│  │  │  ├─ EditModal.css.ts
│  │  │  └─ EditModal.tsx
│  │  ├─ List
│  │  │  ├─ List.css.ts
│  │  │  └─ List.tsx
│  │  ├─ ListsContainer
│  │  │  ├─ ListsContainer.css.ts
│  │  │  └─ ListsContainer.tsx
│  │  ├─ LoggerModal
│  │  │  ├─ LoggerModal.css.ts
│  │  │  ├─ LoggerModal.tsx
│  │  │  └─ LogItem
│  │  │     ├─ LogItem.css.ts
│  │  │     └─ LogItem.tsx
│  │  └─ Task
│  │     ├─ Task.css.ts
│  │     └─ Task.tsx
│  ├─ hooks
│  │  └─ redux.ts
│  ├─ index.css
│  ├─ main.tsx
│  ├─ store
│  │  ├─ index.ts
│  │  ├─ reducer
│  │  │  └─ reducer.ts
│  │  └─ slices
│  │     ├─ boardsSlice.ts
│  │     ├─ loaggerSlice.ts
│  │     └─ modalSlice.ts
│  ├─ types
│  │  └─ index.ts
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```