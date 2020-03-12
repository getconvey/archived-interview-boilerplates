const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const { paths } = require('../config');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const DEV = process.env.NODE_ENV === 'development';
const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  bail: PROD,
  entry: {
    core: [
      DEV && require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.src,
    ].filter(Boolean),
  },
  mode: PROD ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: [paths.src],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ttf|eot|otf|svg|woff|woff2|mp3|png|jpg|jpeg|gif|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: 'assets/[name].[ext]?[hash:7]',
            publicPath: '/',
          },
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    minimize: PROD,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        cache: true,
        sourceMap: PROD,
      }),
    ],
  },
  output: {
    path: PROD ? paths.build : undefined,
    publicPath: '/',
    filename: PROD ? 'assets/[name].[contenthash].js' : 'assets/[name].js',
    chunkFilename: PROD
      ? 'assets/[name].[contenthash].chunk.js'
      : 'assets/[name].[id].js',
    sourceMapFilename: '[file].map',
  },
  performance: false,
  plugins: [
    new webpack.NamedChunksPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(DEV),
    }),
    new HtmlWebpackPlugin({
      chunks: ['runtime', 'core'],
      chunksSortMode: 'none',
      favicon: paths.favicon,
      template: paths.html,
      filename: 'index.html',
    }),
    DEV && new webpack.HotModuleReplacementPlugin(),
    PROD && new InlineManifestWebpackPlugin(),
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
