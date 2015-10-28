'use strict';

var path = require('path');
var gulp = require('gulp');
var gulpJade = require('gulp-jade');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('markups', function() {

  return gulp.src(path.join(conf.paths.src, '/app/**/*.jade'))
    .pipe(gulpJade({pretty: true}))
    .pipe(gulp.dest(path.join(conf.paths.src, '/app/')))
    .pipe(browserSync.reload({ stream: true }));
});
