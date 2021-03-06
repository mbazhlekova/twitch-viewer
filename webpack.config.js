/* ./webpack.config.js */

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/client/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.resolve('path'),
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.js.map'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=25000'
            }

        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}