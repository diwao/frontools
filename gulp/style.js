'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');

let autoprefixerOptions = ['last 3 version', 'ie >= 9', 'Android 4.0'];

gulp.task('style', function(){
  gulp.src('scss/src/**/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sass({
      outputStyle: 'nested',
      sourceMap: true,
      sourceComment: false
    }))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('scss/dest'))
    .pipe(notify({
      title: 'scssをコンパイルしました！',
      message: new Date(),
      sound: 'Glass'
    })
  );
});
