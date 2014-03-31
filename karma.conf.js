// Karma configuration

module.exports = function (config) {
  config.set({
    basePath: '',
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'slack.js',
      '*.spec.js'
    ],

    preprocessors: {
      'slack.js': ['coverage']
    },

    reporters: ['progress', 'coverage'],

    port: 9876,
    colors: true,

    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],

    captureTimeout: 60000,

    autoWatch: true,
    singleRun: true
  });
};

