var path = require('path');

module.exports = function (config) {
  config.set({
    port: 9876,
    color: true,
    singleRun: true,
    captureTimeout: 5000,
    reportSlowerThan: 500,

    frameworks: ['mocha', 'chai', 'sinon', 'sinon-chai'],

    files: [
      'tests.webpack.js'
    ],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha-reporter',
      'karma-sinon',
      'karma-sinon-chai'
    ],

    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },

    reporters: ['mocha'],

    webpack: {
      devtool: 'inline-source-map',

      resolve: {
        root: [path.join(__dirname, 'src')],
        modulesDirectories: ['src', 'node_modules'],
        alias: {}
      },
      
      module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?stage=1'}
        ]
      }
    },
    
    webpackMiddleware: {
      // webpack dev middleware settings
      noInfo: true
    }
  });
};