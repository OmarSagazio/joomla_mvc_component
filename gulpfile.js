var gulp = require('gulp'),
    del = require('del'),
    zip = require('gulp-zip');


gulp.task('deploy', function () {
    // Zippare i file
});

gulp.task('zip', function() {
    return gulp.src('src/com_helloworld/**')
        .pipe(zip('com_helloworld.zip'))
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    del.sync(['dist/**', '!dist']);
});

gulp.task('copy', function () {
    gulp.src('./src/com_helloworld/**', {base: './src/'})
        .pipe(gulp.dest('./dist'));
});


//    gutil = require('gulp-util'),