

//loader 

$(window).on("load", function(){
    $(".loader").hide(500);
})

$(document).ready(function(){

    var typed = new Typed(".typed", {
        strings: [`My name is Nemanja, or Nemke in short, I'm a Frontend Web Developer, Desigh Enthusiast and a Fullstack Wannabe`],
        typeSpeed: 20,
        loop: false,
        startDelay: 500,
        showCursor: false
    });

    //skills -owl carousel
    

    $('.owl-carousel').owlCarousel({
        nav:false,
        loop:true,
        responsive:{
            0:{
                items:2
            },
            480:{
                items:8
            },
            768:{
                items:8
            },
            938:{
                items:8
            }
        }
    });           



    //sticky nav

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        var body = $("body");
        if ($(window).scrollTop() >= navTop ) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        } 
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav")
        }
    }


});

    
