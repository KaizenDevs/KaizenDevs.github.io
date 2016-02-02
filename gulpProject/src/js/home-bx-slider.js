$(function() {

    // Variables 

    var bxsliderServices = null,
    services = $("#services"),
    windowWidth = $(window).width();

    // Resize Function

    $(window).on("resize", function(){
    windowWidth = $(window).width();
        if(services.length){
            if(windowWidth < 868){
                bxsliderServices.reloadSlider({
                    minSlides: 1,
                    maxSlides: 1
                });
            }

            if(windowWidth > 868){
                bxsliderServices.destroySlider();
                setTimeout(function(){
                $("#services li").removeAttr('style');
                $("#services").removeAttr('style');
                }, 10);
            }
        }
    });



    $('.testimonials-slider').bxSlider({
        minSlides: 1,
        maxSlides: 1
    });

    bxsliderServices = services.bxSlider({
        minSlides: 1,
        maxSlides: 1
    });

    if(windowWidth > 868 && services.length){
        bxsliderServices.destroySlider();
    }

});






