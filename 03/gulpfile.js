var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  gulp.src('src/*.scss')
      .pipe(sass())
      .pipe(autoprefixer())
      // .pipe(autoprefixer({
      //     browsers: ['last 2 versions','ie 8']
      // }))
      .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function(){
  gulp.watch(['src/*.scss'], ['sass']);
})