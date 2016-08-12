var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var gulpif = require('gulp-if');
var runSequence = require('run-sequence');
var del = require('del');
var browserSync = require('browser-sync');

gulp.task('hello', function () {
    console.log('hello');
});

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('useref', ['sass'], function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        // minifies only if it's a javascript file
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cssnano()))
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return del.sync('dist');
});

gulp.task('build', ['clean'], function () {
    runSequence('hello', ['useref']);
});

// Development
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });
});

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});
