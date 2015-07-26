
"use strict";

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    clean = require("gulp-clean"),
    livereload = require("gulp-livereload"),
    replace = require("gulp-replace"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    autoprefixer = require("gulp-autoprefixer");




gulp.task("default", ["assets", "svg", "js", "img", "sass"], function() {

    console.log("done");

});








gulp.task("assets", function() {

    var assets = [
            "./assets/app/favicon.png",
            "./assets/app/favicon.ico",
            "./assets/app/apple-touch-icon.png" ];

    gulp
        .src( assets )
        .pipe( gulp.dest("./assets/dist") );

});

gulp.task("svg", function() {

    var i = /<i data-icon="(.*)"><\/i>/g,
        o = "<svg class=\"$1\" role=\"presentation\"><use xlink:href=\"/assets/dist/img/svgdefs.svg#$1\"></use></svg>";

    gulp
        .src( "./**/*.hbs" )
        .pipe( replace( i, o ) )
        .pipe( gulp.dest("./") );

});

gulp.task("js", ["clean:js"], function() {

    var vendor = [
        "./bower_components/svg4everybody/svg4everybody.js",
        "./bower_components/svg4everybody/svg4everybody.ie8.js",
        "./bower_components/jquery/dist/jquery.js",
        "./bower_components/modernizr/modernizr.js" ];

    gulp.src( vendor )
        .pipe( gulp.dest("./assets/dist/js/vendor") )
        .pipe( uglify() )
        .pipe( rename({ extname: ".min.js" }) )
        .pipe( gulp.dest("./assets/dist/js/vendor") );

    gulp.src( "./assets/app/js/**/*.js" )
        .pipe( gulp.dest("./assets/dist/js") )
        .pipe( uglify() )
        .pipe( rename({ extname: ".min.js" }) )
        .pipe( gulp.dest("./assets/dist/js") );

});

gulp.task("sass", ["clean:sass"], function() {

    return gulp
        .src("./assets/app/css/**/*.scss")
        .pipe( sass().on("error", sass.logError ) )
        .pipe( autoprefixer("last 5 versions") )
        .pipe( gulp.dest("./assets/dist/css") )
        .pipe( livereload( 1337 ) );

});

gulp.task("img", ["clean:img"], function() {

    return gulp.src("./assets/app/img/**/*")
        .pipe( gulp.dest("./assets/dist/img") );

});









gulp.task("clean", function() {

    return gulp
        .src("./assets/dist", { read: false })
        .pipe( clean() );

    console.log("\n All clean! \n");

});

gulp.task("clean:js", function() {

    return gulp
        .src("./assets/dist/js", { read: false })
        .pipe( clean() );

});

gulp.task("clean:sass", function() {

    return gulp
        .src("./assets/dist/css", { read: false })
        .pipe( clean() );

});

gulp.task("clean:img", function() {

    return gulp
        .src("./assets/dist/img", { read: false })
        .pipe( clean() );

});










gulp.task("watch:sass", function() {

    livereload.listen();
    gulp.watch("./assets/app/css/**/*.scss", [ "sass" ]);

});
