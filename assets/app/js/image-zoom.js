

/* globals jQuery, document */
(function($, undefined) {

    "use strict";

    var $document = $(document),
        $body = $("body"),
        imgzoom = {
            large: {},
            small: {}
        };

    $document.ready(function() {

        var mq = window.matchMedia("(min-width: 36rem)"),
            testmq;

        mq.onchange = testmq = function() {

            if ( mq.matches ) {

                imgzoom.large.init();
                imgzoom.small.destroy();

            } else {

                imgzoom.large.destroy();
                imgzoom.small.init();

            }

        };

        imgzoom.large.init = function() {

            $(".post-template.tag-photos img")

                .addClass("zoomable")

                .on("click.zoomPhoto", function() {

                    var $this = $(this);

                    $body.off(".zoomPhoto");
                    $(".zoom-photo").remove();

                    $this
                        .clone()
                        .appendTo("body")
                        .wrap("<div class='zoom-photo' />");

                    setTimeout(function() {

                        var text = "View full size image",
                            src = $this.attr("src"),

                            $zoom = $(".zoom-photo")
                                        .addClass("zoom-photo--zoomed")
                                        .append("<a href=\"" + src +
                                            "\" target=\"_blank\" class=\"zoom-fullsize\">" +
                                            text + "</a>");

                        $body.one("click.zoomPhoto", function() {

                            $zoom.removeClass("zoom-photo--zoomed");

                            setTimeout(function() {

                                $(".zoom-photo").remove();

                            }, 300 );

                        });

                    }, 50 );

                });

        };

        imgzoom.large.destroy = function() {

            $(".post-template.tag-photos img")

                .removeClass("zoomable")
                .off(".zoomPhoto");

            $body.off(".zoomPhoto");

        };

        imgzoom.small.init = function() {

            $(".post-template.tag-photos img")

                .each( function() {

                    var $this = $(this);

                    $this.wrap("<a href=\"" + $(this).attr("src") + "\" target=\"blank\" class=\"zoom-link\"></a>");

                });

        };

        imgzoom.small.destroy = function() {

            $(".zoom-link").children().unwrap();

        };


        testmq();

    });

})(jQuery);
