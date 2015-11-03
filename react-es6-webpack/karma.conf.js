var path = require("path");

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],

    singleRun: true,

    frameworks: ['mocha', 'chai', 'sinon', 'sinon-chai'],

    files: [
      'tests.webpack.js'
    ],

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
        root: [path.join(__dirname, 'node_modules')],
        modulesDirectories: ['src', 'node_modules'],
        alias: {}
      },
      
      module: {
        loaders: [
            {test: /(\.jsx|\.js)$/, exclude: /node_modules/, loader: 'babel-loader', query: {stage: 1}}
        ]
      }
    },

    webpackMiddleware: {
      // webpack dev middleware settings
      noInfo: true
    },

    captureTimeout: 5000,

    singleRun: true,

    reportSlowerThan: 500,

    color: true
  });
};