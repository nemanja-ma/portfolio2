$(document).ready(function(){

    var typed = new Typed(".typed", {
        strings: ["Frontend Web Developer.", "Design Enthusiast.", "Fullstack wannabe."],
        typeSpeed: 30,
        loop: true,
        startDelay: 500,
        showCursor: false
    });

    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 3000

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    
});

    

