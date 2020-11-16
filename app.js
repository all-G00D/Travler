$(function () {

    var header_new = $("#header_new"),
        screenH = $("#screen").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= screenH) {
            header_new.addClass("fixed");
        } else {
            header_new.removeClass("fixed");
        }
    }


    /* Menu Nav Toggle */
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /* Menu Nav Toggle New */
    $("#nav_toggle_new").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav_new").toggleClass("active");
    });




    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });


    /* Nav NEW on scroll */
    $(window).on("scroll", function (event) {
        event.preventDefault();

        $("#nav_new").removeClass("active");
        $("#nav_toggle_new").removeClass("active");
    });



    /* Slider */
    $("#team_block").slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDots: true,
        draggable: true,
        swipe: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 511,
                settings: {
                    slidesToShow: 2
                }
            }
                    ]
    });

});
