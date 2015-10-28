'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

  var tsProject = $.typescript.createProject('src/tsconfig.json');

  gulp.task('scripts', ['tsd:install'], function () {
  return gulp.src(path.join(conf.paths.src, '/app/**/*.ts'))
    .pipe($.sourcemaps.init())
    //.pipe($.tslint())
    //.pipe($.tslint.report('prose', { emitError: false }))
    .pipe($.typescript(tsProject)).on('error', conf.errorHandler('TypeScript'))
    .pipe($.concat('index.module.js'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.join(conf.paths.src, '/app')))
    .pipe(browserSync.reload({ stream: true }))
    .pipe($.size())
});
