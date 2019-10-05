const webpack = require('webpack')
const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const config = require('./webpack.config.dev.js')

module.exports = merge(config, {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      cache: true,
      test: /\.js(\?.*)?$/i,
    }),],
  }
})