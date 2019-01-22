'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./shoppingCart/shoppingCart.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./shoppingCart'));
});
 
gulp.task('watch', function () {
  gulp.watch('./shoppingCart/shoppingCart.scss', gulp.series('sass'));
});