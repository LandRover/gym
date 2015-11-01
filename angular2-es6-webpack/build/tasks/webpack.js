module.exports = function(grunt, options) {
    var webpack = require('webpack'),
        __node_dir = options.build.paths.lib.node;

    return {
        options: {
            debug: true,
            
            resolve: {
                //fallback: __node_dir,
                
                extensions: ['', '.js'],
                
                alias: {
                    //lodash: __bower_dir + '/lodash/lodash.js'
                }
            },
            
            devtool: 'cheap-source-map',
            
            stats: {
                timings: true,
                color: true,
                reasons: true
            },
            
            module: {
                loaders: [
                    {test: /\.css$/, loader: 'style!css'},
                    {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?stage=1'},
                    {test: /\.html$/, exclude: /node_modules/, loader: 'html-loader'},
                    {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'}
                ]
            },
            
            progress: true,
            
            externals: {
                lodash: 'lodash'
            }
        },
        
        
        /**
         *
         */
        debug: {
            debug: true,
            
            entry: {
                app: [options.build.paths.src.js + '/bootstrap.js']
            },
            
            output: {
                path: options.build.paths.build.js,
                filename: 'index.js',
                library: 'index',
                libraryTarget: 'umd',
                pathinfo: true
            },
            
            plugins: [
                new webpack.DefinePlugin({
                    __DEBUG__: true
                }),
                
                new webpack.ProvidePlugin({
                    _: "lodash"
                })
            ]
        },
        
        
        /**
         *
         */
        release: {
            entry: {
                app: [options.build.paths.src.js + '/bootstrap.js']
            },
            
            output: {
                path: options.build.paths.build.js,
                filename: 'index.js',
                library: 'index',
                libraryTarget: 'umd',
                pathinfo: true
            },
            
            plugins: [
                new webpack.DefinePlugin({
                    __DEBUG__: false
                }),
                
                new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
                new webpack.optimize.DedupePlugin(),
                new webpack.optimize.UglifyJsPlugin({sourceMap: false}),
                new webpack.optimize.OccurenceOrderPlugin(),
                new webpack.optimize.AggressiveMergingPlugin()
            ]
        }
    };
};