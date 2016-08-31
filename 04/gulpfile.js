var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');

gulp.task('sass', function(){
  gulp.src('src/*.scss')
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(minify())
      .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function(){
  gulp.watch(['src/*.scss'], ['sass']);
})