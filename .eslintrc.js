module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? ['warn', { allow: ['log'] }] : 'off',
    semi: ['error', 'always']
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    http: true
  }
};
