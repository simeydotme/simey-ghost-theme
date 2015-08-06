

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

        var $post = $(".blog-post__content");
        $post.fitVids();


        $post.find("h1,h2,h3,h4,h5").titleLinks();






    });























    if ( window.console && console.warn && console.info && console.error ) {

        console.warn(
"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
"░░░░░░░░░░░░░░░░░░░░░░▄░░░░░░░░░░░░░░▄░░░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
"░░░░░░░░░░░░░░░░░░░░░▌▒█░░░░░░░░░░░▄▀▒▌░░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
"░░░░░ such secret ░░░▌▒▒█░░░░░░░░▄▀▒▒▒▐░░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
"░░░░░░░░░░░░░░░░░░░░▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐░░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
"░░░░░░░░░░░░░░░░░░▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐░░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
"░░░░░░░░░░░░░░░░▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌░░░░░░░ very javascript ░░\n" +
"░░░░░░░░░░░░░░░▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
"░░░░░░░░░░░░░░░▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
"░░░░░░░░░░░░░░▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌░░░░░░░░░░░░░░░░░░░░░░░░\n" +
"░░░░░░░░░░░░░░▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌░░░░░░░░░░░░░░░░░░░░░░░░\n" +
"░░░░░░░░░░░░░▀▒▀▐▄█▄█▌▄░▀▒▒░░░░░░░░░░▒▒▒▐░░░░░░░░░░░░░░░░░░░░░░░░\n" +
"░░░░░░░░░░░░░▐▒▒▐▀▐▀▒░▄▄▒▄▒▒▒▒▒▒░▒░▒░▒▒▒▒▌░░░░░░░░░░░░░░░░░░░░░░░\n" +
"░░░░░░░░░░░░░▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒▒▒░▒░▒░▒▒▐░░░░░░░░░ wow! ░░░░░░░░░\n" +
"░░░░░░░░░░░░░░▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒░▒░▒░▒░▒▒▒▌░░░░░░░░░░░░░░░░░░░░░░░░\n" +
"░░░░░░░░░░░░░░▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▄▒▒▐░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
"░░░░░░░░░░░░░░░▀▄▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▄▒▒▒▒▌░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
"░░░ do hide ░░░░▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀░░░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
"░░░░░░░░░░░░░░░░░░░▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
"░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▀▀░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n");


        console.info("http://github.com/simeydotme");
        console.info("http://twitter.com/simeydotme");

    }

})(jQuery);
