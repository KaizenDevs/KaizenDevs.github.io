$(function() {

    $('.testimonials-slider').bxSlider({
        minSlides: 1,
        maxSlides: 1
    });

    checkBreakPointVsWindow = function (breakPoint){
        this.windowWidth = $(window).width();
        this.breakPoint = breakPoint;
        if ( this.breakPoint > this.windowWidth ){
            return 'greater';
        } else if ( this.breakPoint < this.windowWidth ) {
            return 'lesser';
        } else if ( this.breakPoint === this.windowWidth ) {
            return 'equal';
        };
    };

    breakPointExecuter = function(){
        if(checkBreakPointVsWindow(868) == 'greater' ||  checkBreakPointVsWindow(868) == 'equal'){
            slider = $('#services').bxSlider({
                minSlides: 1,
                maxSlides: 1
            });
        }
        if(checkBreakPointVsWindow(868) == 'lesser'){
            slider.destroySlider();
        }
    }

    var resizeTimer;

    $(window).on('resize', function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Run code here, resizing has "stopped"
            var breakPointer = new checkBreakPointVsWindow(868);
            console.log(breakPointer.windowWidth);
            breakPointExecuter();

        }, 250);

  });

 breakPointExecuter();

});
