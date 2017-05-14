const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    browser: './src/index.js',
    cs: './src/ua-override.js',
    background: './src/background.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-0']
          }
        }
      }
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      chunks: ['browser']
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src', 'manifest.json'),
        to: path.resolve(__dirname, 'dist')
      },
      {
        from: path.resolve(__dirname, 'src', 'assets/'),
        to: path.resolve(__dirname, 'dist', 'assets')
      },
      {
        from: path.resolve(__dirname, 'src', '_locales/'),
        to: path.resolve(__dirname, 'dist', '_locales')
      },
      {
        from: path.resolve(__dirname, 'src', 'main.css'),
        to: path.resolve(__dirname, 'dist')
      }
    ])
  ]
}
