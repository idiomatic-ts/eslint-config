import eslint from '@eslint/js'
import tsEslint from 'typescript-eslint'

import * as idiomatic from './idiomatic.js'

export default [
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  idiomatic.configs,
  idiomatic.ignores,
]
