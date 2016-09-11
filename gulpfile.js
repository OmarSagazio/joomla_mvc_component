var gulp = require('gulp'),
    del = require('del');


gulp.task('deploy', function () {
    // Zippare i file
});

gulp.task('clean', function () {
    del.sync(['dist/**', '!dist']);
});

gulp.task('copy', function () {
    gulp.src('./src/com_helloworld/**', {base: './src/'})
        .pipe(gulp.dest('./dist'));
});


//    gutil = require('gulp-util'),