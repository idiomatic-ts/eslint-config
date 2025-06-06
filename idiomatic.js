import stylistic from '@stylistic/eslint-plugin'
import pluginImport from 'eslint-plugin-import'
import noOnlyTests from 'eslint-plugin-no-only-tests'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tsEslint from 'typescript-eslint'

export const configs = {
  files: [ '**/*.{js,jsx,cjs,mjs,ts,tsx}' ],
  plugins: {
    '@stylistic': stylistic,
    'import': pluginImport,
    'no-only-tests': noOnlyTests,
    'simple-import-sort': simpleImportSort,
    'unused-imports': unusedImports,
  },
  languageOptions: {
    ecmaVersion: 2022,
    globals: { ...globals.node },
    parser: tsEslint.parser,
    sourceType: 'module',
  },
  rules: {
    '@stylistic/array-bracket-spacing': [ 'error', 'always', { arraysInArrays: false, objectsInArrays: false }],
    '@stylistic/arrow-parens': [ 'error', 'as-needed' ],
    '@stylistic/arrow-spacing': [ 'error', { before: true, after: true }],
    '@stylistic/block-spacing': [ 'error', 'always' ],
    '@stylistic/brace-style': [ 'error', '1tbs', { allowSingleLine: true }],
    '@stylistic/comma-dangle': [ 'error', 'always-multiline' ],
    '@stylistic/comma-spacing': [ 'error', { before: false, after: true }],
    '@stylistic/comma-style': [ 'error', 'last' ],
    '@stylistic/computed-property-spacing': [ 'error', 'always' ],
    '@stylistic/dot-location': [ 'error', 'property' ],
    '@stylistic/eol-last': [ 'error', 'always' ],
    '@stylistic/indent': [ 'error', 2 ],
    '@stylistic/key-spacing': [ 'error', { beforeColon: false, afterColon: true }],
    '@stylistic/keyword-spacing': [ 'error' ],
    '@stylistic/linebreak-style': [ 'error' ],
    '@stylistic/lines-between-class-members': [ 'error', 'always', { exceptAfterSingleLine: true }],
    '@stylistic/member-delimiter-style': [ 'error', {
      multiline: { delimiter: 'none', requireLast: true },
      singleline: { delimiter: 'comma', requireLast: false },
      multilineDetection: 'brackets',
    }],
    '@stylistic/no-floating-decimal': [ 'error' ],
    '@stylistic/no-mixed-spaces-and-tabs': [ 'error' ],
    '@stylistic/no-multi-spaces': [ 'error' ],
    '@stylistic/no-multiple-empty-lines': [ 'error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    '@stylistic/no-trailing-spaces': [ 'error' ],
    '@stylistic/object-curly-spacing': [ 'error', 'always' ],
    '@stylistic/one-var-declaration-per-line': [ 'off' ],
    '@stylistic/padded-blocks': [ 'error', { blocks: 'never' }],
    '@stylistic/padding-line-between-statements': [ 'error',
      { blankLine: 'always', prev: '*', next: [ 'return' ] },
      { blankLine: 'any', prev: [ 'const', 'let', 'var', 'expression', 'if' ], next: [ 'return' ] },
      { blankLine: 'any', prev: [ 'export' ], next: [ 'export' ] },
      { blankLine: 'always', prev: [ 'multiline-const', 'multiline-let', 'multiline-var', 'multiline-expression' ], next: [ 'return' ] },
      { blankLine: 'always', prev: '*', next: [ 'enum', 'interface', 'type' ] },
    ],
    '@stylistic/quotes': [ 'error', 'single', { allowTemplateLiterals: true }],
    '@stylistic/semi': [ 'error', 'never' ],
    '@stylistic/semi-spacing': [ 'error', { before: false, after: true }],
    '@stylistic/space-before-blocks': [ 'error' ],
    '@stylistic/space-before-function-paren': [ 'error', 'never' ],
    '@stylistic/space-in-parens': [ 'error', 'always', { exceptions: [ '{}', '[]', '()', 'empty' ] }],
    '@stylistic/space-infix-ops': [ 'error' ],
    '@stylistic/space-unary-ops': [ 'error', { words: true, nonwords: false }],
    '@stylistic/template-curly-spacing': [ 'error' ],
    '@stylistic/type-annotation-spacing': [ 'error' ],
    '@stylistic/type-generic-spacing': [ 'error' ],
    '@stylistic/type-named-tuple-spacing': [ 'error' ],
    '@typescript-eslint/naming-convention': [ 'error',
      { selector: [ 'typeLike' ], format: [ 'PascalCase' ] },
      { selector: [ 'enumMember' ], format: [ 'UPPER_CASE' ] },
    ],
    '@typescript-eslint/no-empty-object-type': [ 'error', { allowInterfaces: 'with-single-extends' }],
    '@typescript-eslint/no-explicit-any': [ 'warn' ],
    '@typescript-eslint/no-unused-vars': [ 'error', {
      vars: 'all',
      args: 'after-used',
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    }],
    '@typescript-eslint/parameter-properties': [ 'off' ],
    'camelcase': [ 'error' ],
    'curly': [ 'error', 'multi-or-nest', 'consistent' ],
    'func-names': [ 'off' ],
    'import/first': [ 'error' ],
    'import/newline-after-import': [ 'error' ],
    'import/no-duplicates': [ 'error' ],
    'no-console': [ 'error' ],
    'no-eq-null': [ 'off' ],
    'no-func-assign': [ 'error' ],
    'no-inline-comments': [ 'off' ],
    'no-only-tests/no-only-tests': [ 'error' ],
    'no-spaced-func': [ 'error' ],
    'no-unused-vars': [ 'off' ],
    'one-var': [ 'off' ],
    'simple-import-sort/exports': [ 'error' ],
    'simple-import-sort/imports': [ 'error' ],
    'strict': [ 'error', 'global' ],
    'unused-imports/no-unused-imports': [ 'error' ],
    'unused-imports/no-unused-vars': [ 'error', {
      vars: 'all',
      args: 'after-used',
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    }],
    'vars-on-top': [ 'off' ],
    'warnIgnoredByDefault': [ 'off' ],
  },
}

export const ignores = {
  ignores: [
    'node_modules/**',
    'cdk.out/**',
    'coverage/**',
    '**/*.d.ts',
  ],
}
