module.exports = {
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],

  plugins: ['react'],

  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['src', './src'],
          ['assets', './src/assets'],
          ['components', './src/components'],
          ['pages', './src/pages'],
          ['routes', './src/routes'],
          ['store', './src/store'],
          ['styles', './src/styles'],
          ['utils', './src/utils'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },

  env: {
    browser: true,
    es2021: true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
