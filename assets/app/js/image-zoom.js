

/* globals jQuery, document */
(function($, undefined) {

    "use strict";

    var $document = $(document),
        $body = $("body"),
        imgzoom = {};

    $document.ready(function() {

        var mq = window.matchMedia("(min-width: 36rem)"),
            testmq;

        mq.onchange = testmq = function() {

            if ( mq.matches ) {

                imgzoom.init();

            } else {

                imgzoom.destroy();

            }

        };

        imgzoom.init = function() {

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

                        var $zoom = $(".zoom-photo").addClass("zoom-photo--zoomed");

                        $body.one("click.zoomPhoto", function() {

                            $zoom.removeClass("zoom-photo--zoomed");

                            setTimeout(function() {

                                $(".zoom-photo").remove();

                            }, 300 );

                        });

                    }, 50 );

                });

        };

        imgzoom.destroy = function() {

            $(".post-template.tag-photos img")
                .removeClass("zoomable")
                .off(".zoomPhoto");

            $body.off(".zoomPhoto");

        };


        testmq();

    });

})(jQuery);
