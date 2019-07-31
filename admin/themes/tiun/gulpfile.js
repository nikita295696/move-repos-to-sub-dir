require('es6-promise').polyfill(); // for prefixer

var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass        = require('gulp-sass'),
    plumber     = require('gulp-plumber'), // errors async watching
    gutil       = require('gulp-util'),
    //sftp        = require('gulp-sftp'),
    //imagemin    = require('gulp-imagemin'),
    rename      = require('gulp-rename'),
    clean       = require('gulp-clean'), // удаляем файлы
    //cssmin      = require("gulp-cssmin"),
    //watch       = require('gulp-watch'),
    prefixer    = require('gulp-autoprefixer');

    path = {
        watch: { // За изменением каких файлов будем наблюдать
            style:  'scss/*.scss',
            imgs:   'img_src/*.*'
        }
    };

gulp.task('sass', function () { // Compile scss
    return gulp.src("scss/*.scss") // the source .scss file
        .pipe(plumber(function(error) { // чтобы не прервать watcher из-за ошибок
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(sass()) // pass the file through gulp-sass

        // .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(prefixer({
            browsers: [
                'last 2 versions', // targets the last 2 versions for each browser
                '> 1%'  // browser versions selected by global usage statistics
            ]
        }))

        //.pipe(cssmin())
        .pipe(gulp.dest('css')) // output .css file to css folder

        .pipe(browserSync.reload({stream:true})); // reload the stream
});

gulp.task('rename_main2scss', function () {
    gulp.src("./css/main.css")
        .pipe(clean({force: true})) // удаляем css/main.css
        .pipe(rename("scss.css"))   // переименовываем его
        .pipe(gulp.dest("./css"));  // записываем
});


gulp.task('reload', function () {       browserSync.reload();       });
glob = require("glob");
var config = {
    // remoteURL: "http://gordinsky.com/",
    // remoteURL: "http://gordinsky.zina.com.ua/",
    remoteURL: "http://gordinsky.test.dd:8083",

    srcDir: "./scss",
    injectDir: "./",   // из какой папки будем инъецировать css и js
    localPath: "/local-assets",  // вирт. папка для локалхоста

    localAssets: { // внутри injectDir
        css: [
            "css/**/*.css"
        ],
        js: [
            "js/**/*.js"
        ]
    }

};
gulp.task('browser-sync', ['sass'], function() {
    browserSync.init({
    //    proxy: "www.test",
    //    browser: "chrome",
    //    port: 7000
            proxy: {
                target: config.remoteURL
            },
            rewriteRules: [
            { // Inject Local CSS at the end of HEAD
                match: /<\/head>/i,
                fn: function(req, res, match) {
                    var localCssAssets = "";
                    for (var i = 0; i < config.localAssets.css.length; i++) {

                        var files = glob.sync(config.localAssets.css[i], {
                            cwd: config.injectDir
                        });

                        for (var file in files) {
                            localCssAssets += "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + config.localPath + "/" + files[file] + "\">";
                        }
                    }

                    return localCssAssets + match;
                }
            }, {
                // Inject Local JS at the end of BODY
                match: /<\/body>/i,
                fn: function(req, res, match) {
                    var localJsAssets = "";
                    for (var i = 0; i < config.localAssets.js.length; i++) {

                        var files = glob.sync(config.localAssets.js[i], {
                            cwd: config.injectDir
                        });

                        for (var file in files) {
                            localJsAssets += "<script src=\"" + config.localPath + "/" + files[file] + "\"></script>";
                        }
                    }

                    return localJsAssets + match;
                }
            },
            { // удаляем remote css
                match: new RegExp('/themes/tiun/css/main.css'),
                fn: function() {
                    return 'css/main.min.css';
                }
            },
            { // удаляем remote js
                match: new RegExp('main.js'),
                fn: function() {
                    return '';
                }
            }

            ],
            serveStatic: [{
                route: config.localPath,
                dir: config.injectDir
            }],
            watchTask: true,
            open: "local"
        });
}); //Launch the Static Server


gulp.task('compress_img', function() {
    gulp.src('img_src/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/'))
});


// sftp
var distStyles = 'css/*.css';
var host = '11.11.11.00',
    user = 'zina',
    pass = 'pewede',
    remotePath = '/var/www/    /themes/tiun/css';

gulp.task('deploy', function() {
// sftp
    gulp.src(distStyles)
        .pipe(sftp({
            host: host,
            port: 850,
            user: user,
            pass: pass,
            remotePath: remotePath
        }));
});

gulp.task('watch', function () {

    gulp.watch( path.watch.style, ['sass'] );

    //gulp.watch( path.watch.imgs, ['compress_img'] );
});

gulp.task('default', ['watch', 'browser-sync']);
