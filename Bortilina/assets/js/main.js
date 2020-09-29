(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        /*--- owl carousel -----*/
        var mainOwl = $('.main-slider');
        mainOwl.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            navText: ["<i class='icon-angle-left'></i>", "<i class='icon-angle-right'></i>"],
            dots: false,
            //autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 500,
            autoHeight: true
        });
        
        var brandOwl = $('.brand-carousel');
        brandOwl.owlCarousel({
            items: 5,
            loop: true,
            margin: 0,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4
                }
            },
            nav: true,
            navText: ["<i class='icon-angle-left'></i>", "<i class='icon-angle-right'></i>"],
            dots: false,
            //autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 500,
            autoHeight: true
        });







    });

    // preloader

    $(window).on('load', function () { // makes sure the whole site is loaded

        $('.spinner').fadeOut(); // will first fade out the loading animation

        $('#preldr').delay(200).fadeOut('slow').remove(); // will fade out the white DIV that covers the website.

    });

})(jQuery);
