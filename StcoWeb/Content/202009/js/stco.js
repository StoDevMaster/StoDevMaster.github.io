
$(function(){ 


    htmlAdd = {
        header : function(){
            aHtml = Array('');
            aHtml.push('<button class="btn_top"></button>')
        }
    }
    htmlAdd.header();
    $('body').append(aHtml.join(''))

    var url = window.location.href;
    if(url.indexOf("/login/nindex") <= 0 && url.indexOf("/login/nindex") <= 0) {
        $('.top_banner').slick({
                dots: false,
                arrows: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                swipeToSlide: true,
                autoplaySpeed: 3000,
                fade: true
         })


        $('.main_slider').slick({
            dots: true,
            arrows:true,
            infinite:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            swipeToSlide: true ,
            autoplaySpeed: 3000,
        })
        $('.exhibition_slide').slick({
            dots: true,
            arrows:true,
            infinite:true,
            slidesToShow: 4,
            slidesToScroll: 2,
            autoplay: true,
            infinite:true,
            swipeToSlide: true ,
            autoplaySpeed: 4000
        })

        $('.coordi_slider').slick({
            dots: true,
            arrows:true,
            infinite:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            swipeToSlide: true
        })

        $('.best_item_contents_wrap ul').slick({
            dots: false,
            arrows:true,
            infinite:true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            swipeToSlide: true
        })

        $('.best_item_title').slick({
            slidesToShow: 5,
            slidesToScroll: 1
        })

        $('.category_slide').slick({
            dots: true,
            arrows:true,
            slidesToShow: 1,
            slidesToScroll: 1
        })
    }


    $('.header .seach_box_close').click(function(){
        $('body').removeClass('seach_on')
        $('.dim').fadeOut('fast')
    })
    $('.header .menu').click(function(){
		if($("body").hasClass("seach_on"))
		{
			$('.dim').fadeOut('fast')
		}
        $('.all_menu_top').toggleClass('on')
        $('.all_menu_top2').removeClass('on')

        var menuDisplay = $('.all_menu_top').hasClass('on');
        if(menuDisplay){
            $('.dim').fadeIn('fast');
        }else{
             $('.dim').fadeOut('fast');
        }

        $('body').removeClass('seach_on')
        $(".subMenu").slideUp("fast");

        $('.header').css('height', '87px');
    })

    /* 202403 add/edit */
    

    $('.seach_box .close_seach').click(function(){
        $('body').toggleClass('seach_on')
        $('.dim').fadeOut('fast')
    });

    // 210421 박진웅 브랜드관 메뉴 헤드 추가 //

   $('.header .menu2').click(function(){
		if($("body").hasClass("seach_on"))
		{
			$('.dim').fadeOut('fast')
		}
        $('.all_menu_top2').toggleClass('on')
        $('.all_menu_top').removeClass('on')
        
        var menuDisplay = $('.all_menu_top2').hasClass('on');

        if(menuDisplay){
            $('.dim').fadeIn('fast');
        }else{
             $('.dim').fadeOut('fast');
        }
        
        $('body').removeClass('seach_on')

    })



    $('.all_menu_top2').on('mouseleave',function(){
        $('.all_menu_top').removeClass('on')
        $('.all_menu_top2').removeClass('on')
        $('.dim').fadeOut('fast')
    })

    /* 202403 add/edit */
    $('.dim').on('click',function(){
        $('.dim').fadeOut('fast')
        $('.all_menu_top , .all_menu_top2, .seach_box').removeClass('on')
        $('body').removeClass('seach_on')
        $('.subMenu').slideUp('fast')
    })


    $('.allmenu_flex > li dl dt a').click(function(){
        $(this).parents('li').addClass('on').siblings().removeClass('on')
    });

    $('.btn_top').click(function(){
        $("html,body").stop().animate({
            scrollTop: 0
        })
    })




    function effect_text(){
        $('.main_slider_contents h3 em').each(function(){
            var e= $(this),
                a=e.data("start-delay");
                c=e.data("data-delay");
            setTimeout(function(){e.textillate({
                initialDelay:.5,
                delay:c,
                minDisplayTime:a,
                in:{
                    effect:"fadeIn",
                    delayScale:1
                    }
            })},a)
        })

        $('.main_slider_contents p').each(function(){
            var e= $(this),
                a=e.data("start-delay");
            setTimeout(function(){e.textillate({
                initialDelay:100,
                minDisplayTime:a,
                in:{
                    effect:"fadeIn",
                    delayScale:1
                    }
            })},a)
        })
    }
    effect_text();

    function effect_start(){
        $(".textillate").each(function(){
            $(".textillate span span").css({visible:"hidden",opacity:0})
            var e= $(this),a=e.data("start-delay");
            e.textillate("stop")
            setTimeout(function(){e.textillate("in")},a)
        })
    }
    $('.main_slider').on('swipe', function(event, slick, direction){
        $(".textillate span span").css({visible:"hidden",opacity:0})
       effect_start();
    });
    $('.main_slider .slick-arrow').on('click', function(){
        $(".textillate span span").css({visible:"hidden",opacity:0})
        effect_start();
    });

});


function setStepBar(idx, total)
{
	$(window).scrollTop(0);
	if(idx/total == 1)
	{
		$(".step_bar .step_val").addClass("full");
	}
	else
	{
		$(".step_bar .step_val").removeClass("full");
	}
	$(".step_bar .step_val").width(idx/total * 100 + "%");
	$(".step_bar .txt_val").text("STEP 0"+idx);

	$(".form_in_sec").hide();
	$(".form_in_sec.step0"+idx).show();
}