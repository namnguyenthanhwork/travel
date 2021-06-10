$(document).ready(function () {
    // Preloader(if the# preloader div exists)
    $(window).on('load', function () {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function () {
                $(this).remove();
            });
        }
        // places isotope and filter 
        var portfolioIsotope = $('.place-list').isotope({
            itemSelector: '.place-items_filter'
        });
        // // filter functions
        var filterFns = {
            numberGreaterThan500: function () {
                var number = $(this).find('.price').text();
                return parseInt(number, 10) <= 500;
            },
            numberGreaterThan1000: function () {
                var number = $(this).find('.price').text();
                return parseInt(number, 10) <= 1000;
            },
            numberGreaterThan1500: function () {
                var number = $(this).find('.price').text();
                return parseInt(number, 10) <= 1500;
            },
            numberGreaterThan2000: function () {
                var number = $(this).find('.price').text();
                return parseInt(number, 10) <= 2000;
            },

        };
        $('#places-filters').on('change', function () {
            // get filter value from option value
            var filterValue = this.value;
            // use filterFn if matches value
            filterValue = filterFns[filterValue] || filterValue;
            portfolioIsotope.isotope({
                filter: filterValue
            });
        });

    });
    // scroll back
    $(window).scroll(function () {
            // active header
            this.scrollY > 30 ? $(".header").addClass("sticky") : $(".header").removeClass("sticky");
            // active scroll
            this.scrollY > 30 ? $(".scroll-up-btn").addClass("show") : $(".scroll-up-btn").removeClass("show");
        }),

        $(".scroll-up-btn").click(function () {
            $("html").animate({
                scrollTop: 0,
            }, 1000), $("html").css("scrollBehavior", "auto")
        }),

        // click btn navbar
        $(".menu-btn").click(function () {
            $(".nav-mid ul").toggleClass("active"), $(".menu-btn i").toggleClass("active")
        })

    // Initiate the wowjs animation library
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 80, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();

    // carousel
    $(".banner-list").owlCarousel({
            autoplayTimeout: 3e3,
            autoplaySpeed: 1500,
            margin: 20,
            loop: !0,
            nav: true,
            autoplay: true,
            dots: false,
            loop: true,
            items: 1
        }),
        $(" .testimonials-carousel").owlCarousel({
            autoplayTimeout: 3e3,
            autoplaySpeed: 1500,
            margin: 20,
            loop: !0,
            nav: false,
            autoplay: true,
            dots: true,
            loop: true,
            items: 1
        })
});