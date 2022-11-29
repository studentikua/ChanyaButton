module.exports = function (gulp, plugins) {
    function onError(e) {
        console.log(e.toString());
        this.emit('end');
    }

    return async function () {
        gulp.src('./pug/views/*.pug')
            .pipe(plugins.plumber({errorHandler: onError}))
            .pipe(plugins.data(function (file) {
                return JSON.parse(plugins.fs.readFileSync('./pug/data/data.json'));
            }))
            .pipe(plugins.pug({
                "pretty": true
            }))
            .pipe(gulp.dest('../'));
    }
}
