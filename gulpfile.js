"use strict";

var gulp    = require("gulp");
var uglify  = require("gulp-uglify");
var concat  = require("gulp-concat");
var sass    = require("gulp-sass");
var del     = require('del');
var runSequence = require('run-sequence');

gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['dist/**/*'], cb);
});

gulp.task("js", function() {
  return gulp
    .src([
      "src/js/*.js"
    ])
    .pipe(concat('application.js'))
    .pipe(uglify({mangle: true}))
    .pipe(gulp.dest("dist/js/"));
});

gulp.task('css', function() {
  return gulp
    .src([
      'src/css/*.scss'
    ])
    .pipe(concat('application.scss'))
    .pipe(
      sass({
        outputStyle: 'compressed',
        imagePath: '../img',
        includePaths: [
          'src/assets/css'
        ]
      })
    )
    .pipe(gulp.dest("dist/css/"));
});

gulp.task("img", function() {
  return gulp
    .src([
      'src/img/**/*.png',
      'src/img/**/*.jpg'
    ])
    .pipe(gulp.dest("dist/img"));
});

gulp.task("html", function() {
  return gulp
    .src([
      'src/*.html'
    ])
    .pipe(gulp.dest("dist/"));
});


gulp.task('watch', function() {
  gulp.watch(['src/css/**/*.css'], ['css']);
  gulp.watch(['src/js/**/*.js'], ['js']);
  gulp.watch(['src/**/*.html'], ['html']);
});

gulp.task("assets", [
  'js',
  'css',
  'img',
  'html'
]);

gulp.task("build", function() {
  return runSequence('clean', 'assets');
});