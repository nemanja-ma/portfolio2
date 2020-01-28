$(document).ready(function(){

    var typed = new Typed(".typed", {
        strings: ["Frontend Web Developer.", "Design Enthusiast.", "Fullstack wannabe."],
        typeSpeed: 30,
        loop: true,
        startDelay: 500,
        showCursor: false
    });

    
    
    var skillsTopOffset = $('.skillsSection').offset().top;
    $(window).scroll(function(){
        if (window.pageYOffset > skillsTopOffset - $(window).height()+400) {
            
            $('.owl-carousel').owlCarousel({
                loop:true,
                margin: 50,
                nav:true,
                responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    938:{
                        items:4
                    }
                }
            })

            jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 3000

            $('.chart').easyPieChart({
            animate: ({ duration: 2000, enabled: true }),
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent))
            }
            });
        }
    });


});

    

