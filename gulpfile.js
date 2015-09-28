
"use strict";

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    clean = require("gulp-clean"),
    livereload = require("gulp-livereload"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    autoprefixer = require("gulp-autoprefixer"),
    gulpif = require("gulp-if"),

    yargs = require("yargs").argv,

    prod, js;



prod = yargs.prod;

js = {

    out: "./assets/dist/js",
    vendorout: "./assets/dist/js/vendor",
    modernizr: "./bower_components/modernizr/modernizr.js",

    vendor: [

        "./bower_components/svg4everybody/svg4everybody.ie8.js",
        "./bower_components/jquery/dist/jquery.js",

        // prism

        "./bower_components/prism/prism.js",

        "./bower_components/prism/components/prism-git.js",
        "./bower_components/prism/components/prism-bash.js",
        "./bower_components/prism/components/prism-powershell.js",

        "./bower_components/prism/components/prism-markdown.js",
        "./bower_components/prism/components/prism-handlebars.js",

        "./bower_components/prism/components/prism-jsx.js",

        "./bower_components/prism/components/prism-css-extras.js",
        "./bower_components/prism/components/prism-scss.js",
        "./bower_components/prism/components/prism-sass.js" ]

};










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

    gulp.src( js.vendor )

        .pipe( gulpif( prod, uglify() ) )
        .pipe( gulp.dest( js.vendorout ) )

        .pipe( concat("vendor.js") )
        .pipe( gulp.dest( js.vendorout ) );


    gulp.src( js.modernizr )

        .pipe( gulpif( prod, uglify() ) )
        .pipe( gulp.dest( js.vendorout ) );


    gulp.src( "./assets/app/js/**/*.js" )

        .pipe( gulpif( prod, uglify() ) )
        .pipe( gulp.dest( js.out ) )

        .pipe( concat("combined.js") )
        .pipe( gulp.dest( js.out ) );

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

    console.log("\n All clean! \n");

    return gulp
        .src("./assets/dist", { read: false })
        .pipe( clean() );

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
