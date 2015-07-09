var gulp    = require('gulp');
    eslint  = require('gulp-eslint');


gulp.task('default', function() {
    console.log(
        'usage: \n' +
        '\tlint: \t Lint all .js files\n'
    );
});

gulp.task('lint', function() {
    gulp.src([
        './index.js'
    ])
    .pipe(eslint())
    .pipe(eslint.format());
});
