var userAgent = navigator.userAgent.toLowerCase();
/* 2016-07-30 삭제
var gnbIcon = ["gnb_icon2_on", "gnb_icon3_on", "gnb_icon4_on", "gnb_icon5_on", "gnb_icon6_on", "gnb_icon7_on", "gnb_icon8_on", "gnb_icon9_on", "gnb_icon10_on"];
var preGnbIcon = new Array();
for(var i = 0; i < gnbIcon.length; i++){
	preGnbIcon[i] = new Image();
	preGnbIcon[i].src = "/Content/images/new/common/" + gnbIcon[i] + ".png";
};
$(function(){
	$("#gnb").children("ul").children("li").each(function(index,item){
		$(item).hover(function(){
			$(this).addClass("on").siblings("li").removeClass("on");
		},function(){
			$(this).removeClass("on");
		});
	});
});
*/
/* 2016-07-30 추가 */
$(function () {
    var $header = $("#header_wrap"), $aside = $("#aside"), $asideTab = $("#aside_tab"), $asidePage = $("#aside_page"), $pageBtn = $("#page_btn");
	var $headerTab = $("#header_tab"), $headerContent = $("#header_content").children("div"), $visual = $("#visual_wrap").children("div");
    var headerOffSet = $header.offset().top + $header.outerHeight();
    var section1OffSet = 0;
	$headerTab.find("li").each(function(index,item){
		$(item).find("a").click(function(e){
			e.preventDefault();
			if(!$(item).is(".on")){
				$(item).addClass("on").siblings("li").removeClass("on");
				$headerContent.eq(index).addClass("on").siblings("div").removeClass("on");
				if($visual.length > 0){
					$visual.eq(index).addClass("on").siblings("div").removeClass("on");
					$visual.eq(index)[0].playInterval();
					$visual.eq(index).siblings("div")[0].stopInterval();
				};
			};
		});
		/*
		$(item).find("a").mouseenter(function(e){
			e.preventDefault();
			if(!$(item).is(".on")){
				$(item).addClass("on").siblings("li").removeClass("on");
				$headerContent.eq(index).addClass("on").siblings("div").removeClass("on");
				if($visual.length > 0){
					$visual.eq(index).addClass("on").siblings("div").removeClass("on");
					$visual.eq(index)[0].playInterval();
					$visual.eq(index).siblings("div")[0].stopInterval();
				};
			};
		});
		*/
	});
    try {
        section1OffSet = $("#section1").offset().top;

        if ($("#top_banner").length == 0) {
            section1OffSet = section1OffSet - 60;
        }



    } catch (e) { section1OffSet = 254; }
     try {
        if ($("#visual_brand_roomet").length > 0) {
            section1OffSet = section1OffSet + 610;
        }
    } catch (e) {}

    $aside.css({ "top": section1OffSet });
    var asideCurrent = 1, asideTotal = $aside.find("ul").length - 1;
    $asidePage.find("span").text(asideTotal);
    $asideTab.find("a").click(function (e) {
        e.preventDefault();
        if ($(this).is(".prev") && asideCurrent > 1) {
            asideCurrent--;
        } else if ($(this).is(".next") && asideCurrent < asideTotal) {
            asideCurrent++;
        };
        $aside.find("ul").eq(asideCurrent - 1).addClass("on").siblings(".on").removeClass("on");
        $asidePage.find("em").text(asideCurrent);
    });
    $(window).scroll(function () {
        var windowY = $(this).scrollTop();
        if (headerOffSet <= windowY) {
            $header.addClass("fixed");
        } else {
            $header.removeClass("fixed");
        };
        if (section1OffSet <= windowY) {
            $aside.addClass("fixed").css({ "top": 78 });
            $pageBtn.addClass("on");
        } else {
            $aside.removeClass("fixed").css({ "top": section1OffSet });
            $pageBtn.removeClass("on");
        };

    }).trigger("scroll");

    //윈도우 넓이 확인
    if ($(window).width() < 1380) {
        $pageBtn.css("margin-left", "552px");
    } else {
        $pageBtn.css("margin-left", "620px");
    }
    $(window).resize(function () {
        if ($(window).width() < 1380) {
            $pageBtn.css("margin-left", "552px");
        } else {
            $pageBtn.css("margin-left", "620px");
        }
    });

    $("#page_btn_up").click(function (e) {
        e.preventDefault();
        $("html, body").animate({ "scrollTop": 0 }, "normal");
    });
    $("#page_btn_down").click(function (e) {
        e.preventDefault();
        $("html, body").animate({ "scrollTop": 30000 }, "normal");
    });

    $("#page_btn_back").click(function (e) {
        history.go(-1);
    });

    //검색로직처리로직.
    var searchTimmer;
    var searchTarget = $(".search_targets ul");
    var searchIndex = Math.floor(Math.random() * ($(".search_targets ul").length));
    var searcyStatus = false;

    //기본 검색문구 추가.
    if (searchTarget.length > 0) {
        $("[name=topSearchWord]").val(searchTarget.eq(searchIndex).find("li").eq(0).text());
    }

    //검색하기
    $("#btnTopSearch").click(function () {
        if (searcyStatus == false) {
            //어드민 설정URL로 이동.
            if (searchTarget.eq(searchIndex).find("li").eq(2).text() == "_self") {
                location.href = searchTarget.eq(searchIndex).find("li").eq(1).text();
            } else {
                var openNewWindow = window.open("about:blank");
                openNewWindow.location.href = searchTarget.eq(searchIndex).find("li").eq(1).text();
            }
        } else {
            //검색하기.
            location.href = "/Search?searchWord=" + $("[name=topSearchWord]").val().toUpperCase();
        }
    });

    $("[name=topSearchWord]").focus(function () {
        searchTimmer.pause();
        if (searcyStatus == false) {
            $(this).val("");
        }
    });

    $("[name=topSearchWord]").blur(function () {
        if (searcyStatus == false) {
            searchTimmer.resume();
        }
    });

    $("[name=topSearchWord]").blur(function () {
        if (searcyStatus == false) {
            $("[name=topSearchWord]").val(searchTarget.eq(searchIndex).find("li").eq(0).text());
        }
    });

    $("[name=topSearchWord]").keydown(function (e) {
        searcyStatus = true;
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            location.href = "/Search?searchWord=" + $("[name=topSearchWord]").val().toUpperCase();
        }
    });

    try {
        //5초에 한번씩 문구 변경.
        searchTimmer = $.timer(5000, function () {
            if (searcyStatus == false) {
                //alert("111");
                if (searchTarget.length <= searchIndex + 1) {
                    searchIndex = 0;
                } else {
                    searchIndex = searchIndex + 1;
                }
                $("[name=topSearchWord]").val(searchTarget.eq(searchIndex).find("li").eq(0).text());
            }
        });
    }
    catch (e) {
    }

    //셀렉트 박스 처리.
    $(".prd_c_select").selectbox_option(function (obj, text) { });
});
(function($){
	$.fn.extend({
		tab: function(opt){
			var defaults = {
				button : ".moveBtn",
				content : ".pageIndex"
			};
			var extend = $.extend(defaults, opt);
			return this.each(function(){
				var $this = $(this);
				var $button = $this.find(extend.button).find("li");
				var $content = $this.find(extend.content).children("div");
				$button.each(function(index,item){
					$(item).find(".btn").click(function(){
						if(!$(this).parent("li").is(".on")){
							$(this).parent("li").addClass("on").siblings("li").removeClass("on");
							$content.eq(index).addClass("on").siblings("div").removeClass("on");
						};
						return false;
					});
				});
			});
		},
        moveBanner2: function(opt){
			var defaults = {
				moveBtn : ".moveBtn",
				pageIndex : ".pageIndex",
				speed : "fast",
				time : 3000,
				auto : false,
                height : ""
			};
			var extend = $.extend(defaults, opt);
			return this.each(function(){
				var $wrap = $(this);
				var $btn = $wrap.find(extend.moveBtn);
				var $bannerObj = $wrap.find(".banner");
				var liWidth = $bannerObj.find("li").outerWidth();
				var liLength = $bannerObj.find("li").length;
				var cnt = 0;
				var moveSta = true;
				var interval;
				if(extend.pageIndex){
					$bannerObj.find("li").each(function(){
						$(extend.pageIndex).append('<a href="javascript:void(0)"></a>');
					});
					var $page = $wrap.find(extend.pageIndex).find("a");
					$page.eq(0).addClass("on");
				};
				$bannerObj.find("ul").css({"width":$bannerObj.find("ul").find("li").width() * liLength});
				$bannerObj.css({"width":$bannerObj.find("ul").outerWidth() * 2}).append($bannerObj.find("ul").clone());
                
                if(opt.height !=""){
                    $bannerObj.find("img").css({"height":opt.height});
                };

				function pageSet(){
					if(extend.pageIndex){
						var pageCnt = cnt;
						if(pageCnt == liLength) pageCnt = 0;
						$page.eq(pageCnt).addClass("on").siblings().removeClass("on");
					};
				};
				function intervalSet(){
					if(liLength!=1){
                        cnt++;
					    if(cnt > liLength){
						    cnt = 1;
						    $bannerObj.css({"left":0});
					    };
					    pageSet();
					    $bannerObj.animate({"left":liWidth * -cnt},extend.speed,function(){
						    moveSta = true;
					    });
                    }
				};
				$btn.click(function(){
					if(moveSta){
						moveSta = false;
						if($(this).is(".left")){
							cnt--;
							if(cnt < 0){
								cnt = liLength - 1;
								$bannerObj.css({"left":liWidth * -liLength});
							};
						}else if($(this).is(".right")){
							cnt++;
							if(cnt > liLength){
								cnt = 1;
								$bannerObj.css({"left":0});
							};
						};
						pageSet();
						$bannerObj.animate({"left":liWidth * -cnt},extend.speed,function(){
							moveSta = true;
						});
						return false;
					};
				});
				if(extend.pageIndex){
					$page.each(function(index,item){
						$(item).click(function(){
							if(moveSta){
								moveSta = false;
								cnt = index;
								pageSet();
								$bannerObj.animate({"left":liWidth * -cnt},extend.speed,function(){
									moveSta = true;
								});
							};
						});
					});
				};
				if(extend.auto){
					interval = setInterval(intervalSet,extend.time);
					$wrap.hover(function(){
						clearInterval(interval);
					},function(){
						clearInterval(interval);
						interval = setInterval(intervalSet,extend.time);
					});
				};
			});
		},
		moveBanner: function(opt){
			var defaults = {
				moveBtn : ".moveBtn",
				pageIndex : ".pageIndex",
				speed : "fast",
				time : 3000,
				auto : false
			};
			var extend = $.extend(defaults, opt);
			return this.each(function(){
				var $wrap = $(this);
				var $btn = $wrap.find(extend.moveBtn);
				var $bannerObj = $wrap.find(".banner");
				var liWidth = $bannerObj.find("li").outerWidth();
				var liLength = $bannerObj.find("li").length;
				var cnt = 0;
				var moveSta = true;
				var interval;
				if(extend.pageIndex){
					$bannerObj.find("li").each(function(){
						$wrap.find(extend.pageIndex).append('<a href="javascript:void(0)"></a>');
					});
					var $page = $wrap.find(extend.pageIndex).find("a");
					$page.eq(0).addClass("on");
				};
				$bannerObj.find("ul").css({"width":$bannerObj.find("ul").find("li").outerWidth() * liLength});
				$bannerObj.css({"width":$bannerObj.find("ul").outerWidth() * 2}).append($bannerObj.find("ul").clone());
				function pageSet(){
					if(extend.pageIndex){
						var pageCnt = cnt;
						if(pageCnt == liLength) pageCnt = 0;
						$page.eq(pageCnt).addClass("on").siblings().removeClass("on");
                       // alert(pageCnt);
                       //alert($wrap.find("li").eq(pageCnt).find("img").attr("src"));
                        //alert(pageCnt);
                        $wrap.find("img").each(function () {
                            var elem = $(this);
                            if (elem.attr('isload') != 'true') {
                                elem.attr('src', elem.attr('data-original'));
                                elem.attr('isload', 'true');
                            }
                        });
					};
				};
				function intervalSet(){
					cnt++;
					if(cnt > liLength){
						cnt = 1;
						$bannerObj.css({"left":0});
					};
					pageSet();
					$bannerObj.animate({"left":liWidth * -cnt},extend.speed,function(){
						moveSta = true;
					});
				};
				$btn.click(function(){
					if(moveSta){
						moveSta = false;
						if($(this).is(".left")){
							cnt--;
							if(cnt < 0){
								cnt = liLength - 1;
								$bannerObj.css({"left":liWidth * -liLength});
							};
						}else if($(this).is(".right")){
							cnt++;
							if(cnt > liLength){
								cnt = 1;
								$bannerObj.css({"left":0});
							};
						};
						pageSet();
						$bannerObj.animate({"left":liWidth * -cnt},extend.speed,function(){
							moveSta = true;
						});
						return false;
					};
				});
				if(extend.pageIndex){
					$page.each(function(index,item){
						$(item).click(function(){
							if(moveSta){
								moveSta = false;
								cnt = index;
								pageSet();
								$bannerObj.animate({"left":liWidth * -cnt},extend.speed,function(){
									moveSta = true;
								});
							};
						});
					});
				};
				if(extend.auto){
					interval = setInterval(intervalSet,extend.time);
					$wrap.hover(function(){
						clearInterval(interval);
					},function(){
						clearInterval(interval);
						interval = setInterval(intervalSet,extend.time);
					});
				};
				this.stopInterval = function(){
					clearInterval(interval);
				};
				this.playInterval = function(){
					clearInterval(interval);
					interval = setInterval(intervalSet,extend.time);
				};
			});
		},
        moveBanner_v2: function(opt){
			var defaults = {
				moveBtn : ".moveBtn",
				pageIndex : ".pageIndex",
				speed : "fast",
				time : 3000,
				auto : false
			};
			var extend = $.extend(defaults, opt);
			return this.each(function(){
				var $wrap = $(this);
				var $btn = $wrap.find(extend.moveBtn);
				var $bannerObj = $wrap.find(".banner");
				var liWidth = $bannerObj.find("li").outerWidth();
				var liLength = $bannerObj.find("li").length;
				var cnt = 0;
				var moveSta = true;
				var interval;
				if(extend.pageIndex){
					$bannerObj.find("li").each(function(){
						$wrap.find(extend.pageIndex).append('<a href="javascript:void(0)"></a>');
					});
					var $page = $wrap.find(extend.pageIndex).find("a");
					$page.eq(0).addClass("on");
				};
				$bannerObj.find("ul").css({"width":$bannerObj.find("ul").find("li").outerWidth() * liLength});
				$bannerObj.css({"width":$bannerObj.find("ul").outerWidth() * 2}).append($bannerObj.find("ul").clone());
				function pageSet(){
					if(extend.pageIndex){
                   
						var pageCnt = cnt;
						if(pageCnt == liLength) pageCnt = 0;
						$page.eq(pageCnt).addClass("on").siblings().removeClass("on");
                       // alert(pageCnt);
                       //alert($wrap.find("li").eq(pageCnt).find("img").attr("src"));
                        //alert(pageCnt);
                        $wrap.find("img").each(function () {
                            var elem = $(this);
                            if (elem.attr('isload') != 'true') {
                                elem.attr('src', elem.attr('data-original'));
                                elem.attr('isload', 'true');
                            }
                        });
					};
				};
				function intervalSet(){
					cnt++;
					if(cnt > liLength){
						cnt = 1;
						$bannerObj.css({"left":0});
					};
					pageSet();
					$bannerObj.animate({"left":liWidth * -cnt},extend.speed,function(){
						moveSta = true;
					});

                     var idx = cnt;
                       
                    if(idx >= liLength){
                        idx = 0;
                    }
                    $(".lookbook_content").hide();
                    $(".lookbook_content").eq(idx).show();
                    $("#lookbook_menu ul li").removeClass("on");
                    $("#lookbook_menu ul li").eq(idx).addClass("on");
				};
				$btn.click(function(){
					if(moveSta){
						moveSta = false;
						if($(this).is(".left")){
							cnt--;
							if(cnt < 0){
								cnt = liLength - 1;
								$bannerObj.css({"left":liWidth * -liLength});
							};
						}else if($(this).is(".right")){
							cnt++;
							if(cnt > liLength){
								cnt = 1;
								$bannerObj.css({"left":0});
							};
						};
						pageSet();
						$bannerObj.animate({"left":liWidth * -cnt},extend.speed,function(){
							moveSta = true;
						});
                        var idx = cnt;
                       
                        if(idx >= liLength){
                            idx = 0;
                        }
                        $(".lookbook_content").hide();
                        $(".lookbook_content").eq(idx).show();
                        $("#lookbook_menu ul li").removeClass("on");
                        $("#lookbook_menu ul li").eq(idx).addClass("on");
						return false;
					};
				});
				if(extend.pageIndex){
					$page.each(function(index,item){
						$(item).click(function(){
							if(moveSta){
								moveSta = false;
								cnt = index;
								pageSet();
								$bannerObj.animate({"left":liWidth * -cnt},extend.speed,function(){
									moveSta = true;
								});
							};
						});
					});
				};
				if(extend.auto){
					interval = setInterval(intervalSet,extend.time);
					$wrap.hover(function(){
						clearInterval(interval);
					},function(){
						clearInterval(interval);
						interval = setInterval(intervalSet,extend.time);
					});
				};
			});
		},
		ieSelect : function(opt){
			var defaults = {
				select : "select",
				selectClass : "on",
				callback : function(){}
			};
			return this.each(function(){
				var $this = $(this);
				var extend = $.extend(defaults, opt);
				var $select = $this.find(extend.select).css({"position":"absolute","left":"-10000em","top":0});
				var $option = $select.find("option");
				var optionLength = $option.length;
				$this.css({"position":"relative","left":0, "top":0});
				var $ieSelectWrap = $(document.createElement("div")).addClass("ie_select_wrap").appendTo($this);
				var $ieSelectBtn = $(document.createElement("a")).attr("href","#").appendTo($ieSelectWrap);
				var $ieSelectUl = $(document.createElement("ul")).appendTo($ieSelectWrap);
				$ieSelectBtn.text($option.filter(":selected").text() || $option.eq(0).text());
				for(var i = 0; i < optionLength; i++){
					$(document.createElement("li")).attr("title",$option.eq(i).val()).append($(document.createElement("a")).attr("href","#").text($option.eq(i).text())).appendTo($ieSelectUl);
				};
				$select.trigger("change");
				$ieSelectBtn.click(function(e){
					e.preventDefault();
					if(!$ieSelectUl.is("." + extend.selectClass)){
						$ieSelectUl.addClass(extend.selectClass);
						$this.css({"z-index":100});
						$ieSelectUl.css({"z-index":100});
					}else{
						$ieSelectUl.removeClass(extend.selectClass);
						$this.css({"z-index":10});
						$ieSelectUl.css({"z-index":10});
					};
				}).blur(function(){
					setTimeout(function(){
						$ieSelectUl.removeClass(extend.selectClass);
					},150);
				});
				$ieSelectUl.find("li").each(function(index,item){
					$(item).find("a").click(function(e){
						e.preventDefault();
						$ieSelectBtn.text($(this).text());
						$ieSelectBtn.removeClass(extend.selectClass);
						$select.val($(item).attr("title")).trigger("change");
						extend.callback($this,$(item).attr("title"));
					});
				});
			});
		},
		alert: function(opt){ // 2015-06-10
			var defaults = {
				titmsg : "", // string
				submsg : "", // string
				callback : null // null or function
			};
			return this.each(function(){
				var extend = $.extend(defaults, opt);
				var $this = $(this);
				var html = '<div id="alert" class="alert">';
				html += '<div class="alert_inner">';
				html += '<p class="alert_tit">' + extend.titmsg + '</p>';
				html += '<div class="alert_bottom">';
				html += '<p class="alert_msg">' + extend.submsg + '</p>';
				html += '<div class="btn_area">';
				html += '<a href="#" class="complete_btn"><img src="/Content/images/new/mypage/mypage_lbtn3.gif" alt="확인" /></a>';
				html += '</div>';
				html += '</div>';
				html += '</div>';
				html += '<a href="#" class="complete_btn close"><img src="/Content/images/new/mypage/mypage_close_btn.gif" alt="" /></a>';
				html += '</div>';
				$this.after(html);
				$("#alert").css({"margin-top":-$("#alert").outerHeight() / 2});
				($("#my_layer_bg")) ? $("#my_layer_bg").css({"z-index":900}) : $this.after("<div id='my_layer_bg' style='z-index:900'></div>");
				$("#alert").find(".complete_btn").click(function(e){
					e.preventDefault();
					if(extend.callback == null){
						$("#alert").remove();
						$("#my_layer_bg").css({"z-index":100});
					}else{
						extend.callback();
					};
				});
			});
		}
	});
})(jQuery);

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


//탑배너 닫기
function closeTopBanner() {
    var today = new Date();
    var cExpire = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);
    $.cookie('header_top_close', "close", { expires: cExpire, secure: 0 });

    //위치 변경처리
    var height = parseInt($("#top_banner").css("height").replace("px")) ;
    $("#aside").animate({ top: "-=" + height + "px"}, 400 );
    
    $('#top_banner').slideUp();
    //탑배너 세션 설정
    $.ajax({
        type: "POST",
        url: "/shared/TopBannerClose",
        data: {},
        dataType: "script",
        success: function (msg) {
            alert(msg);
        },
        error: function (a, b) {  }
    });
}