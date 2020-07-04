const webpack = require('webpack');
const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './client/app/index.js',
  mode: 'production',
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
              '@babel/plugin-proposal-optional-chaining'
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
      actions: path.resolve(__dirname, './client/app/actions'),
      components: path.resolve(__dirname, './client/app/components'),
      SSComponents: path.resolve(__dirname, './client/app/components/common/SSComponents'),
      utils: path.resolve(__dirname, './client/app/utils'),
      icons: path.resolve(__dirname, './client/app/components/common/SVGIcons'),
      constants: path.resolve(__dirname, './server/constants'),
      'react-redux-toastr': path.resolve(__dirname, './node_modules/react-redux-toastr')
    }
  },
  output: {
    path: path.join(__dirname, 'client/dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  plugins: [
    // new BundleAnalyzerPlugin()
  ]
};
