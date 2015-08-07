

/* globals jQuery, document */
(function($, undefined) {

    "use strict";

    var $document = $(document);

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
            $codes = $post.find("pre");

        $post.fitVids();
        $titles.titleLinks();
        $codes.addClass("prettyprint");

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
