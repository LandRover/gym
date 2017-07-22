let fs = require('fs'),
    path = require('path'),
    PATH_BASE = path.resolve(__dirname),
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    packageJSON = JSON.parse(fs.readFileSync('./package.json')),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');


let npmLifecycleEvent = process.env.npm_lifecycle_event || '',
    environment = process.env.NODE_ENV || '';


let entry = {
        main: './app/app.main.js',
        vendor: './vendor.js'
    },
    output = {
        path: path.resolve(PATH_BASE, 'dist/js'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js',
        libraryTarget: 'umd',
        pathinfo: false
    },
    contextReplacementPlugin = new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)@angular/,
        path.join(process.cwd(), 'src')
    ),
    commonPlugins = [
        new webpack.optimize.CommonsChunkPlugin({name: ['main', 'vendor'], minChunks: Infinity}),
        new webpack.ProgressPlugin(),
        contextReplacementPlugin
    ];


/**
 *
 */
const commonConfig = {
    context: path.join(PATH_BASE, 'src'),

    resolve: {
        modules: [
          'node_modules',
          path.resolve(PATH_BASE, 'src')
        ],
        extensions: ['.js', '.json']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: ['env', 'angular2']
                }
            },
            {
                test: /\.js$/,
                exclude: [
                    path.join(process.cwd(), 'node_modules/rxjs'),
                    path.join(process.cwd(), 'node_modules/@angular')
                ]
            },
            {
                test: /\.html$/,
                use: 'html-loader?attrs=false&caseSensitive&removeAttributeQuotes=false'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },

    stats: {
        errorDetails: true,
        colors: true,
        modules: true,
        reasons: true
    },

    node: {
        global: true,
        crypto: 'empty',
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
};


var distribution = merge.smart(commonConfig, {

    entry: entry,
    output: output,


    plugins: commonPlugins.concat([
        new webpack.LoaderOptionsPlugin({
            debug: false,
            minimize: true
        }),

        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            mangle: {screw_ie8 : true},
            compress: {
                screw_ie8: true,
                warnings: false
            }
        }),

        new CopyWebpackPlugin([
            {from: 'index.html'},
            {from: 'favicon.ico'}
        ])
    ])

});


var test = merge.smart(commonConfig, {
    devtool: 'inline-source-map',

    plugins: [contextReplacementPlugin, new webpack.ProgressPlugin()]
});


var development = merge.smart(commonConfig, {

    entry: entry,
    output: output,


    plugins: commonPlugins.concat([
        new webpack.LoaderOptionsPlugin({
            debug: true,
            minimize: false
        })
    ]),

    devServer: {
        contentBase: './src',
        port: 8080,
        inline: true,
        historyApiFallback: true,

        watchOptions: {
            aggregateTimeout: 300,
            poll: 500
        },

        stats: 'errors-only'
    },

    devtool: '#eval-source-map'
});

if ('build' === npmLifecycleEvent || 'production' === environment) {
    module.exports = distribution;
} else
if (-1 !== npmLifecycleEvent.indexOf('test') || 'test' === environment) {
    module.exports = test;
} else {
    module.exports = development;
}