const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',

  output: {
    path: path.resolve(__dirname, '_site/assets'),
    publicPath: '/',
  },
  plugins: [
    // Let 11ty handle these
    // new CopyWebpackPlugin({
    // patterns: [
    // { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, '_site') },
    // ],
    // }),
  ],
});
