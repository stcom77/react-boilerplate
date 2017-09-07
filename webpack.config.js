const webpack = require('webpack');
const path = require('path');
const outPath = path.resolve(__dirname, './dist');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const env = process.env.NODE_ENV;
const isDevelop = env === 'development';
const isVerbose = false;

const extractCSS = new ExtractTextPlugin({
  filename: 'assets/css/[name].css',
  disable: isDevelop
});


const config = {
  entry: {
    app: ['react-hot-loader/patch', path.resolve(__dirname, './src/index.js')],
    vendor: [
      'react',
      'react-dom'
    ],
  },
  output: {
    path: outPath,
    filename: '[name].js'
  },
  devtool: isDevelop ? 'source-map' : 'nosources-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
        include: path.resolve(__dirname, './src/assets/stylus'),
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDevelop,
                localIdentName: isDevelop
                  ? '[name]-[local]-[hash:base64:5]'
                  : '[hash:base64:5]',
                minimize: !isDevelop,
                discardComments: { removeAll: true },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: isDevelop,
                config: {
                  path: './tools/postcss.config.js',
                },
              },
            },
            {
              loader: 'stylus-loader',
              options: {
                sourceMap: isDevelop,
              }
            },
          ],
        }),
      },
      {
        test: /\.(bmp|gif|jpe?g|png|svg)$/,
        include: path.resolve(__dirname, './src/assets/images/'),
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/images/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    extractCSS,
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.ejs'),
      filename: 'index.html',
      path: outPath,
      // inject: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDevelop ? '"development"' : '"production"',
      'process.env.BROWSER': true,
      __DEV__: isDevelop
    }),
    ...(isDevelop
      ? [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
      ]
      : [
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          minChunks(module) {
            return module.context && module.context.indexOf('node_modules') !== -1;
          }
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: isDevelop,
          compress: {
            screw_ie8: true, // React doesn't support IE8
            warnings: false,
            unused: true,
            dead_code: true
          },
          mangle: {
            screw_ie8: true
          },
          output: {
            comments: false,
            screw_ie8: true
          }
        }),
        new CompressionPlugin({
          asset: '[path].gz[query]',
          algorithm: 'deflate',
          minRatio: 0.8
        })
      ])
  ],
  resolve: {
    modules: ['node_modules', 'src'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      assets: path.resolve(__dirname, './src/assets'),
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 3000,
    historyApiFallback: true,
    inline: true,
    hot: true,
    host: '0.0.0.0'
  },
  stats: {
    cached: isVerbose,
    cachedAssets: isVerbose,
    chunks: isVerbose,
    chunkModules: isVerbose,
    colors: true,
    hash: isVerbose,
    modules: isVerbose,
    reasons: isDevelop,
    timings: true,
    version: isVerbose,
  },
};

module.exports = config;
