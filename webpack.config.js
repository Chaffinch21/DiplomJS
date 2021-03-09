const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
console.log('isDev: ', isDev);

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  };
  if (!isDev) {
    config.minimizer = [
      new TerserWebpackPlugin(),
      new CssMinimizerWebpackPlugin()
    ]
  }  
  return config;
};

const fileName = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`; 

module.exports = {
  context: path.resolve(__dirname,'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill','./index.js']
  },
  output: {
    filename: fileName('bundle.js'),
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js']
  },
  optimization: optimization(),
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    hot: true
  },
  devtool: isDev ? 'inline-source-map' : 'hidden-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Save Moment',
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin(
      {
        patterns: [
          {
            from: path.resolve(__dirname, 'src/favicon.ico'),
            to: path.resolve(__dirname, 'dist/favicon.ico')
          }
        ]
      }      
    ),
    new MiniCssExtractPlugin({
      filename: fileName('bundle.css'),
    })
  ],
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: {
          loader: "svg-url-loader",
          options: {
            encoding: "base64",
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(__dirname, 'dist')
            }
          }, 
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      }
    ]
  }
}