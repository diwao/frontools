'use strict';

const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');
const notify = require('gulp-notify');

let spriteOptions = {
  imgName: 'sprite.png',
  cssName: '_sprite.scss',
  imgPath: './sprite.png',
  cssFormat: 'scss',
  cssVarMap: function (sprite) {
    sprite.name = 'sprite-' + sprite.name;
  }
};

gulp.task('sprite', function () {
  let spriteData = gulp.src('sprite/src/*')
    .pipe(spritesmith(spriteOptions)
  );
  spriteData.img
    .pipe(gulp.dest('sprite/dest'))
    .pipe(notify({
      title: 'sprite画像を生成しました',
      message: new Date(),
      sound: 'Glass'
    })
  );
  spriteData.css
    .pipe(gulp.dest('sprite/dest'))
    .pipe(notify({
      title: 'spriteのscssを生成しました',
      message: new Date(),
      sound: 'Glass'
    })
  );
});
