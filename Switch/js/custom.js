// one page nav

$(document).ready(function() {
	$('#navmenu').onePageNav();
});

/*==for fixed menu==*/
            
            $(window).on('scroll',function () {
                if ($(window).scrollTop () > 550) {
                    $('#top-menu').addClass('menu-bg');
                } else {
                    $('#top-menu').removeClass('menu-bg');
                }
            });

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

// bind sort button click
$('#sorts').on('click', 'button', function () {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({
        sortBy: sortByValue
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


//fow wow js

var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation       
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();

// Back To dowwn
$(document).ready(function () {

    $('button.down').click(function () {
        $("html, body").animate({
            scrollTop: 3200
        }, 600);
        return false;
    });
});

// Back To Top
$(document).ready(function () {
    $('a.top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
