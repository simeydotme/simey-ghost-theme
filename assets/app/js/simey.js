

/* globals jQuery, document */
(function($, undefined) {

    "use strict";

    var $document = $(document),
        $body = $("body");

    $.fn.titleLinks = function() {

        return $(this).each(function(k, v) {

            var $this = $(v),
                content = $this.html(),
                icons = {},
                link;

            icons.link = "<svg class=\"simicon-link\" role=\"presentation\">" +
                "<use xmlns:xlink=\"http://www.w3.org/1999/xlink\" " +
                "xlink:href=\"/assets/dist/img/svgdefs.svg#simicon-link\"> " +
                "</use></svg>";

            icons.arrow = "<svg class=\"simicon-arrow-right\" role=\"presentation\">" +
                "<use xmlns:xlink=\"http://www.w3.org/1999/xlink\" " +
                "xlink:href=\"/assets/dist/img/svgdefs.svg#simicon-arrow-right\"> " +
                "</use></svg>";

            link = "<a href=\"#" + $this.attr("id") + "\">" + content + "</a>";

            $this.html( icons.link + icons.arrow + link );

        });

    };





    $document.ready(function() {




        var $post = $(".blog-post__content"),
            $titles = $post.find("h1,h2,h3,h4,h5"),
            $codes = $post.find("pre"),
            $navWrapper = $(".nav-wrapper"),
            $navButton = $(".nav__expand"),

            vibration = typeof navigator.vibrate !== "undefined",

            guy, 
            toggle = true;

        $post.fitVids();
        $titles.titleLinks();
        $codes.addClass("prettyprint");


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




        $navButton.on("click.nav", function( e ) {

            $navButton
                .add( $navWrapper )
                .toggleClass("isClosed");

            $body
                .toggleClass("navIsOpen");

            if ( vibration ) {

                if ( $navButton.hasClass("isClosed") ) {

                    navigator.vibrate([100, 100, 200]);

                } else {

                    navigator.vibrate( 200 );

                }

            }

            e.preventDefault();

        });

        if ( typeof window.matchMedia !== "undefined" ) {

            var mq = window.matchMedia("(min-width: 46rem)"),
                testmq;

            mq.onchange = testmq = function() {

                if ( mq.matches ) {

                    $navButton
                        .add( $navWrapper )
                        .addClass("isClosed");

                    $body
                        .removeClass("navIsOpen");

                }

            };


            testmq();

        }




    });























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
