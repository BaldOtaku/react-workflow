process.env.NODE_ENV = 'production';

const { merge } = require('webpack-merge');
const config = require('../config/webpack.config.js');

module.exports = merge(config, {
  mode: 'production'
})
