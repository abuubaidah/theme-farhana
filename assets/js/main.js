//filterizr enable
jQuery(window).load(function() {

     var $filterizr = $('.filterizr__elements');
     if($filterizr.length) {
      var $filterizrControls = $('.filterizr__controls');
      $filterizr.filterizr();
      $filterizrControls.children('li').click(function() {
        $filterizrControls.find('li.active').removeClass('active');
        $(this).addClass('active');
      });
     }

}); 

    
    $(function(){
      $('.nav-btn').click(function(){
        $('.main-menu').slideToggle();
      });
    });

    //======================================
    //============= Preloder ===============
    //======================================
    $(window).on("load", function() {
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);
    });


	  //======================================
    //=========== Fixed navbar =============
    //======================================
    $(window).on('scroll', function(){
        var headerSection = $('.header-area');
        var mainMenuTop = $('.header-area');

        if ($(window).scrollTop() > 100) {
            headerSection.addClass('fixed-navbar');
        } else {
            headerSection.removeClass('fixed-navbar');
        }
        
    });


    //======================================
    //======== Testimonial slider ==========
    //======================================
    $(function(){
    	
      var testimonialCarousel = $('.review-carousel');
          testimonialCarousel.owlCarousel({
           loop:true,
          dots:true,
          dotData:true,
          startPosition:2,
          nav:true,
          item: 1,
          navText: ['<i class="icofont-arrow-left"></i>','<i class="icofont-arrow-right"></i>'],
          autoplay:true,
          autoplayTimeout:3000,
          autoplayHoverPause:true,
          responsive : {
            0 : {
                items: 1
            },
            768 : {
                items: 1
            },
            960 : {
                items: 1
            },
            1200 : {
                items: 1
            },
            1920 : {
                items: 1
            }
          }
      }); 
      
    });


   	//======================================
    //========== Smooth scroll =============
    //======================================
    $('.main-menu li a').on('click', function (e) {

        var anchor = $(this).attr('href');
        var hash = anchor.slice(0,1);
  
        if ('#' == hash) {
            e.preventDefault();
            var top = $(anchor).offset().top;
            $(this).parent().addClass('active').siblings().removeClass('active');
            $('html, body').animate({
                scrollTop: $(anchor).offset().top
            }, 1000);
        }
  
    });