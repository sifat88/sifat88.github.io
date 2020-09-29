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
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 500,
            autoHeight: true
        });

        var blogPost = $('.post-slider');
        blogPost.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            //responsiveClass: true,
            nav: true,
            navText: ["<i class='icon-angle-left'></i>", "<i class='icon-angle-right'></i>"],
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 500,
            //autoHeight: true
        });

        /*--- conterup -----*/
        $('.counter').counterUp({
            delay: 10,
            time: 1500
        });

        // external js: isotope.pkgd.js


        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows',
            getSortData: {
                name: '.name',
                symbol: '.symbol',
                number: '.number parseInt',
                category: '[data-category]',
                weight: function (itemElem) {
                    var weight = $(itemElem).find('.weight').text();
                    return parseFloat(weight.replace(/[\(\)]/g, ''));
                }
            }
        });

        // filter functions
        var filterFns = {
            // show if number is greater than 50
            numberGreaterThan50: function () {
                var number = $(this).find('.number').text();
                return parseInt(number, 10) > 50;
            },
            // show if name ends with -ium
            ium: function () {
                var name = $(this).find('.name').text();
                return name.match(/ium$/);
            }
        };

        // bind filter button click
        $('#filters').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[filterValue] || filterValue;
            $grid.isotope({
                filter: filterValue
            });
        });
        // change is-checked class on buttons
        $('.button-group').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });
        /*------> imagesLoaded <---------*/

        $('.all-works').imagesLoaded(function () {
            // init Isotope
            var $grid = $('.grid').isotope({
                itemSelector: '.element-item',
                layoutMode: 'fitRows',
                getSortData: {
                    name: '.name',
                    symbol: '.symbol',
                    number: '.number parseInt',
                    category: '[data-category]',
                    weight: function (itemElem) {
                        var weight = $(itemElem).find('.weight').text();
                        return parseFloat(weight.replace(/[\(\)]/g, ''));
                    }
                }
            });
        });

        /*----magnific-popup-----*/
        $('.image-link').magnificPopup({type:'image'});

        /*----Gmaps-----*/
        var map = new GMaps({
            el: '#map',
            lat: -12.043333,
            lng: -77.028333
        });

        
         /*-----------> singlepage nav js <-------------*/
        $('#nav').singlePageNav({
        offset: 50,
        threshold: 120,
        speed: 1000,
        currentClass: 'current',
        easing: 'swing',
        });

    /*--for fixed menu--*/
            
        $(window).on('scroll',function () {
                if ($(window).scrollTop () > 650) {
                    $('#mainav').addClass('navbar-fixed-top');
                } else {
                    $('#mainav').removeClass('navbar-fixed-top');
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
