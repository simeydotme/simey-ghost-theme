
"use strict";

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    clean = require("gulp-clean"),
    livereload = require("gulp-livereload"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    autoprefixer = require("gulp-autoprefixer");




gulp.task("default", ["init", "watch"], function() {

    console.log("\n  💫  👌 \n");

});

gulp.task("init", ["assets", "js", "img", "sass"], function() {

    console.log("\n\n\n 🌟 getting this show on the road... \n");

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

gulp.task("js", ["clean:js"], function() {

    var out = "./assets/dist/js",
        vendorout = "./assets/dist/js/vendor",
        modernizr = "./bower_components/modernizr/modernizr.js",
        vendor = [
            "./bower_components/svg4everybody/svg4everybody.ie8.js",
            "./bower_components/jquery/dist/jquery.js",
            "./bower_components/prism/prism.js" ];


    gulp.src( vendor )
        .pipe( gulp.dest( vendorout ) )

        .pipe( concat("vendor.js") )
        .pipe( gulp.dest( vendorout ) )

        .pipe( uglify() )
        .pipe( rename({ extname: ".min.js" }) )
        .pipe( gulp.dest( vendorout ) )

        .pipe( concat("vendor.min.js") )
        .pipe( gulp.dest( vendorout ) );


    gulp.src( modernizr )
        .pipe( gulp.dest( vendorout ) )

        .pipe( uglify() )
        .pipe( rename({ extname: ".min.js" }) )
        .pipe( gulp.dest( vendorout ) );


    gulp.src( "./assets/app/js/**/*.js" )
        .pipe( gulp.dest( out ) )

        .pipe( uglify() )
        .pipe( rename({ extname: ".min.js" }) )
        .pipe( gulp.dest( out ) );

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










gulp.task("watch", function() {

    livereload.listen();
    gulp.watch("./assets/app/css/**/*.scss", [ "sass" ]);
    gulp.watch("./assets/app/js/**/*.js", [ "js" ]);

});
