# Flashcards

A website for me to create and review flashcards. Also using Vue for the first time.

## Backlog

- Figure out how to hook up intellisense for CSS variables defined in base.css
- Understand how TypeScript is applied to Vue components
- Set font-size on components
- Firebase stuff
  - (Make detailed documentation for all of this for future projects!)
  - Deploy to Firebase Action in repository
  - Create, Read, Update, Delete Tags
  - Create, Read, Update, Delete Flashcards
  - Ensure fetching of data works if that data does not yet exist.
  - Do a review session for a tag
  - Look up data in firebase config and whether it should not be public on my github repo
  - (Future) Set up a domain (maybe use sub domain instead of purchasing one)
  - Error handling

## Installation and Usage

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
