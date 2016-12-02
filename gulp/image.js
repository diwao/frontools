'use strict';

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const jpegtran = require('imagemin-jpegtran');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

gulp.task('imagemin', function(){
  // pngファイル
  gulp.src('image/src/**/*.png')
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(imagemin({
      use: [pngquant([
        {quality: '80'},
        {speed: 1}
      ])]
    }))
    .pipe(gulp.dest('image/dest')
  );

  // jpg
  gulp.src(['image/src/**/*.jpg', 'iamge/src/**/*.jpeg'])
    .pipe(imagemin({
      use: [jpegtran([{
        progressive: true
      }])]
    }))
    .pipe(gulp.dest('image/dest')
  );
});
