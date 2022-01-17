module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: [
    'import',
  ],
  rules: {
    'no-unused-expressions': 'off',
    'prefer-destructuring': 'off',
    'no-restricted-syntax': 'off',
    'max-len': ['error', {
      'code': 140,
      'ignoreTrailingComments': true,
      'ignoreUrls': true,
    }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-fragments': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'linebreak-style': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
