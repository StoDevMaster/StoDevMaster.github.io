function gnbSet(i){
	$("#header_bottom").find("li").eq(i).addClass("on");
};
function footerNavSearch(){
	$("#wrap").removeClass("my_on on").animate({"left":0},"normal",function(){
		$("#category").removeClass("on");
		$("#my").removeClass("my_on");
		$("#h_search")[0].focus;
		//if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {           
			window.scrollTo(0,0)
		//}else{
		//	$(window).scrollTop(0);
		//}
		
	});
};
function footerNavSearchClose(){
	$("#searchTxt").find(".search_close").trigger("click");
};
$(function () {
    var $htmlObj = $("html, body");
    var $wrap = $("#wrap");
    var $category = $("#category");
    var $my = $("#my");
    $(window).resize(function () {
        $category.find("#category_inner").css({ "height": $(window).outerHeight() - $("#category").find("h2").outerHeight() });
        $my.find("#my_inner").css({ "height": $(window).outerHeight() - $("#my").find(".ti").outerHeight() });
    }).trigger("resize");
    $("#category_btn").click(function () {
        footerNavSearchClose();
        if ($wrap.is(".on")) {
            $htmlObj.css({ "overflow": "visible" });
            $wrap.removeClass("on").stop().animate({ "left": 0 }, "normal", function () {
                $category.removeClass("on");
                $("#categoryBg").remove();
            });
        } else if ($wrap.is(".my_on")) {
            $htmlObj.css({ "overflow": "visible" });
            $wrap.removeClass("my_on").stop().animate({ "left": 0 }, "normal", function () {
                $my.removeClass("my_on");
                $("#category_btn").trigger("click");
            });
        } else {
            $("#wrap").append("<div id='categoryBg'></div>");
            $my.removeClass("my_on");
            $("html, body").css({ "overflow": "hidden" });
            $category.addClass("on");
            $wrap.addClass("on");
        };
        return false;
    });

    $category.find("#category_inner").children("ul").children("li").children("a").click(function () {
        var _parent = $(this).parent("li");
        if (!_parent.is(".on")) {
            _parent.addClass("on").siblings("li").removeClass("on");
        } else {
            _parent.removeClass("on");
        };
        return false;
    });

    $category.find("#close").click(function () {
        if ($wrap.is(".on")) {
            $("#category_btn").trigger("click");
        };
        return false;
    });

    $("#my_btn").click(function () {
        
        footerNavSearchClose();
        if($wrap.is(".my_on")){
        $htmlObj.css({"overflow":"visible"});
        $wrap.removeClass("my_on").stop().animate({"left":0},"normal",function(){
        $my.removeClass("my_on");
        });
        }else if($wrap.is(".on")){
        $("#categoryBg").remove();
        $wrap.removeClass("on").stop().animate({"left":0},"normal",function(){
        $category.removeClass("on");
        $("#my_btn").trigger("click");
        });
        }else{
        $category.removeClass("on");
        $("html, body").css({"overflow":"hidden"});
        $my.addClass("my_on");
        $wrap.addClass("my_on").stop().animate({"left":"-78.125%"},"normal");
        };
        return false;
        
    });

    $my.find("#myclose").click(function () {
        if ($wrap.is(".my_on")) {
            $("#my_btn").trigger("click");
        };
        return false;
    });

    /* 160501 추가 */
    $(".btn_back button").on("click", function () {
        footerNavSearchClose();
    });

    /*
    $("#category_back").click(function(){
    if($wrap.is(".on")){
    $("#category_btn").trigger("click");
    };
    if($wrap.is(".my_on")){
    $("#my_btn").trigger("click");
    };
    });
    */
    $(".back_blank").click(function () {
        if ($wrap.is(".on")) {
            $("#category_btn").trigger("click");
        };
        if ($wrap.is(".my_on")) {
            $("#my_btn").trigger("click");
        };
        return false;
    });

    /* 2016-05-16 추가 */
    $("#searchTxt .search_tab button").on("click", function () {
        if ($(this).hasClass("on")) return;

        var idx = $(this).index();
        var type = (idx == 0) ? "lately" : "popular";

        $(this).siblings().removeClass("on");
        $(this).addClass("on");

        $("#searchTxt .search_wrap").attr("class", "search_wrap " + type);
    });
});

$(window).load(function(){
	
	$("#recentlyGoods").owlCarousel({
		navigation:false,
		// paginationSpeed : 1000,
		// goToFirstSpeed : 2000,
		singleItem : true
	});

	/* 160501 추가 상단 메뉴 고정 */
	try {
		var $targetTop = $("#header .header_bottom").offset().top;
		$(window).on("scroll", function(){
			if ($(window).scrollTop() > $targetTop){
				$("#header .header_bottom").addClass("fixed");
			} else {
				$("#header .header_bottom").removeClass("fixed");
			}
		});
	} catch(e) {}

});