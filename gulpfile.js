const gulp = require('gulp'),
    mocha = require('gulp-mocha');

// When gulp stops, stop (that means you lingering gulp-mocha)
const exit = (exitCode) => { console.log(new Date()); process.exit(exitCode); };
// The queue finished successfully
gulp.on('stop', () => { exit(0); });
// The queue was aborted due to a task error
gulp.on('err', () => { exit(1); });

gulp.task('test', () =>
    gulp.src('./test/*.test.js', { read: false })
        .pipe(mocha({ reporter: 'spec' }))
);
