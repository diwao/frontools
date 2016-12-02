'use strict';

const gulp = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// minify
gulp.task('jsmin', function(){
  gulp.src('js/src/**/*.js')
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js/dest'))
    .pipe(notify({
      title: 'jsをminifyしました',
      message: new Date(),
      sound: 'Glass'
    })
  );
});
