var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');

gulp.task('build:pug', function() {
  var stream = gulp.src('src/templates/index.pug')
  .pipe(pug())
  .pipe(gulp.dest('dist'))
})

gulp.task('build:stylus', function() {
  var stream = gulp.src('src/styles/main.styl')
  .pipe(stylus())
  .pipe(gulp.dest('dist'))
})
