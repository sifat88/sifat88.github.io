(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        /*--- owl carousel -----*/
        var owl = $('.site-main-slider');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 500,
            autoHeight: true
        });

        var owl = $('.showcase-carousel');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 500,
            autoHeight: true
        });

        /*--for fixed menu--*/

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 650) {
                $('.nav-area').addClass('navbar-fixed-top');
            } else {
                $('.nav-area').removeClass('navbar-fixed-top');
            }
        });




    });

    // preloader

    $(window).on('load', function () { // makes sure the whole site is loaded

        $('.spinner').fadeOut(); // will first fade out the loading animation

        $('#preldr').delay(200).fadeOut('slow').remove(); // will fade out the white DIV that covers the website.

    });

})(jQuery);
