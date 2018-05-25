const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

//生产环境webpack使用UglifyJSPlugin来压缩生成的文件。
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader']
            })
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        }),
    ]
}

module.exports = merge(commonConfig, publicConfig);

// module.exports = {
//     devtool: 'cheap-module-source-map',
//     entry: {
//         app: [
//             path.join(__dirname, 'src/index.js')
//         ],
//         vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
//     },
//     output: {
//         path: path.join(__dirname, './dist'),
//         filename: '[name].[chunkhash].js',
//         chunkFilename: '[name].[chunkhash].js',
//         publicPath: '/'
//     },
//     /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
//      /*cacheDirectory是用来缓存编译结果，下次编译加速*/
//     module: {
//         rules: [{
//             test: /\.js$/,
//             use: ['babel-loader'],
//             include: path.join(__dirname, 'src')
//         },{
//             test: /\.css$/,
//             use: ExtractTextPlugin.extract({
//                 fallback: 'style-loader',
//                 use: 'css-loader'
//             })
//         },{
//             test: /\.(png|jpg|gif)$/,
//             use: [{
//                 loader: 'url-loader',
//                 options: {
//                     limit: 8192
//                 }
//             }]
//         }]
//     },
//     resolve: {
//         alias: {
//             pages: path.join(__dirname, 'src/pages'),
//             component: path.join(__dirname, 'src/component'),
//             router: path.join(__dirname, 'src/router'),
//             actions: path.join(__dirname, 'src/redux/actions'),
//             reducers: path.join(__dirname, 'src/redux/reducers')
//         }
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             filename: 'index.html',
//             template: path.join(__dirname, 'src/index.html')
//         }),
//         /*plugins*/
//         new webpack.optimize.CommonsChunkPlugin({
//             name: 'vendor'
//         }),
//         new webpack.optimize.CommonsChunkPlugin({
//             name: 'runtime'
//         }),
//         new UglifyJSPlugin(),
//         // new webpack.DefinePlugin({
//         //     'process.env': {
//         //         'NODE_ENV': JSON.stringify('production')
//         //     }
//         // }),
//         new webpack.HashedModuleIdsPlugin(),
//         new CleanWebpackPlugin(['dist']),
//         new ExtractTextPlugin({
//             filename: '[name].[contenthash:5].css',
//             allChunks: true
//         })
//     ]
// }
