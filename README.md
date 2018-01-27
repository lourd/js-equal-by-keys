# @lourd/equal-by-keys [![npm package badge][npm-badge]][npm] [![Build status][travis-badge]][travis]

[npm-badge]: https://img.shields.io/npm/v/@lourd/equal-by-keys.svg?style=flat-square
[npm]: https://www.npmjs.com/package/@lourd/equal-by-keys
[travis-badge]: https://travis-ci.org/lourd/js-equal-by-keys.svg
[travis]: https://travis-ci.org/lourd/js-equal-by-keys

This single-function JavaScript module is a utility for comparing two objects for a given set of keys. I find it handy when looking for changing props in React component lifecycle methods like [`componentDidUpdate`](https://reactjs.org/docs/react-component.html#componentdidupdate).

## Installation

### npm

```sh
yarn install @lourd/equal-by-keys
```

### In the browser

Available as a simple `<script>` through unpkg.com at https://unpkg.com/@lourd/equal-by-keys. The function will be available as the global variable `equalByKeys`.

## API

### `equalByKeys(objA: Object, objB: Object, ...keys: [String])`
