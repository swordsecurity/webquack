var gulp = require('gulp');
var webserver = require('gulp-webserver');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
     browserSync.init({
        proxy: {
            target: "localhost:8000", // can be [virtual host, sub-directory, localhost with port]
            ws: true // enables websockets
        }
     });
});

gulp.task('watch', function() {
    gulp.watch(["./public/**/*"]).on('change', browserSync.reload);
});

gulp.task('webserver', function() {
	gulp.src('./public')
	  .pipe(webserver({ port: 8000 }));
});

gulp.task('default', ['watch', 'webserver','browser-sync']);
