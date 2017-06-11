var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() { 
    browserSync({ 
        server: { 
            baseDir: '' 
        },
        notify: false 
    });
});

gulp.task('sass', function(){
    return gulp.src(['./sass/**/*.sass'])
        .pipe(sass()) 
        .pipe(gulp.dest('./dist/css/')) 
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('default',['browser-sync', 'sass'], function(){
    gulp.watch('./sass/**/*.sass', ['sass']);
});