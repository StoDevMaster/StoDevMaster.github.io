
//셀렉트박스
(function($){
	$.fn.extend({
        selectbox: function(rollback){
			return this.each(function(){
				var $this = $(this);
                $this.find("ul li").click(function(e){
                    if(!$this.hasClass("open")){
                        $this.find("li").show();
                        $this.addClass("open");
                    }else{
                        $this.removeClass("open");
                        $(this).siblings("li").removeClass("on").hide();
                        $(this).addClass("on").show();
                        $(this).parent("ul").siblings("input").val($(this).find("a").attr("rel"));
                        rollback($this, $(this).find("a").attr("rel"));
                    }
                });

                $this.mouseleave(function(i){
                    $this.removeClass("open");
                    $(this).find("ul li").hide();
                    $(this).find("ul").find(".on").show();
                });

                
			});
		},
        selectbox_option: function(rollback){
			return this.each(function(){
				var $this = $(this);
                $this.find("ul li").click(function(e){
                    if(!$this.hasClass("open")){
                        var $this_sub = $(this);
                        var prd_no = $(this).parent("ul").siblings("input").val();
                        if(prd_no!="LOAD_OK"){
                             //재고 가져와서 리스트에 추가하기
                             $.ajax({
                                type: "POST",
                                url: "/Stock/StockConfirm",
                                data: {prdNo : prd_no ,cnt : 1},
                                dataType: "html",
                                success: function (msg) {
                                    //재고체크안함.
                                    if(msg == "NO") return false;
                                    if(msg.indexOf("#") > -1){
                                        var option = msg.split("#");
                                        for(var iCnt = 0;iCnt < option.length-1;iCnt++){
                                            var size = option[iCnt].split(":");
                                            if(size[1] == "3")
                                            {
                                                $this.find("ul").append("<li class='cnt_stock'>"+size[2]+" - " + size[0] + " - "+size[3]+"개</li>");
                                            }
                                        }
                                    }
                                    $this.find("li").show();
                                    $this.addClass("open");
                                    $this_sub.parent("ul").siblings("input").val("LOAD_OK");
                                },
                                error: function (a, b) {
                                    $("#error").html(a.responseText);
                                }
                            });
                        }else{
                            $this.find("li").show();
                            $this.addClass("open");
                        }
                    }else{
                        $this.removeClass("open");
                    }
                });

                $this.mouseleave(function(i){
                    $this.removeClass("open");
                    $(this).find("ul li").hide();
                    $(this).find("ul").find(".on").show();
                });

                
			});
		}
	});
})(jQuery);

//쿠키처리.
(function ($) {
    $.cookie = function (key, value, options) {
        if (arguments.length > 1) {
            var o = $.extend({}, $.cookie.defaults, options);
            if (value === null || value === undefined) {
                value = '';
                o.expires = -1;
            }
            if (o.expires.constructor != Date) {
                var today = new Date();
                today.setDate(today.getDate() + o.expires);
                o.expires = today;
            }
            // Create the cookie string
            document.cookie =
    key + '=' + value +
    '; expires=' + o.expires.toUTCString() +
    (o.path ? '; path=' + (o.path) : '') +
    (o.domain ? '; domain=' + (o.domain) : '') +
    (o.secure ? '; secure' : '');
        } else {
            if (result = new RegExp(key + "=(.*?)(?:;|$)").exec(document.cookie))
                return decodeURIComponent(result[1]);
            return false;
        }
    };
    $.cookie.defaults = {
        expires: 365,
        path: '/'
    }
})(jQuery);

///로그인처리
$(document).ready(function(){ 
    $('#btnLogin1').click(function (param) {
        if ($(this).attr('rel') == 'Login') {
            if (document.location.pathname == "/login/nindex") {
                location.reload();
            }
            else {
                location.href = "/login/nindex?ret=" + document.location.pathname + document.location.search;
                return false;
            }
        } else {
            location.href = '/Login/LogOut'
        }
        return false;
    });
});

$(document).on("click", "[name=prdAddWish]", function () {
    var $this = $(this);
    if ($(this).hasClass("on")) {
        alert("위시리스트로 이미 추가된상품입니다.");
        return false;
    }

    $.ajax({
        type: "POST",
        url: "/Cart/Wish",
        data: "prdNo=" + $(this).attr("rel"),
        dataType: "html",
        success: function (msg) {
            alert(msg);
            if (msg == "위시리스트에 상품이 담겼습니다.") {
                var cnt = $("#leftWishCnt").text();
                cnt = cnt.replace("(", "").replace(")", "");
                $("#leftWishCnt").text("(" + (parseInt(cnt) + 1) + ")");
                $this.addClass("on");
            }
        },
        error: function (a, b) {
            $("#error").html(a.responseText);
        }
    });
});

//쿠키생성
function setCookie(cName, cValue, cDay) {
    var expire = new Date();
    expire.setDate(expire.getDate() + cDay);
    cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
    if (typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
    document.cookie = cookies;
}

//쿠키 가져오기
function getCookie(cName) {
    cName = cName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cName);
    var cValue = '';
    if (start != -1) {
        start += cName.length;
        var end = cookieData.indexOf(';', start);
        if (end == -1) end = cookieData.length;
        cValue = cookieData.substring(start, end);
    }
    return unescape(cValue);
}

//빈값 체크
function isEmpty(field, error_msg) {
    isCheckValid = false;
    isjQuery = false;

    if (typeof (field.value) == "undefined") {
        isCheckValid = CheckValid(field.val(), false);
        isjQuery = true;
    }
    else {
        isCheckValid = CheckValid(field.value, false);
    }

    if (error_msg == "") {
        if (!isCheckValid) {
            if (isjQuery) {
                if (field.attr("type") == "text" || field.attr("type") == "password")
                    field.focus();
            }
            else {
                if (field.type == "text" || field.type == "password")
                    field.focus();
            }

            return true;
        }
        else {
            return false;
        }
    }
    else {
        if (!isCheckValid) {
            alert(error_msg);

            if (isjQuery) {
                if (field.attr("type") == "text" || field.attr("type") == "password")
                    field.focus();
            }
            else {
                if (field.type == "text" || field.attr("type") == "password")
                    field.focus();
            }

            return true;
        }
        else {
            return false;
        }
    }
}

//유효성검사
function CheckValid(String, space) {
    var retvalue = false;
    for (var i = 0; i < String.length; i++) {
        if (space == true) {
            if (String.charAt(i) == ' ') {
                retvalue = true;
                break;
            }
        } else {
            if (String.charAt(i) != ' ') {
                retvalue = true;
                break;
            }
        }
    }
    return retvalue;
}


function commify(n) {
    var reg = /(^[+-]?\d+)(\d{3})/;   // 정규식
    n += '';                          // 숫자를 문자열로 변환

    while (reg.test(n))
        n = n.replace(reg, '$1' + ',' + '$2');

    return n;
};


//바이트계산 함수 
function getKorStringByte(str) {
    var retCode = 0;
    var strLength = 0;

    for (i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i)
        var ch = str.substr(i, 1).toUpperCase()

        code = parseInt(code)

        if ((ch < "0" || ch > "9") && (ch < "A" || ch > "Z") && ((code > 255) || (code < 0)))
            strLength = strLength + 2;
        else
            strLength = strLength + 1;
    }
    return strLength;
}

//카트등록폼생성
function createDimDiv() {
    var __alphaVal = 3;
    var isMSIE = navigator.userAgent.indexOf("MSIE") == -1 ? false : true;
    var isGC = navigator.userAgent.indexOf("Chrome") == -1 ? false : true;
    var dimDiv = null;

    if (top.document != null) {
        dimDiv = top.document.createElement("div");
        dimDiv.style.position = "absolute";
        dimDiv.style.zIndex = "900000";
        dimDiv.style.top = "0px";
        dimDiv.style.left = "-" + (screen.availWidth * 2) + "px";
        dimDiv.style.width = (screen.availWidth * 2) + "px";
        dimDiv.style.height = ("100000") + "px";

        if (isMSIE) {
            dimDiv.style.background = "rgba(0,0,0,0.3)";
            dimDiv.style.filter = "alpha(opacity=" + __alphaVal + "0)";
        } else {
            if (__alphaVal > 9) __alphaVal = 9;
            dimDiv.style.backgroundColor = "rgba(0,0,0,0." + __alphaVal + ")";
        }
        dimDiv.id = "goCartYesNo_BackgroundLayer";

        try {
            dimDiv.style.left = "0px";
            top.document.body.appendChild(dimDiv);
        }
        catch (e) {
        }
    }
    return dimDiv;
}
//카트등록폼생성
function createCartDiv(itemname) {
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
                      + "  <h4>장바구니담기</h4>"
                      + "  <div class='contents'>장바구니에 상품을 담았습니다.</div>"
                      + "  <div class='pointer'>"
                      + itemname
                      + "  </div>"
                      + "  <div class='btns'>"
                      + "      <a href='/Cart' class='btn btn-ok'>장바구니확인</a>"
                      + "      <a href='javascript:void(0);' onclick='closeCart(); location.reload();' class='btn btn-cancel'>계속쇼핑</a>"
                      + "  </div>"
                      + " <div class='btn-close'><a href='javascript:void(0);' onclick='closeCart(); location.reload();'><img src='/Content/201608/images/common_201608/pop_close.jpg'   width='25' height='25' alt='button close' /></a></div> "
    cartDiv.style.position = "absolute";
    cartDiv.style.zIndex = "999999";
    cartDiv.style.top = (scrollTop + (top.document.documentElement.clientHeight / 2) - 100) + "px";
    cartDiv.style.left = ((top.document.documentElement.clientWidth / 2) - 175) + "px";

    top.document.body.appendChild(cartDiv);
    //alert("크롬 : " + top.document.body.scrollTop + "브라우저 상단 크기 : " + top.document.documentElement.scrollTop + "해상도 : " + screen.availHeight + " DIV 폭 : " + dimDiv.clientWidth + " DIV 높이 : " + dimDiv.clientHeight + " 현재 브라우져의 너비 : " + top.document.documentElement.clientWidth + " 현재 브라우져의 높이 : " + top.document.body.clientHeight + " 스크롤 높이 : " + top.document.documentElement.clientHeight);
    return cartDiv;
};


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
                      + "  <div class='contents' style='margin-bottom:20px;'>안녕하세요. " + username + "고객님<br/><br/>STCO 쇼핑몰은 <span style='color:red;'>3만원 이상 구매 시 무료배송</span> 입니다.</div>"
                      + "  <div class='pointer' style='text-align:center; color:#444; font-size:18px;'>"
                      + "   고객님께서 <span style='color:red;'>" + commify(30000 - price) + "원</span> 이상의 제품을<BR/>구매하시면 무료배송의 혜택을 받아보실 수 있습니다.<BR/>즐거운 쇼핑 되시길 바랍니다."
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

//장바구니 팝업 (결제 진행하기 부분)
var proPrice = function (type, chkCart) {
    if (type == "cart") {
        choiceBuy('1');
    } else if (type == "cart2") {
        OrderLogic(chkCart, '999999', '매장배송');
    } else if (type == "naver") {
        buy_nc("Y");
    } else {
        addCart('buy');
    }
}




//로그인여부 확인
var checkLogin = function (func_, type_, desc) {
    $.ajax({
        type: "POST",
        url: "/Login/CheckLogin",
        data: "",
        success: function (msg) {
            if (msg) {
                if (func_ && func_.constructor == Function)
                    func_();
            } else {
                location.href = desc;
                return false;
            }
        }
    });
    return false;
};

//쿠폰다운로드
var get_coupon = function (couponNo, prdNo) {
    checkLogin(function () {
        $.ajax({
            type: "POST",
            url: "/Detail/GetCoupon",
            data: "couponNo=" + couponNo + "&prdNo=" + prdNo,
            dataType: "html",
            success: function (msg) {
                alert(msg);
            },
            error: function (a, b) {
                $("#error").html(a.responseText);
            }

        });
    }, '', '/login/nindex?ret=' + document.location.pathname + document.location.search);


};


/* 상품 재고 체크 */
var sotck_check = function (func_, data_, action_) {
    $.ajax({
        type: "POST",
        url: "/stock/StockCheck",
        data: data_,
        dataType: "script",
        success: function (msg) {
            if (msg == "1") {
                alert("상품의 재고가 없습니다.");
                if (action_ != '') {
                    eval(action_.selectedIndex = 0);
                }
                return msg;
            }
            else if (msg == "2") {
                alert("주문하신 상품의 수량이 재고수량보다 많습니다.");
                if (action_ != '') {
                    eval(action_.selectedIndex = 0);
                }
                return msg;
            }
            else {
                if (func_ && func_.constructor == Function) {
                    func_();

                }
            }
        },
        error: function (a, b) {
            $("#error").html(a.responseText);
        }
    });
};


//로그인확인후 1:1상담페이지로 이동
var toCounsel = function () {
    checkLogin(function () {
        location.href = '/Customer/Counsel';
    }, "toCounsel()", "/login/nindex?ret=/Customer/Counsel");
};

/* 주문조회로 이동 */
var toOrder = function () {
    /////alert('1');
    checkLogin(function () {
        location.href = '/MyPage/newOrderList';

    }, "toOrder()", "/login/nindex?ret=/MyPage/newIndex");
};

//로그인확인후 교환페이지 이동.
var toExchange = function () {
    checkLogin(function () {
        location.href = '/MyPage/ExchangeRequest';

    }, "toExchange()", "/login/nindex?ret=/MyPage/ExchangeRequest");
};


//로그인확인후 마이페이지 이동
var toMypage = function () {
    checkLogin(function () {
        location.href = '/MyPage/';

    }, "toMypage()", "/login/nindex?ret=/MyPage/");
};

//로그인확인후 오늘본상품페이지 이동
var toToDay = function () {
    checkLogin(function () {
        location.href = '/MyPage/ToDay';
    }, "toToDay()", '/MyPage/ToDay');
};

//로그인확인후 위시리시트로 이동
var toWish = function () {
    checkLogin(function () {
        location.href = '/MyPage/newWish';

    }, "toOrder()", "/login/nindex?ret=/MyPage/newWish");
};

//로그인확인후 코인페이지로 이동
var toCoin = function () {
    checkLogin(function () {
        location.href = '/MyPage/newCoin';

    }, "toOrder()", "/login/nindex?ret=/MyPage/newCoin");
};

//자동조정 상세화면
var autoResize = function (i) {
    try {
        var iframeHeight = (i).contentWindow.document.body.scrollHeight;
        (i).height = iframeHeight + 20;
        leftBar();
    }
    catch (e) {

        (i).height = 89224;
    }
};

var leftBar = function () {
    var _outerHeight = $('#outline').outerHeight();
    var _leftOuterHeight = $('#left').outerHeight();
    $('#left .black_1').css('height', (_outerHeight - _leftOuterHeight + 20) + 'px');
};

//문자열 검색.
function InStr(strSearch, charSearchFor) {
    var sLen = charSearchFor.length;
    for (i = 0; i < strSearch.length; i++) {
        if (charSearchFor == strSearch.substring(i, i + sLen)) {
            return i;
        }
    }
    return -1;
};

// 숫자 타입에서 쓸 수 있도록 format() 함수 추가
Number.prototype.format = function () {
    if (this == 0) return 0;

    var reg = /(^[+-]?\d+)(\d{3})/;
    var n = (this + '');

    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

    return n;
};

// 문자열 타입에서 쓸 수 있도록 format() 함수 추가
String.prototype.format = function () {
    var num = parseFloat(this);
    if (isNaN(num)) return "0";

    return num.format();
};


//넘버 포맷
function format_number(val) {
    b = val + "c"
    c = b.length
    a = b.substr(0, c - 1)
    b = a.length; c = b / 3; f = Math.floor(b / 3); d = Math.round((c - f) * 3); e = Math.round((c - f) * 3)
    f = new Array
    for (i = 0; i <= c; i++) {
        if (i == 0) { ds = a.substr(0, d) }
        else if (i == 1) { ds = a.substr(e, d) }
        else { e = e + 3; ds = a.substr(e, d) }
        f[i] = ds; d = 3
    }
    str = f.join(","); str2 = str.substr(0, 1); if (str2 == ",") { str = str.substr(1, b + c); }
    return str;
}

//AJAX 호출
function udAjax(url, params, callback) {
    $.ajax({
        type: "POST",
        url: url,
        data: params,
        dataType: "json",
        success: function (data, textStatus) {
            callback(data);
        },
        error: function (xhr, status, error) {
            //alert('ajax called error : ' + error);
            alert("code:" + xhr.status + "\n" + "message:" + xhr.responseText + "\n" + "error:" + error);
        }
    });
}

//팝업창생성
function PopupWindow(url, title, w, h) {
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    title = title.replace(/-/g, '');
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
}
