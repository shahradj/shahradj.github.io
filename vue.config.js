const fs = require('fs');
const packageJson = fs.readFileSync('./package.json');
const version = JSON.parse(packageJson).version || 0;
const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          PACKAGE_VERSION: '"' + version + '"'
        }
      })
    ]
  },
  devServer: {
    proxy: 'http://localhost:8080'
  },
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: '/'
};
