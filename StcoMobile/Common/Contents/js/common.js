function gnbSet(i) {
    $("#header_bottom").find("li").removeClass("on");
    $("#header_bottom").find("li").eq(i).addClass("on");
};

//홈높이를 재설정한다.
function HomeResizeHeight(idx) {
    $("#HomeSwipe").css("height", $("#swipeContent" + idx).find(".main_content").css("height"));
}

//index 페이지가 아닌 페이지에서 접속시에는 쿠키 생성후 페이지 호출함.
function setAjaxContentTab(tab) {
    $.ajax({
        'url': '/Home/IndexTabSession',
        'type': 'get',
        'data': 'tab=' + tab,
        success: function (data) {
        },
        error: function (a, b) {
            alert(a.responseText);
        }
    });
}

function GoHomeTab(idx, url, strEvent) {
    if (url == "/HOME" || url == "/") {
        window.mySwipe.slide(idx);
    } else {
        $.ajax({
            'url': '/Home/IndexTabSession',
            'type': 'get',
            'data': 'tab=' + idx + "&strEvent=" + strEvent,
            success: function (data) {
                location.href = "/home";
            },
            error: function (a, b) {
                alert(a.responseText);
            }
        });
    }
}


function footerNavSearch() {
//    $("#wrap").removeClass("my_on on").animate({ "left": 0 }, "normal", function () {
//        $("#category").removeClass("on");
//        $("#my").removeClass("my_on");
//        $("#h_search").focus();
//        //if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {           
//        window.scrollTo(0, 0);
//        //}else{
//        //	$(window).scrollTop(0);
//        //}

//    });
    var $htmlObj = $("html, body");
    var $wrap = $("#wrap");
    var $category = $("#category");
    var $my = $("#my");

    $htmlObj.css({ "overflow": "visible" });
    $wrap.removeClass("on").stop().animate({ "left": 0 }, "normal", function () {
        $category.removeClass("on");
         window.scrollTo(0, 0);
        $("#h_search").focus();
    });


};
function footerNavSearchClose() {
    $("#searchTxt").find(".search_close").trigger("click");
};


$(function () {
    var $htmlObj = $("html, body");
    var $wrap = $("#wrap");
    var $category = $("#category");
    var $my = $("#my");
    $(window).resize(function () {
        $category.find("#category_inner").css({ "height": ($(window).outerHeight() - $("#category").find("h2").outerHeight()) });
        $my.find("#my_inner").css({ "height": $(window).outerHeight() - $("#my").find(".ti").outerHeight() });
    }).trigger("resize");

    if ($('#category').text() == "") {
        $('#category').load('/shared/Category', function () {
            $("#category_btn").click(function () {
                footerNavSearchClose();
                if ($wrap.is(".on")) {
                    $htmlObj.css({ "overflow": "visible" });
                    $wrap.removeClass("on").stop().animate({ "left": 0 }, "normal", function () {
                        $category.removeClass("on");
                        $(".footer_nav").show();
                        $("#qo_wrap").show();
                    });
                } else if ($wrap.is(".my_on")) {
                    $wrap.removeClass("my_on").stop().animate({ "left": 0 }, "normal", function () {
                        $my.removeClass("my_on");
                        $("#category_btn").trigger("click");
                        $(".footer_nav").show();
                        $("#qo_wrap").show();
                    });
                } else {
                    $(".footer_nav").hide();
                    $("#qo_wrap").hide();
                    $my.removeClass("my_on");
                    $("html, body").css({ "overflow": "hidden" });
                    $category.addClass("on");
                    $wrap.addClass("on").stop().animate({ "left": "77.5%" }, "normal");
                    $category.find("#category_inner").css({ "height": ($(window).outerHeight() - $("#category").find("h2").outerHeight()) });
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
        });
    }


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
});

function getMyDataLoad() {
    try{
    //실시간으로 정보 가져와서 업데이트 한다.
            $("#myRNBCoin").html("<img src='/Areas/Mobile/Common/Contents/images/common/ajax-loader.gif' style='width:15px;' alt='' />");
            $("#myRNBCoupon").html("<img src='/Areas/Mobile/Common/Contents/images/common/ajax-loader.gif' style='width:15px;' alt='' />");
            //$("#myRNBPrice").html("<img src='/Areas/Mobile/Common/Contents/images/common/ajax-loader.gif' style='width:15px;' alt='' />");
            //$("#myRNBGift").html("<img src='/Areas/Mobile/Common/Contents/images/common/ajax-loader.gif' style='width:15px;' alt='' />");
            $("#myRNBReview").html("<img src='/Areas/Mobile/Common/Contents/images/common/ajax-loader.gif' style='width:15px;margin-top:8px;' alt='' />");

            $.ajax({
            type: "POST",
            url: "/Mypage/getMyDataAjax",
            data: {},
            dataType: "json",
            success: function (result) {
                $("#myRNBCoin").text(format_number(result.coin));
                $("#myRNBCoupon").text(format_number(result.coupon));
                //$("#myRNBPrice").text(format_number(result.price));
                //$("#myRNBGift").text(format_number(result.gift));
                $("#myRNBReview").text(result.buy_after_write_cnt !=0 ? "(" + result.buy_after_write_cnt + ")" : "");
                            
                var todayDivS = "<div>";
				var todayDivS = todayDivS + "<ul class='recently_slide'>";

				var todayDivF = "</ul>";
				var todayDivF = todayDivF + "</div>";
                var todayCont = " <li><img src='{IMG}' alt='' /><span>{PRD_NO}</span><b>{PRICE}원</b></li>";

                var todayList = "";
                for(var iCnt=0;iCnt < result.today_list.length;iCnt++){
                    if(iCnt==0){
                        todayList = todayList + todayDivS;
                    }else if(iCnt!=0 && (iCnt)%3 ==0){
                        todayList = todayList + todayDivF;
                        todayList = todayList +todayDivS;
                    }
                    var today_data = result.today_list[iCnt];
                    todayList = todayList + todayCont.replace("{IMG}","http://image.codigallery.com" + today_data.PRD_IMAGE).replace("{PRD_NO}",today_data.PRD_NO).replace("{PRICE}",today_data.SALE_PRICE);
                }
                if(todayList!=""){
                    todayList = todayList + todayDivF;
                }
                $("#recentlyGoods").html(todayList);
                $("#recentlyGoods").owlCarousel({
					navigation:false,
					/*paginationSpeed : 1000,
					goToFirstSpeed : 2000,*/
					singleItem : true,
				    });
            },
            error: function (xhr, status, error) {
                //alert('ajax called error : ' + error);
                //alert("code:" + xhr.status + "\n" + "message:" + xhr.responseText + "\n" + "error:" + error);
            }
        });
    }catch(e){}
}


//타이머
(function ($) {
    jQuery.timer = function (interval, callback, options) {
        // Create options for the default reset value
        var options = jQuery.extend({ reset: 500 }, options);
        var interval = interval || options.reset;

        if (!callback) { return false; }

        var Timer = function (interval, callback, disabled) {
            // Only used by internal code to call the callback
            this.internalCallback = function () { callback(self); };

            // Clears any timers
            this.stop = function () {
                if (this.state === 1 && this.id) {
                    clearInterval(self.id);
                    this.state = 0;
                    return true;
                }
                return false;
            };
            // Resets timers to a new time
            this.reset = function (time) {
                if (self.id) { clearInterval(self.id); }
                var time = time || options.reset;
                this.id = setInterval($.proxy(this.internalCallback, this), time);
                this.state = 1;
                return true;
            };
            // Pause a timer.
            this.pause = function () {
                if (self.id && this.state === 1) {
                    clearInterval(this.id);
                    this.state = 2;
                    return true;
                }
                return false;
            };
            // Resumes a paused timer.
            this.resume = function () {
                if (this.state === 2) {
                    this.state = 1;
                    this.id = setInterval($.proxy(this.internalCallback, this), this.interval);
                    return true;
                }
                return false;
            };

            // Set the interval time again
            this.interval = interval;

            // Set the timer, if enabled
            if (!disabled) {
                this.id = setInterval($.proxy(this.internalCallback, this), this.interval);
                this.state = 1;
            }

            var self = this;
        };

        // Create a new timer object
        return new Timer(interval, callback, options.disabled);
    };
})(jQuery);