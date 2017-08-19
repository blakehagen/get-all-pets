module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'extends': [
    'airbnb'
  ],
  'rules': {
    'global-require': 'off',
  }
};