var gulp = require('gulp');
// var sass = require('gulp-sass');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

// 一次性编译 Sass
gulp.task('less', function() {
    return gulp.src('./source/less/*.less')
        .pipe(less({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./source/css'));
});

// 实时编译
gulp.task('liveless', ['less'], function() {
    gulp.watch('./source/less/_partial/*.less', ['less']);
    gulp.watch('./source/less/*.less', ['less']);
});