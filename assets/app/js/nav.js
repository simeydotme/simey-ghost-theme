

/* globals jQuery, document */
(function($, undefined) {

    "use strict";

    var $document = $(document),
        $body = $("body");

    $document.ready(function() {


        var $navWrapper = $(".nav-wrapper"),
            $navButton = $(".nav__expand"),

            hasVibration = typeof navigator.vibrate !== "undefined",
            hasHistory = (typeof window.history !== "undefined" && 
                typeof window.onpopstate !== "undefined" ),
            nav = {};


        nav.open = function() {

            $navButton
                .add( $navWrapper )
                .addClass("isOpen");

            $body
                .addClass("navIsOpen");

            if ( hasVibration ) {

                navigator.vibrate([50, 50, 150]);

            }

            if ( hasHistory && (
                history.state === null ||
                history.state.menu === "closed" )) {

                    window.history.pushState({ menu: "open" }, "open menu" );

            }

        };
        
        nav.close = function() {

            $navButton
                .add( $navWrapper )
                .removeClass("isOpen");

            $body
                .removeClass("navIsOpen");

            if ( hasVibration ) {

                navigator.vibrate( 100 );

            }

            if ( hasHistory && (
                history.state !== null &&
                history.state.menu === "open" )) {

                    window.history.go(-1);

            }

        };

        nav.toggle = function() {

            if ( $body.hasClass("navIsOpen") ) {

                nav.close();

            } else {

                nav.open();

            }

        };


        $navButton.on("click.nav", function( e ) {

            nav.toggle();
            e.preventDefault();

        });

        if ( typeof window.matchMedia !== "undefined" ) {

            var mq = window.matchMedia("(min-width: 46rem)"),
                testmq;

            mq.onchange = testmq = function() {

                if ( mq.matches ) {

                    nav.close();

                }

            };

            testmq();

        }

        if ( hasHistory ) {

            if ( history.state === null || 
                typeof history.state.menu === "undefined" ) {

                history.replaceState({ menu: "closed" }, "close menu" );

            }

            if ( history.state !== null &&
                typeof history.state.menu !== "undefined" &&
                history.state.menu === "open" ) {

                nav.open();

            }

            window.onpopstate = function( e ) {

                if ( e.state !== null ) {

                    if ( typeof e.state.menu !== "undefined" ) {

                        if ( e.state.menu === "closed" ) {

                            nav.close();

                        } else if ( e.state.menu === "open" ) {

                            nav.open();

                        }

                    }

                }

            };

        }




    });


})(jQuery);
