const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolve = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appSrc: resolve('src'),
  appDist: resolve('dist'),
  appPublic: resolve('public'),
  appHtml: resolve('public/index.html'),
  appMainJs: resolve('src/main.js')
}
