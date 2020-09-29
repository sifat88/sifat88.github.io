(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        // Hero-Slider
        var heroOwl = $('.hero-slider');
        heroOwl.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartspeed: 500,
            autoHeight: true,
            animateOut: 'slideOutRight',
            animateIn: 'slideInLeft'
        });
        
        /*-----------> Countdown <-------------*/

        $("#site-countdown").countdown("2018/12/01", function (cn) {
            $(this).html(cn.strftime("<div class='single-count'><span>%D</span> Days </div>" + "<div class='single-count'><span>%H</span> Hours </div>" + "<div class='single-count'><span>%M</span> Minutes </div>" + "<div class='single-count'><span>%S</span> Seconds </div>"));
        });
        
        
        // Testimonial-Slider
        var testOwl = $('.testimonial-carousel');
        testOwl.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            dots: true,
            //autoplay: true,
            autoplayTimeout: 3000,
            smartspeed: 500,
            autoHeight: true,
            animateOut: 'slideOutRight',
            animateIn: 'slideInLeft'
        });

    });
})(jQuery);