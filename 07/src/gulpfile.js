var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var wrap = require('gulp-wrap');
var browserSync = require('browser-sync');

gulp.task('browser-sync', ['build', 'sass'], function() {
    browserSync({
        server: {
            baseDir: '..'
        }
    });
});

gulp.task('build', function() {
  gulp.src('pages/*.html')
      .pipe(wrap({src:'layout/default.html'}))
      .pipe(gulp.dest('..'));
});

gulp.task('sass', function(){
  gulp.src('scss/*.scss')
      .pipe(sass()).on('error', handleError)
      .pipe(autoprefixer())
      .pipe(minify())
      .pipe(gulp.dest('../css'))
      .pipe(browserSync.reload({stream:true}));
});

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('rebuild', ['build'], function () {
    browserSync.reload();
});

gulp.task('watch', function(){
	gulp.watch(['**/*.html'], ['rebuild']);
  gulp.watch(['scss/*.scss'], ['sass']);
});

gulp.task('default', ['browser-sync', 'watch']);