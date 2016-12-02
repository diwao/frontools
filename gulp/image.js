var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
const jpegtran = require('imagemin-jpegtran');

gulp.task('imagemin', function(){
  // pngファイル
  gulp.src('image/src/**/*.png')
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
