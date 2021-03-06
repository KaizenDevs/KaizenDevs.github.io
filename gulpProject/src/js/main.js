$(function() {
    var pull = $('.action_mobile'),
        nav = $('.nav'),
        homeIcon = $('.home-icon'),
        windowWidth = $(window).width(),
        active = 'active',
        featuredWorkitem = ".featured-works .item .image",
        featuredWorkimageBox = ".featured-works .item .image img",
        wrapper = $('.wrapper'),
        contactAction = $("#contact"),
        // contactClose = $(".form-close"),
        check = (".check"),
        checkInput = (".check input"),
        // contactBox = $(".contact"),
        bxsliderServices = null;


   $(pull).on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass(active);
        $(nav).fadeToggle();
        $(wrapper).fadeToggle();
    });

   $('.btn-about-us').on('click', function(e) {
        e.preventDefault();
        $('.box-members').toggleClass('hide-medium');
        $('.collaborators').toggleClass('hide-medium');
        $('.btn-about-us').toggleClass("more less");

    });


   $('.btn-go-to-project-planner').on('click', function(e) {
        e.preventDefault();
        window.location.href = 'project.html';
    });

   $('.btn-go-to-home').on('click', function(e) {
        e.preventDefault();
        window.location.href = 'index.html';
    });
   $('.disable-link').on('click', function(event) { event.preventDefault();});


  $("#services-box").on('click', function(e) {
        console.log($(this).attr('value'));
    });

    $(window).resize(function(){
        windowWidth = $(window).width();
        $(wrapper).show();
        if(windowWidth < 868){
           $(pull).on('click', function(e) {
                e.preventDefault();
                $(wrapper).show();
            });
        }
    });


    $(window).scroll(function() {
        if ($(this).scrollTop()>0 && windowWidth < 868)
        {
            $(homeIcon).fadeIn();
            $('body').addClass("scrolling");
        }
        else if ($(this).scrollTop() === 0 && windowWidth > 868)
        {
            $(homeIcon).fadeIn();
            $('body').removeClass("scrolling");
        }
        else if ($(this).scrollTop()>0 && windowWidth > 868) {
            $('body').addClass("scrolling");
        }
        else
        {
            $(homeIcon).fadeOut();
            $('body').removeClass("scrolling");
        }
    });

    $(check).on('click', function(){
        $(this).toggleClass("active");
    });

    $(window).on("resize", function(){
        windowWidth = $(window).width();
        if(windowWidth > 768 && $(nav).is(':hidden')) {
            $(nav).removeAttr('style');
        };

    });

    $(featuredWorkitem).each(function(){
        var bgImg = $(this).find('img').attr("src");
        $(this).css("background-image", "url('" + bgImg + "')");
        $(this).find('img').remove();
    });


    if(windowWidth > 868){
        $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target
          || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body')
            .animate({scrollTop: targetOffset}, 1000);
           return false;
          }
        }
        });
    }
});

