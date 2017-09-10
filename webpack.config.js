const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const webpack = require('webpack')

// Config object
const library = {
  name: 'vue-dragscroll',
  target: 'umd',
  entry: 'src/vueDragScroll.js'
}

const DEV = process.env.NODE_ENV === 'development';

let webpackConfig = {
  entry: path.resolve(__dirname, config.main),
  watch: DEV,
  output: {
    library: library.name,
    libraryTarget: library.target,
    path: path.resolve(__dirname, "dist"),
    filename: (DEV) ? library.output + '.js' : library.output + '.min.js',
    publicPath: '/dist/'
  },
  devtool: DEV ? 'cheap-module-eval-source-map' : 'source-map',
  devServer: {
    overlay: true,
    contentBase: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['eslint-loader']
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      }
    ],
  },
  plugins: []
}

if(!DEV) {
  webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: { warnings: false }
  }))
}

module.exports = webpackConfig