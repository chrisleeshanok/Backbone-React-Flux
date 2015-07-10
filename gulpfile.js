var gulp    = require('gulp'),
    eslint  = require('gulp-eslint'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream');



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

gulp.task('browserify', function() {
    var bundler = browserify({
        entries: ['./lib/components/bundle.js'],
        transform: [reactify],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    });

    var bundle = bundler.bundle();
    bundle.pipe(source('browser.js'))
    //.pipe(streamify(uglify()))
    .pipe(gulp.dest('./public/js'));
});
