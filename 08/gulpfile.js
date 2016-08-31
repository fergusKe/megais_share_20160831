var gulp = require('gulp');
var tinypng = require('gulp-tinypng');
 
gulp.task('tinypng', function () {
    gulp.src('src/**')
        .pipe(tinypng('qtV_OqBBXFMv9oVj--iIl7V-Z4GI49Vl'))
        .pipe(gulp.dest('dist'));
});