const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./js/main.js",
  output: {
    path: __dirname + '/assets/',
    filename: "bundle.js"
  },
  module: {
    loaders: [

      {
        test: /\.vue$/,
        loader: 'vue'
      },

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|wp-includes)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
            "style-loader",
            "css-loader!sass-loader!postcss")
      },

      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url'
      },
      {
        test: /\.png/,
        loader: 'file'
      }


    ]
  },

  vue: {
    loaders: {
      js: 'babel?presets[]=es2015'
    }
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      // jquery: 'jquery/src/jquery'
    }
  },

  plugins: [
    new ExtractTextPlugin("../assets/main.css"),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      jQuery: 'jquery'
    })
  ]
};