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
    return gulp.src(['./dist/**/*.sass','!./dist/**/_*.sass']) 
        .pipe(sass()) 
        .pipe(gulp.dest('./dist/css')) 
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch',['browser-sync', 'sass'], function(){
    gulp.watch('./dist/**/*.sass', ['sass']);
})