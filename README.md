# @idiomatic-ts/eslint-config

A custom [ESLint](https://eslint.org/) configuration to follow the [idiomatic.js] coding style.

* Use this configuration to ensure your code adheres to the [idiomatic.js] style rules.
* Install ESLint in your project/editor to automatically check your code while you work.
* Also integrate it into the CI/CD pipeline to ensure consistent formatting during deployments.

## Installation
```bash
npm install -D -E @idiomatic-ts/eslint-config
```

## Usage
To start using ESLint with this configuration, simply import `idiomatic` from `@idiomatic-ts/eslint-config` and add it as the first element of the array in the `eslint.config.js` file:
```javascript
import idiomatic from '@idiomatic-ts/eslint-config'

export default [
  ...idiomatic,
  {
    rules: {
      // Override rules (optional)
      '@stylistic/padding-line-between-statements': [ 'off' ],
      // ...
    },
  },
]
```
Basic option
```javascript
import idiomatic from '@idiomatic-ts/eslint-config'

export default idiomatic
```


[idiomatic.js]: https://github.com/rwaldron/idiomatic.js/
