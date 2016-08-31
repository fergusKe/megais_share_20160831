var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('src/*.scss')
      .pipe(sass())
      // .pipe(sass({
      //   outputStyle: 'compact'
      // }))
      .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function(){
  gulp.watch(['src/*.scss'], ['sass']);
})