const polyfill = []
const path = require('path');
const umd = {
  entry: polyfill.concat(['./src/index.js']),
  output: {
    path: `${__dirname}/dist`,
    // path: path.join(__dirname, '../../test/assets'),
    // filename: 'xgflv.dev.js',
    filename: 'index.dev.js',
    // library: 'FlvPlayer',
    library: 'xgplayer-flv',
    // libraryTarget: 'window'
    libraryTarget: 'umd'
  },
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: true
          }
        },
        'postcss-loader',
        'sass-loader'
      ]
    }]
  },
  externals: {
    xgplayer: 'xgplayer'
  }
}

const client = {
  entry: polyfill.concat(['./src/index.js']),
  output: {
    path: path.join(__dirname, '../../test/assets'),
    filename: 'xgflv.dev.js',
    library: 'FlvPlayer',
    libraryTarget: 'window'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: true
          }
        },
        'postcss-loader',
        'sass-loader'
      ]
    }]
  },
  externals: {
    xgplayer: 'Player'
  },
  mode: 'development'
}

module.exports = [umd, client]
