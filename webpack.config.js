var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'bundle': './src/js/main',
        'style': './src/styles/main.scss'
    },
    output: {
        path: './built',
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /(\.js$)|(\.jsx$)/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style","css!sass")
            }
       ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css', { allChunks: true })
    ]
};
