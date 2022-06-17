$(document).ready(function (){
    // Navbar Background Change
    var navbar = $(".navbar");
    $(window).on("scroll", function (){
        if ($(window).scrollTop() >= navbar.height()) {
            if (!navbar.hasClass("scrolled")) {
                navbar.addClass("scrolled");
            }
        } else {
            navbar.removeClass("scrolled");
        }
    });

    //Links
    $(".nav li").on("click", function () {
        $("html, body").animate({
            scrollTop: $("." + $(this).data("link")).offset().top
        }, 600);
    });

    // Tabs Switch
    $(".tabs .tab-switch li").on("click", function (){
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".tabs .tabs-cont > div").hide();
        $($(this).data("content")).fadeIn();
    })
});