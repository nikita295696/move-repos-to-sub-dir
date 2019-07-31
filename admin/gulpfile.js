var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    // imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    // svgSprite = require('gulp-svg-sprites'),
    // svgmin = require('gulp-svgmin'),
    // cheerio = require('gulp-cheerio'),
    // replace = require('gulp-replace'),
    pug = require('gulp-pug'),
    eol = require('gulp-eol');

gulp.task('sass', function() { //Таск для пошуку sass файлів
    return gulp.src('app/sass/**/*.scss') /*Обираємо всі файли з даним розширенням*/
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/')) /*Результат кладемо в папку css*/
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('pug', function() {
    gulp.src('app/pug/main/*.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app'));

    gulp.src('app/pug/portfolio/*.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app/portfolio'));

    gulp.src('app/pug/project/*.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app/project'));

    gulp.src('app/pug/services/*.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app/services'));

    gulp.src('app/pug/service/*.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app/service'));
        
    gulp.src('app/pug/contact/*.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app/contact'));

    gulp.src('app/pug/contact-form/*.pug')
    .pipe(plumber())
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('app/contact-form'));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});


gulp.task('scripts', function() {
    return gulp.src([
            'app/lips/jquery/dist/jquery.min.js',
            'app/lips/magnific-popup/dist/jquery.magnific-popup.min.js',
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
});

gulp.task('css-libs', ['sass'], function() {
    return gulp.src('app/css/libs.css')
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('clear', function() {
    return cache.clearAll();
});

// gulp.task('img', function() {
//     return gulp.src('app/img/**/*')
//         .pipe(cache(imagemin({
//             interlaced: true,
//             progressive: true,
//             svgoPlugins: [{ removeViewBox: false }],
//             use: [pngquant()]
//         })))
//         .pipe(gulp.dest('dist/img'));
// });

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts', 'pug', 'build'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/pug/**/*.pug', ['pug']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);

});

gulp.task('build', ['clean', 'sass', 'scripts'], function() {

    gulp.src('app/style.css').pipe(eol('\n')).pipe(gulp.dest('dist'));
    gulp.src('app/css/**/*').pipe(gulp.dest('dist/css'));

    gulp.src('app/fonts/**/*').pipe(gulp.dest('dist/fonts'));

    gulp.src(['app/img/**/*','!app/img/**/*.svg']).pipe(gulp.dest('dist/img')); // all except *.svg
    gulp.src(['app/img/**/*.svg']).pipe(eol('\n')).pipe(gulp.dest('dist/img')); // all *.svg

    gulp.src('app/js/**/*').pipe(gulp.dest('dist/js'));

    gulp.src('app/**/*.html').pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch']);