process.env.NODE_ENV = 'development';

const { merge } = require('webpack-merge');
const config = require('../config/webpack.config.js');

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    port: 8080
  }
})
