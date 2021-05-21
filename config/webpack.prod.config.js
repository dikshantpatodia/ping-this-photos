const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const config = (_env) => ({
  mode: 'production',
  bail: true,
  cache: true,
  profile: true,
  node: {
    fs: 'empty',
  },
  entry: {
    client: './src/web/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].[contenthash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', // Creates 'style' nodes from JS strings
          'css-loader', // Translates CSS into CommonJS
          'sass-loader', // Compiles SASS to CSS
          {
            loader: 'postcss-loader', // for autoprefixer
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js',
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      { test: /\.(png|svg|jp(e*)g|webp|gif)$/, use: 'file-loader' },
    ],
  },
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx'],
    alias: {
      css: path.resolve(__dirname, 'assets', 'css'),
      src: path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('./public/index.html'),
      favicon: path.resolve('./public/favicon.ico'),
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
        ],
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[id].css',
    }),
    new ManifestPlugin({
      writeToFileEmit: true,
      seed: {},
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.AutomaticPrefetchPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: 4,
      }),
    ],
  },
});

module.exports = config;
