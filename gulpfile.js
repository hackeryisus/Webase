var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var minifyhtml = require('gulp-minify-html');


var config = {
  styles: {
    main:'./src/styles/main.scss',
    watch: './src/styles/**/*.scss',
    output: './dist/css'
  },
  html:{
    main: './src/index.html',
    watch: './src/*.html',
    output: './dist/'
  },
  scripts:{
    main: './src/scripts/main.js',
    watch: './src/scripts/**/*.js',
    output: './dist/js'
  },
  images: {
  watch: ['./src/img/*.png', './src/img/*.jpg'],
  output: './dist/img'
  }
}

gulp.task('server', function(){
  gulp.src('./dist')
    .pipe(webserver({
      host:'0.0.0.0',
      port: 8080,
      livereload: true
    }));
});

// Compile sass to css
gulp.task('build:css', function () {
  return gulp.src(config.styles.main)
    .pipe(sass())
    .pipe(gulp.dest(config.styles.output));
});

gulp.task('build:html', function () {
  return gulp.src(config.html.main)
    .pipe(minifyhtml())
    .pipe(gulp.dest(config.html.output));
});

gulp.task('build', ['build:css', 'build:html']);

gulp.task('default', ['server','build' ]);
