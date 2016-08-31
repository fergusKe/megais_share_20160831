var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');

gulp.task('sass', function(){
  gulp.src('scss/*.scss')
      .pipe(sass()).on('error', handleError)
      .pipe(autoprefixer())
      .pipe(minify())
      .pipe(gulp.dest('../css'));
});

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('cp', function(){
  gulp.src('*.html')
      .pipe(gulp.dest('..'));
});

gulp.task('watch', function(){
	gulp.watch(['*.html'], ['cp']);
  gulp.watch(['scss/*.scss'], ['sass']);
});

gulp.task('default', ['sass', 'cp', 'watch']);