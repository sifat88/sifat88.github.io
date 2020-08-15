/*
* ----------------------------------------------------------------------------------------
Author         : LionThemer
Template Name  : GLOBE - Coming soon template
Version        : 1.0                                          
* ----------------------------------------------------------------------------------------
*/

(function ($) {
    'use strict';

    jQuery(document).ready(function () {
        /*====================================================
           Place any jQuery/helper plugins in here.
        =====================================================*/

        /*-----------> Countdown <-------------*/

        $("#site-counter").countdown("2019/01/01", function (cn) {
            $(this).html(cn.strftime("<div class='single-count'><span>%D</span> days </div>" + "<div class='single-count'><span>%H</span> hour </div>" + "<div class='single-count'><span>%M</span> min </div>" + "<div class='single-count'><span>%S</span> sec </div>"));
        });

        /*-----------> Drawer js <-------------*/

        $('.drawer').drawer({
            class: {
                nav: 'drawer-nav',
                    toggle: 'drawer-toggle',
                    overlay: 'drawer-overlay',
                    open: 'drawer-open',
                    close: 'drawer-close',
                    dropdown: 'drawer-dropdown'
            },
            iscroll: {
                mouseWheel: true,
                preventDefault: false
            },
            showOverlay: true
        });

        /*-----------> wow js <-------------*/

        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
            callback: function (box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null, // optional scroll container selector, otherwise use window,
            resetAnimation: true, // reset animation on end (default is true)
        });
        wow.init();

    });

    // preloader

    $(window).on('load', function () { // makes sure the whole site is loaded

        $('.spinner').fadeOut(); // will first fade out the loading animation

        $('#preldr').delay(200).fadeOut('slow').remove(); // will fade out the white DIV that covers the website.

    });

})(jQuery);
