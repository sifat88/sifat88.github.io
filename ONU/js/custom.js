            
            /*==for fixed menu==*/
            
            $(window).on('scroll',function () {
                if ($(window).scrollTop () > 550) {
                    $('#top-menu').addClass('menu-bg');
                } else {
                    $('#top-menu').removeClass('menu-bg');
                }
            });

            /*==for scroll up button==*/
            
            $(window).scroll(function () {
                if ($(this).scrollTop() > 400) {
                    $('.scroll-icon').fadeIn();
                } else {
                   $('.scroll-icon').fadeOut(); 
                }   
            });
            
            $('.scroll-icon').click(function () {
                $("html,body").animate({
                    scrollTop:0
                }, 800);
                return false;
            });
