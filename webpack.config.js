const path = require('path')

// Config object
const library = {
  name: 'VueDragScroll',
  target: 'umd',
  entry: 'src/main.js'
}

const DEV = process.env.NODE_ENV === 'development'
const WATCH = process.env.NODE_ENV === 'watch'
const PROD = process.env.NODE_ENV === 'production'

const webpackConfig = {
  mode: PROD ? 'production' : 'development',
  entry: path.resolve(__dirname, library.entry),
  watch: WATCH,
  output: {
    library: library.name,
    libraryTarget: library.target,
    path: path.resolve(__dirname, 'dist'),
    filename: (PROD) ? 'vue-dragscroll.min.js' : 'vue-dragscroll.js',
    publicPath: '/dist/'
  },
  externals: {
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: '_'
    }
  },
  devtool: DEV || WATCH ? 'cheap-module-eval-source-map' : 'source-map',
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
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        }
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [],
  optimization: {
    minimize: false
  }
}

if (PROD) {
  webpackConfig.optimization.minimize = true
}

module.exports = webpackConfig
