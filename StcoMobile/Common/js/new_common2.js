var SizeViewSecond = 10;
var timerchecker = null;

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

//여기 여기여기 사이즈 append하는부분


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

	//2018.07.30
	$(".my_menu_btn a").click(function(){
		
		$(this).parent().next(".my_menu").slideToggle(100);
		$(this).toggleClass("on");
	});

	//checkbox all
	$("#zm_all01").change(function(){
		
		if ($("#zm_all01").is(':checked'))
		{
			$("input[name='zm_ck01']").prop("checked",true);
		}
		else
		{
			$("input[name='zm_ck01']").prop("checked",false);
		}
	});

	$("#zm_all02").change(function(){
		
		if ($("#zm_all02").is(':checked'))
		{
			$("input[name='zm_ck02']").prop("checked",true);
		}
		else
		{
			$("input[name='zm_ck02']").prop("checked",false);
		}
	});

	$("#zm_all03").change(function(){
		
		if ($("#zm_all03").is(':checked'))
		{
			$("input[name='zm_ck03']").prop("checked",true);
		}
		else
		{
			$("input[name='zm_ck03']").prop("checked",false);
		}
	});

	//help
	//$(".th_help").mouseenter(function(){
	//	$(".help_txt_box").hide();
	//	$(this).next(".help_txt_box").show();
	//});

	//$(".sp_opt_box .ico_help").click(function(){
	//	$(".help_txt_box").hide();
	//	$(this).next(".help_txt_box").show();
	//});
	
	//date
	

	//2018.07.30 end

});
//select
function sel_show(e){
	$(e).toggleClass("on");
	$(e).next(".sel_list").slideToggle(100);
}
function sel_val(e){
	//alert($(e).text());
	$(".sel_change").html($(e).text());
	$(".sel_list").slideUp(100);
	$(".sel_change").toggleClass("on");
}
//help box close
function help_close(){
	$(".help_txt_box").hide();
}

function anShow(e){
	
	$(e).parent().next(".an_cont").slideToggle(100);
	$(e).toggleClass("on");
}

$(window).load(function () {

    $("#recentlyGoods").owlCarousel({
        navigation: false,
        // paginationSpeed : 1000,
        // goToFirstSpeed : 2000,
        singleItem: true
    });

    /* 160501 추가 상단 메뉴 고정 */
    try {
        var $targetTop = $("#header .header_bottom").offset().top;
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > $targetTop) {
                $("#header .header_bottom").addClass("fixed");
            } else {
                $("#header .header_bottom").removeClass("fixed");
            }
        });
    } catch (e) { }

    

});

//카트등록폼생성
function createDeliveryDiv(username, price, type, chkCart) {
    var isGC = navigator.userAgent.indexOf("Chrome") == -1 ? false : true; 			// 브라우저 체크
    var isMSIE = navigator.userAgent.indexOf("MSIE") == -1 ? false : true; 				// 브라우저 체크

    var cartDiv = null;
    var scrollTop = 0;
    if (isGC)
        scrollTop = top.document.body.scrollTop;
    else if (isMSIE)
        scrollTop = top.document.documentElement.scrollTop;
    else {
        scrollTop = top.document.documentElement.scrollTop;
        if (scrollTop == 0)
            scrollTop = top.document.body.scrollTop;
    }

    cartDiv = top.document.createElement("div");
    cartDiv.id = "div-popup-detail";
    cartDiv.innerHTML = ""
                      + "  <h4 style='margin-top:0px;'>쇼핑 TIP안내</h4>"
                      + "  <div class='contents'>안녕하세요. " + name + "고객님<br/><br/>STCO 쇼핑몰은 3만원 이상 구매 시 무료배송 입니다.</div>"
                      + "  <div class='pointer' style='text-align:center; color:#444; font-size:18px;'>"
                      + "   고객님께서 <span style='color:red;'>" + (30000 - price) + "원</span> 이상의 제품을<BR/>구매하시면 무료배송의 혜택을 받아보실 수 있습니다.<BR/>즐거운 쇼핑 되시길 바랍니다."
                      + "  </div>"
                      + "  <div class='btns' >"
                      + "      <a href='javascript:void(0);' class='btn btn-ok ' style='width:150px; height:50px; line-height:50px;font-size:18px;' onclick='moreProduct()'>다른상품 더보기</a>"
                      + "      <a href='javascript:void(0);' class='btn btn-cancel' style='width:150px; height:50px; line-height:50px;font-size:18px;' id='proceedPrice'>결제 진행하기</a><br/><br/>"
                      + "   <span>[다른 상품 더보기]를 클릭하시면 지금 보신 상품은<br/>자동으로 장바구니에 담겨집니다.</span>"
                      + "  </div>"
                      + " <div class='btn-close'><a href='javascript:void(0);' onclick='closeCart(); location.reload();'><img src='/Content/201608/images/common_201608/pop_close.jpg'   width='25' height='25' alt='button close' /></a></div> "
    cartDiv.style.position = "absolute";
    cartDiv.style.zIndex = "999999";
    cartDiv.style.top = (scrollTop + (top.document.documentElement.clientHeight / 2) - 200) + "px";
    cartDiv.style.left = ((top.document.documentElement.clientWidth / 2) - 175) + "px";
    cartDiv.style.width = "490px";
    cartDiv.style.height = "480px";
    top.document.body.appendChild(cartDiv);
    document.getElementById("proceedPrice").addEventListener('click', function () {
        proPrice(type, chkCart);
    });

    //alert("크롬 : " + top.document.body.scrollTop + "브라우저 상단 크기 : " + top.document.documentElement.scrollTop + "해상도 : " + screen.availHeight + " DIV 폭 : " + dimDiv.clientWidth + " DIV 높이 : " + dimDiv.clientHeight + " 현재 브라우져의 너비 : " + top.document.documentElement.clientWidth + " 현재 브라우져의 높이 : " + top.document.body.clientHeight + " 스크롤 높이 : " + top.document.documentElement.clientHeight);
    return cartDiv;
};

function initTimer() {
    if (SizeViewSecond > 0) {
        SizeViewSecond--;
        timerchecker = setTimeout("initTimer()", 1000); // 1초 간격으로 체크
    } else {
        $(".checkSizeView").val("0");
        $('body').find(".size_view ul").not($(this).find("ul")).stop(true, true).slideUp("fast");
    }
};


function showSize(prdNo) {
    SizeViewSecond = 7;
    initTimer();
    var $checkSizeView_val = $("#checkSizeView" + prdNo);
    if ($checkSizeView_val.val() == "0") {
        $checkSizeView_val.val("1");
        $.ajax({
            type: "POST",
            url: "/Product/CheckOrderSize",
            data: "prdNo=" + prdNo,
            dataType: "html",
            success: function (msg) {
                var $div = $('body').find("#sizeView" + prdNo + " div");
                $div.html("<ul>" + msg + "</ul>");
                $div.find("ul").stop(true, true).slideToggle("fast");
            },
            error: function (a, b) {
                $("#error").html(a.responseText);
            }
        });
        $('body').find("#sizeView" + prdNo + " ul").stop(true, true).slideToggle("fast");
    }
    else {
        $("#checkSizeView" + prdNo).val("0");
        $('body').find("#sizeView" + prdNo + " ul").not($(this).find("ul")).stop(true, true).slideUp("fast");
    }
};

//팝업열기
function openPopup(cls) {
    $("#" + cls).show();
    
}
//팝업닫기
function closePopup(cls) {
    $("#" + cls).hide();
}
