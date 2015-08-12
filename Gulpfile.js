var gulp = require('gulp'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect'),
	watch = require('gulp-watch');

gulp.task('webserver', function() {
	connect.server({
		livereload: true,
		port: 8000,
		root: ['app']
	});
});

gulp.task('livereload', function() {
	gulp.src(['app/assets/**/*.css', 'app/**/*.js'])
		.pipe(watch(['app/assets/**/*.css', 'app/**/*.js']))
		.pipe(connect.reload());
});

gulp.task('sass', function() {
    gulp.src('app/assets/sass/**/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/assets/css/'));
});

gulp.task('watch', function() {
    gulp.watch('app/assets/sass/**/*.scss',['sass']);
});

gulp.task('default', ['sass', 'webserver', 'livereload', 'watch']);
