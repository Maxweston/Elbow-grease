var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');

gulp.task('build:pug', function () {
  var stream = gulp.src('src/templates/index.pug')
  .pipe(pug())
  .pipe(gulp.dest('dist'))
})

gulp.task('build:stylus', function () {
  var stream = gulp.src('src/styles/main.styl')
  .pipe(stylus())
  .pipe(gulp.dest('dist'))
})

gulp.task('build:js', function () {
  var stream = gulp.src('src/js/app.js')
  .pipe(gulp.dest('dist'))
})

gulp.task('watch', function() {
  gulp.watch('src/styles/*.styl', ['build:stylus'])
  gulp.watch('src/templates/*.pug', ['build:pug'])
  gulp.watch('src/js/*.js', ['build:js'])
})
