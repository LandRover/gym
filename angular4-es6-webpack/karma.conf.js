let path = require('path');

let npmLifecycleEvent = process.env.npm_lifecycle_event || '';
let isSingleRun = npmLifecycleEvent === 'test';

module.exports = function(config) {
  config.set({
    port: 8081,
    basePath: '',

    frameworks: ['mocha', 'chai', 'sinon', 'sinon-chai'],

    files: [
      {pattern: 'tests.webpack.js'}
    ],

    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },

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

    reporters: ['mocha'],

    webpack: require('./webpack.config'),

    webpackServer: {
      stats: 'errors-only',
      noInfo: true
    },

    colors: true,

    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS'],

    autoWatch: !isSingleRun,
    singleRun: isSingleRun
  });
};