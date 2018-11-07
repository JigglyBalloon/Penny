var path = require("path");
var webpack = require("webpack");
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,
    entry: "./frontend/app",
    output: {
        path: path.resolve(__dirname, 'static', 'bundles'),
        publicPath: '/static/',
        filename: "bundle.js"
    },
    plugins: [
        new BundleTracker({
            filename: './webpack-stats.json'
        }),
    ],
    module: {
        rules: [{
            test: [/\.jsx?$/, /\.js?$/],
            exclude: /(node_modules)/,
            use: [{
                loader: "babel-loader",
                query: {
                    presets: ["env", "react"]
                }
            }]
        }]
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};
