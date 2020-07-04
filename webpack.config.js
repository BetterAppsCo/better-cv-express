const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './client/app/index.js',
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-syntax-jsx'
            ],
            presets: [
              '@babel/preset-react'
            ]
          }
        }
      },
      { test: /\.css$/, 
        use: ['style-loader', 'css-loader', 'postcss-loader'] 
      },
      { test: /\.scss$/, 
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] 
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      reducers: path.resolve(__dirname, './client/app/reducers'),
      components: path.resolve(__dirname, './client/app/components'),
      actions: path.resolve(__dirname, './client/app/actions'),
      // SSComponents: path.resolve(__dirname, './client/app/components/common/SSComponents'),
      // utils: path.resolve(__dirname, './client/app/utils'),
      // icons: path.resolve(__dirname, './client/app/components/common/SVGIcons'),
      // constants: path.resolve(__dirname, './server/constants'),
      'react-redux-toastr': path.resolve(__dirname, './node_modules/react-redux-toastr')
    }
  },
  output: {
    path: path.join(__dirname, 'client/dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'client/dist/'),
    disableHostCheck: true,
    port: 5000,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};