

/* globals jQuery, document */
(function($, undefined) {

    "use strict";

    var $document = $(document),
        $body = $("body"),
        version = $("link[rel=\"shortcut icon\"]").attr("href").split("?")[1];


    $.fn.titleLinks = function() {

        return $(this).each(function(k, v) {

            var $this = $(v),
                content = $this.html(),
                icons = {},
                link;

            icons.link = "<svg class=\"simicon-link\" role=\"presentation\">" +
                "<use xmlns:xlink=\"http://www.w3.org/1999/xlink\" " +
                "xlink:href=\"/assets/dist/img/svgdefs.svg" +
                "?" + version +
                "#simicon-link\"> " +
                "</use></svg>";

            icons.arrow = "<svg class=\"simicon-arrow-right\" role=\"presentation\">" +
                "<use xmlns:xlink=\"http://www.w3.org/1999/xlink\" " +
                "xlink:href=\"/assets/dist/img/svgdefs.svg" +
                "?" + version +
                "#simicon-arrow-right\"> " +
                "</use></svg>";

            link = "<a href=\"#" + $this.attr("id") + "\">" + content + "</a>";

            $this.html( icons.link + icons.arrow + link );

        });

    };



    $.fn.horizontalRules = function( settings ) {

        var defaults = {
            position: "after"
        }, opts, html;

        opts = $.extend( defaults, settings );
        html = "<div class=\"hr\" role=\"presentation\"></div>";

        return $(this).each(function() {

            var $this = $(this);

            if ( opts.position === "after" ) {

                $this
                    .hide()
                    .after( html );

            } else if ( opts.position === "before" ) {

                $this
                    .hide()
                    .before( html );

            }

        });

    };


    $.fn.centerImages = function() {

        return $(this).each(function() {

            var $this = $(this);

            if ( $this.is("img") ) {

                $this
                    .parent("p")
                    .addClass("txt-c");

            }

        });

    };



    $document.ready(function() {




        var $post = $(".blog-post__content"),
            $titles = $post.find("h1,h2,h3,h4,h5"),
            $codes = $post.find("pre"),
            $hrs = $post.find("hr"),
            $imgs = $post.find("img"),

            guy, 
            toggle = true;

        $post.fitVids();
        $titles.titleLinks();
        $codes.addClass("prettyprint");
        $hrs.horizontalRules();
        $imgs.centerImages();






        // error page fun thing.

        if ( $body.hasClass("error-page") ) {

            guy = setInterval(function() {

                if ( toggle ) {

                    $(".guy").html( "¯\\_( ツ)_/¯" );
                    toggle = false;

                } else {

                    $(".guy").html( "¯\\_(ツ )_/¯" );
                    toggle = true;

                }

            }, 1000 );

            $(".guy").on("click", function() {

                clearTimeout( guy );

            });

        }




    });





















    // console easter egg.

    if ( window.console && console.warn && console.info && console.error ) {

        window.doge = function() {
            console.log(
                "%c░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
                "░░░░░░░░░░░░░░░░░░░░░░▄░░░░░░░░░░░░░░▄░░░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
                "░░░░░░░░░░░░░░░░░░░░░▌▒█░░░░░░░░░░░▄▀▒▌░░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
                "░░░░░%c such secret %c░░░▌▒▒█░░░░░░░░▄▀▒▒▒▐░░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
                "░░░░░░░░░░░░░░░░░░░░▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐░░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
                "░░░░░░░░░░░░░░░░░░▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐░░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
                "░░░░░░░░░░░░░░░░▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌░░░░░░░%c very javascript %c░░\n" +
                "░░░░░░░░░░░░░░░▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
                "░░░░░░░░░░░░░░░▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
                "░░░░░░░░░░░░░░▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌░░░░░░░░░░░░░░░░░░░░░░░░\n" +
                "░░░░░░░░░░░░░░▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌░░░░░░░░░░░░░░░░░░░░░░░░\n" +
                "░░░░░░░░░░░░░▀▒▀▐▄█▄█▌▄░▀▒▒░░░░░░░░░░▒▒▒▐░░%c many code %c░░░░░░░░░░░\n" +
                "░░░░░░░░░░░░░▐▒▒▐▀▐▀▒░▄▄▒▄▒▒▒▒▒▒░▒░▒░▒▒▒▒▌░░░░░░░░░░░░░░░░░░░░░░░\n" +
                "░░░░░░░░░░░░░▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒▒▒░▒░▒░▒▒▐░░░░░░░░░░░░░░░░░░░░░░░░\n" +
                "░░░░░░░░░░░░░░▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒░▒░▒░▒░▒▒▒▌░░░░░░░░░░░░░░░░░░░░░░░░\n" +
                "░░░░░░░░░░░░░░▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▄▒▒▐░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
                "░░░░%c do hide %c░░▀▄▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▄▒▒▒▒▌░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
                "░░░░░░░░░░░░░░░░░▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀░░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
                "░░░░░░░░░░░░░░░░░░░▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
                "░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▀▀░░░░░░░░░░░░░░░░%c wow! %c░░░░░░░░░\n" +
                "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n",

                "background: beige; color: slategray;",
                "color: #E64213;",
                "background: beige; color: slategray;",
                "color: #0BBF0B;",
                "background: beige; color: slategray;",
                "color: #A100FF;",
                "background: beige; color: slategray;",
                "color: #034BF6;",
                "background: beige; color: slategray;",
                "color: #F603D2;",
                "background: beige; color: slategray;"
            );
        };

        console.warn("******************************************");

        console.groupCollapsed(
            "%cBut do you even %cdoge();%c, bro?",
            "color: black;",
            "color: aquamarine; background: slategray; padding: 0.3em 0.5em",
            "color: black;" );

        console.log(" - http://github.com/simeydotme");
        console.log(" - http://twitter.com/simeydotme");

        console.groupEnd();

        console.warn("******************************************");

    }

})(jQuery);
