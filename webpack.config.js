const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HotModuleReplacementPlugin = require("webpack-hot-middleware");
const nodeExternals = require('webpack-node-externals');

// entry: [
//     "./server/server.js",
//     // 'webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false&reload=true'
// ],
let nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });
let serverConfig = {
    target: 'node',
    entry: [
        "./server/server.js"
        ],
    output: {
        path: path.resolve(__dirname, './server/dist'),
        filename: 'server.js'
    },
    plugins: [
        new ExtractTextPlugin("./public/css/app.css"),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }]

    },
    externals: [nodeExternals()],
    // resolve: {
    //     extensions: ['.ts', '.js'],
    //     modules: ['node_modules']
    // }
};
let clientConfig = {

    entry: "./client/app.js",
    output: {
        path: path.resolve(__dirname, './public/js'),
        filename: "public.js"
      },
    resolve: {
        alias: {
            $: "jquery/src/jquery",
            "jquery-ui": "jquery-ui-dist/jquery-ui"

        }
    },
    module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }
        ]
      },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new ExtractTextPlugin("app.css")
    ],
    node: {
        fs: 'empty',
    },
}

module.exports = [ serverConfig, clientConfig ];
