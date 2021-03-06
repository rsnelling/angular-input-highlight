// Generated by CoffeeScript 1.10.0
(function() {
  var argv;

  argv = require('optimist').argv;

  module.exports = function(config) {
    return config.set({
      basePath: '',
      frameworks: ['mocha', 'chai'],
      files: ['node_modules/angular/angular.js', 'node_modules/angular-mocks/angular-mocks.js', 'angular-input-highlight.coffee', 'test/*.spec.coffee'],
      exclude: [],
      preprocessors: {
        '**/*.coffee': ['coffee']
      },
      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: argv.crossbrowser ? ['Chrome', 'Firefox', 'Safari', 'IE9 - Win7', 'IE10 - Win7', 'IE11 - Win7'] : ['Chrome'],
      singleRun: false
    });
  };

}).call(this);
