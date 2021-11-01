const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const keysTransformer = require('ts-transformer-keys/transformer').default;
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            assets: path.resolve(__dirname, 'assets'),
            src: path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            //favicon: "./assets/favicon.ico"
        }),
        new HtmlInlineScriptPlugin()
    ],
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
                getCustomTransformers: program => ({
                    before: [
                        keysTransformer(program)
                    ]
                })
            }
        }, {
            test: /\.css$/i,
            use: [
                "style-loader",
                "css-loader",
                "postcss-loader"
            ],
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            use: { loader: 'html-loader' }
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
            use: {
                loader: 'file-loader',
                options: {
                    name: "[path][name].[ext]"
                }
            }
        }]
    }
}