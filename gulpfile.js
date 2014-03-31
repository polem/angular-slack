'use strict';

var gulp = require('gulp'),
  gulpLoadPlugins = require('gulp-load-plugins'),
  plugins = gulpLoadPlugins();

var testFiles = [
  'bower_components/angular/angular.js',
  'bower_components/angular-mocks/angular-mocks.js',
  'slack.js',
  '*.spec.js'
];

gulp.task('scripts', function() {
  return gulp.src('slack.js')
    .pipe(plugins.rename('slack.min.js'))
    .pipe(plugins.ngmin())
    .pipe(plugins.uglify({
      preserveComments: 'some',
      outSourceMap: true
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('jshint', function() {
  gulp.src([
    'gulpfile.js',
    'slack.js',
    '*.spec.js'
  ])
  .pipe(plugins.jshint())
  .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('jasmine', function() {
  // Be sure to return the stream
  return gulp.src(testFiles)
    .pipe(plugins.karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

gulp.task('default', ['scripts']);

gulp.task('test', ['jasmine', 'jshint']);
