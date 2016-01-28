$(function() {

	$(window).on("resize", function(){
        windowWidth = $(window).width();


        if(windowWidth < 868){
            bxsliderServices.reloadSlider({
                minSlides: 1,
                maxSlides: 1
            });
        }

        if(windowWidth > 868){
            bxsliderServices.destroySlider();
        }

        if(windowWidth > 868){

            setTimeout(function(){
                $("#services li").removeAttr('style');
                $("#services").removeAttr('style');
            }, 10);
        }
        if(windowWidth > 868){
        	bxsliderServices.destroySlider();
    		}


    });

	$('.bx-slider').bxSlider({
        minSlides: 1,
        maxSlides: 1
    });

    bxsliderServices = $('#services').bxSlider({
        minSlides: 1,
        maxSlides: 1
    });
});





$('.works-slide').bxSlider({
    controls: true,
    minSlides: 1,
    maxSlides: 1
});
