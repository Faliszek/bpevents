const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./js/index.js",
    output: {
        path: __dirname+'/js/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader:  ExtractTextPlugin.extract(
                    "style",
                    "css!sass")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("../css/main.css"),
    ]
};