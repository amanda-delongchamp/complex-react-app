//const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const webpack = require('webpack');
const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: "./app/Main.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "app"),
    filename: "bundled.js"
  },
  plugins: [
    new Dotenv()
  ],
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "app")
    },
    hot: true,
    liveReload: false,
    
    historyApiFallback: { index: "index.html" },

    
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "12" } }]]
          }
        }
      }
    ]
  },
  resolve: {
    fallback: { 
      'path': require.resolve('path-browserify'),
    'fs': false },
    extensions: ['.jsx', '.js', '.tsx', '.ts']
 }
};
