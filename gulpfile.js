'use strict';

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();

var testFiles = [
  'bower_components/angular/angular.js',
  'bower_components/angular-mocks/angular-mocks.js',
  'slack.js',
  '*.spec.js'
];

gulp.task('scripts', () => gulp.src('slack.js')
  .pipe(plugins.rename('slack.min.js'))
  .pipe(plugins.ngmin())
  .pipe(plugins.uglify({
    preserveComments: 'some',
    outSourceMap: true
  }))
  .pipe(gulp.dest('.')));

gulp.task('jshint', () => {
  gulp.src([
    'gulpfile.js',
    'slack.js',
    '*.spec.js'
  ])
  .pipe(plugins.jshint())
  .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('jasmine', () => // Be sure to return the stream
gulp.src(testFiles)
  .pipe(plugins.karma({
    configFile: 'karma.conf.js',
    action: 'run'
  }))
  .on('error', err => {
    // Make sure failed tests cause gulp to exit non-zero
    throw err;
  }));

gulp.task('default', ['scripts']);

gulp.task('test', ['jasmine', 'jshint']);
