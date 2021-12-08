const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

module.exports = {
    mode: 'production',
    target: 'web',
    module: {
        rules: [
            {
                test: /jsx?$/i,
                exclude: /node_modules/i,
                loader: 'babel-loader'
            },
            {
                test: /(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    }), new MiniCssExtractPlugin()],
    performance: {
        maxAssetSize: 300000,
        maxEntrypointSize: 400000
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        hot: true
    }
}