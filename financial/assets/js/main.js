(function ($) {
    'use strict';

    jQuery(document).ready(function () {
    	/*--- owl carousel -----*/
        var owl = $('.welcome-slider');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            dots: true,
            //autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 500,
            autoHeight: true
        });

    /*-----------> singlepage nav js <-------------*/
        $('#nav').singlePageNav({
        offset: 70,
        threshold: 120,
        speed: 1000,
        currentClass: 'current',
        easing: 'swing',
        });

    /*--for fixed menu--*/
            
        $(window).on('scroll',function () {
                if ($(window).scrollTop () > 550) {
                    $('#mainav').addClass('menu-bg');
                } else {
                    $('#mainav').removeClass('menu-bg');
                }
            });
        
        // menu-collapse
        $(".navbar-nav li a").on("click", function (event) {
            $(".navbar-collapse").collapse('hide');
        });    





    });

    // preloader

    $(window).on('load', function () { // makes sure the whole site is loaded

        $('.spinner').fadeOut(); // will first fade out the loading animation

        $('#preldr').delay(200).fadeOut('slow').remove(); // will fade out the white DIV that covers the website.

    });

})(jQuery);
