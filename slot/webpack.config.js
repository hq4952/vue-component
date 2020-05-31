var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const  VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/main.js'
  },
  module:{
      rules:[
        {
            test: /\.less$/,
            use: ['vue-style-loader', 'css-loader',"less-loader"],
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader',"less-loader"],
        },
        {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  outputPath:"images",
                  name:'[hash:8].[ext]'
                }
              }
            ]
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './src/public/index.html',
      }),
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      new CopyPlugin([
        {
          from:path.resolve(__dirname,"src/public"),
          to:path.resolve(__dirname,"dist"),
          ignore:["index.html"]
        }
      ])
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 8080,
      open:true,
      hot:true,
      quiet:true
    },
    devtool:"cheap-module-eval-source-map"
};