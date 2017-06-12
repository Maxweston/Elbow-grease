var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('stylus');

// gulp.src('src/templates/*.pug')
//   .pipe(pug())
//   .pipe(gulp.dest('dist'))

// gulp.src('src/styles/*.styl')
//   .pipe(stylus())
//   .pipe(gulp.dest('dist/css'))

// gulp.task('default', function() {
  // place code for your default task here
// });

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
