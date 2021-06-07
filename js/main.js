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
            // active homepage
            (this.scrollY > 30 && $(window).width() >= 768) ? $(".homepage").addClass("scroll"): $(".homepage").removeClass("scroll");
            // active & un active logo nav left
            if (this.scrollY > 30) {
                $(".nav-left img:first-child").addClass("un-active"),
                    $(".nav-left img:first-child").removeClass("active"),
                    $(".nav-left img:last-child").addClass("active"),
                    $(".nav-left img:last-child").removeClass("un-active");
            } else {
                $(".nav-left img:first-child").addClass("active"),
                    $(".nav-left img:first-child").removeClass("un-active"),
                    $(".nav-left img:last-child").addClass("un-active"),
                    $(".nav-left img:last-child").removeClass("active");
            }
        }),

        $(".scroll-up-btn").click(function () {
            $("html").animate({
                scrollTop: 0
            }), $("html").css("scrollBehavior", "auto")
        }),

        $(".navbar .menu li a").click(function () {
            $("html").css("scrollBehavior", "smooth"), $(".navbar .menu li a").removeClass("nav-active"), $(this).addClass("nav-active"), $(".navbar .menu").toggleClass("active"), $(".menu-btn i").toggleClass("active")
        }),

        // click btn navbar
        $(".menu-btn").click(function () {
            $(".nav-mid ul").toggleClass("active"), $(".menu-btn i").toggleClass("active")
        })
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
    })
});