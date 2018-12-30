import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

let autoprefix = '{browsers:["Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", "Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"]}';//var cssLoaders = ['css-loader', 'autoprefixer-loader?' + autoprefix];
let cssLoaders = ['css-loader', 'autoprefixer-loader?' + autoprefix];
//var cssLoaders = ['css-loader'];
let lessLoaders = cssLoaders.slice(0);
lessLoaders.push('less-loader');

const GLOBALS = {
    'process.env': { NODE_ENV: JSON.stringify('test') }
};

export default {
    debug: true,
    noInfo: false,
    entry: [
        'whatwg-fetch',
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },
    plugins: [
        // Hash the files using MD5 so that their names change when the content changes.
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', cssLoaders.join('!'))},
            {test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', lessLoaders.join('!'))},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            {test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader"}
        ]
    }
};