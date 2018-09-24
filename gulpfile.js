'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var minify = require('gulp-csso');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var run = require('run-sequence');
var del = require('del');


// HTML
gulp.task('html', function() {
  return gulp.src('src/*.html')
  .pipe(gulp.dest('build'));
});

// COMPILE SCSS
gulp.task('css:compile', function() {
  return gulp.src('src/sass/style.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer()
  ]))
  .pipe(gulp.dest('src/css'));
});

// MINIFY CSS
gulp.task('css:minify', ['css:compile'], function() {
  return gulp.src('src/css/*.css')
  .pipe(minify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('build/css'))
  .pipe(browserSync.stream());
});

// CSS
gulp.task('css', ['css:compile', 'css:minify']);

// MINIFY JS
gulp.task('js:minify', function() {
  return gulp.src('src/js/*.js')
  .pipe(plumber())
  .pipe(uglify()) 
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('build/js'))
  .pipe(browserSync.stream());
});

// JS
gulp.task('js', ['js:minify']);

// CLEAN
gulp.task('clean', function() {
  return del('build');
});

// COPY FONTS
gulp.task('copy:fonts', function() {
  return gulp.src('src/fonts/**/*.*')
  .pipe(gulp.dest('build/fonts'));
});

// COPY IMAGES
gulp.task('copy:images', function() {
  return gulp.src('src/img/**/*.*')
  .pipe(gulp.dest('build/img'));
});

// COPY
gulp.task('copy', ['copy:fonts', 'copy:images']);

// BUILD
gulp.task('build', function(done) {
  run(
    'clean',
    'html',
    'css',
    'js',
    'copy',
    done
  )
});

// SERVER
gulp.task('server', function() {
	browserSync.init({
		proxy: 'creative/',
		notify: false
	});

	gulp.watch('src/*.html', ['html']).on('change', browserSync.reload);
	gulp.watch('src/sass/**/*.scss', ['css']).on('change', browserSync.reload);
	gulp.watch('src/js/**/*.js', ['js']).on('change', browserSync.reload);
});