$(document).ready(function () {
    // Preloader(if the# preloader div exists)
    $(window).on('load', function () {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function () {
                $(this).remove();
            });
        }
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