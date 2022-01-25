// @ts-check

/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: ['@zhengxs/eslint-config-library'],
  overrides: [
    {
      files: ['./scripts/**/*.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off'
      }
    }
  ]
}

module.exports = config
