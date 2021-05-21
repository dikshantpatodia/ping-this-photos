const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');

const config = (_env) => ({
  mode: 'development',
  entry: {
    client: './src/web/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  cache: true,
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
      {
        test: /\.(png|svg|jp(e*)g|webp|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/',
    public: 'localhost:3000',
    port: 3000,
    host: '0.0.0.0',
    hot: true,
    inline: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    disableHostCheck: true,
    contentBase: './build',
    historyApiFallback: true,
    compress: true,
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
    new webpack.HotModuleReplacementPlugin(),
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
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new ManifestPlugin({
      writeToFileEmit: true,
      seed: {},
    }),
    new BundleStatsWebpackPlugin(),
    new BundleAnalyzerPlugin({ analyzerMode: 'static', reportFilename: '_report.html', openAnalyzer: false }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});

module.exports = config;
