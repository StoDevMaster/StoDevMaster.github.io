var anal_src = "http://log.codigallery.com";
//var anal_src = "";

if (location.protocol === 'https:') {
    anal_src = anal_src.replace("http://","https://");
}

var key_num = 0;
var xmlHttp = null;
var isCross = false;

document.domain = "stco.co.kr";

var callAjaxReq = function (url, params, callback) {
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = (function () {
    if (xmlHttp.readyState === XMLHttpRequest.DONE && xmlHttp.status === 200) {
            temp = xmlHttp.responseText;
                callback(temp);
            }
    });
    xmlHttp.open("POST", url, true);
    //-- 여기부분을 안넣었더니 서버 페이지에서 POST를 받지 못함 
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
    xmlHttp.send(params);
}

function createXMLHttpRequest() {
   if (window.XMLHttpRequest) {
       xmlHttp = new XMLHttpRequest(); //기타 브라우저와 IE7.0
   } else {
       if (window.ActiveXObject) {//IE 5.0과 IE6.0은 이쪽으로...
           xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
       }
   }
}

//세션정보가 2시간이 지난경우 초기화 한다.
function getTimeOutSession(){
	var hours = 2; // Reset when storage is more than 24hours
	var timeout = hours *60*60*1000;
	var now = new Date().getTime();
	var setupTime = localStorage.getItem('setupTime');
	if (setupTime == null) {
	    localStorage.setItem('setupTime', now);
	    return false;
	} else {
	    if(now-setupTime < timeout) {
	        localStorage.setItem('setupTime', now);
	        return false;
	    }else{
	        localStorage.setItem('setupTime', now);
	        return true;
	    }
	}
}


try {
    
    var agent = navigator.userAgent.toLowerCase();
    var is_first = false;
    var site_log_key = getCookie("site_log_key");
    var site_conn_key = getCookie("site_conn_key");
    var stco_userid = getCookie("myIdenty");

    if(stco_userid==undefined || stco_userid==null){
        stco_userid = "";
    }
    
    //싸이트키 초기화
    if(site_log_key==""){
        site_log_key = localStorage.getItem('site_log_key');
	if(site_log_key==null){
            site_log_key = "";
        }else{
            setCookie("site_log_key", site_log_key, 365);
        }
    }else{
        localStorage.setItem('site_log_key',site_log_key);
    }

    //접속키 초기화
     if(site_conn_key==""){
        site_conn_key = sessionStorage.getItem('site_conn_key');
        if(site_conn_key==null)    {
           site_conn_key = ""; 
        }else{
            setSession("site_conn_key", site_conn_key);
        }
    }else{
        sessionStorage.setItem('site_conn_key',site_conn_key);
    }

    //싸이트 처음방문시 쿠키생성
    if (site_log_key == "") {
        site_log_key = uniqueId();
        setCookie("site_log_key", site_log_key, 365);    //지속적으로 쿠키를 유지한다.
        localStorage.setItem('site_log_key',site_log_key);
    }

    //1.싸이트 처음 접속시 세션쿠키 생성
    if (site_conn_key == "") {
        is_first = true;
        site_conn_key = uniqueId();
        setSession("site_conn_key", site_conn_key);
        sessionStorage.setItem('site_conn_key',site_conn_key);
    }else if(getTimeOutSession()){
    	site_conn_key = uniqueId();
        setSession("site_conn_key", site_conn_key);
        sessionStorage.setItem('site_conn_key',site_conn_key);
    }
    
    if (is_first == true) {
        $.getJSON("http://freegeoip.net/json/", function (data) {
            var country = data.country_code;
            var ip = data.ip;
            var time_zone = data.time_zone;
            var browser = getBrowser();
            var os_data = getOS();
            var app_data = getApp();
            var scr_type = screen.width + "*" + screen.height;
            var href = window.location.href;
            var href_path = window.location.pathname;
            var refer = document.referrer;
            var refer_host = getReferrerDomain();

            callAjaxReq(anal_src + "/Anal/Insert", ("skey=" + site_log_key + "&ckey=" + site_conn_key + "&stco_userid=" + stco_userid + "&refer=" + refer + "&agent=" + agent + "&href=" + href + "&href_path=" + href_path + "&refer_host=" + refer_host + "&browser=" + browser + "&os=" + os_data + "&isapp=" + app_data + "&screen=" + scr_type + "&ip=" + ip + "&country=" + country + "&time_zone=" + time_zone), function (res_data) {
                
            });
        }).error(function () {
            var country = "";
            var ip = "";
            var time_zone = "";
            var browser = getBrowser();
            var os_data = getOS();
            var app_data = getApp();
            var scr_type = screen.width + "*" + screen.height;
            var href = window.location.href;
            var href_path = window.location.pathname;
            var refer = document.referrer;
            var refer_host = getReferrerDomain();

            callAjaxReq(anal_src + "/Anal/Insert", ("skey=" + site_log_key + "&ckey=" + site_conn_key + "&stco_userid=" + stco_userid + "&refer=" + refer + "&agent=" + agent + "&href=" + href + "&href_path=" + href_path + "&refer_host=" + refer_host + "&browser=" + browser + "&os=" + os_data + "&isapp=" + app_data + "&screen=" + scr_type + "&ip=" + ip + "&country=" + country + "&time_zone=" + time_zone), function (res_data) {

            });
        });
    } else {
        var country = "";
        var ip = "";
        var time_zone = "";
        var browser = getBrowser();
        var os_data = getOS();
        var app_data = getApp();
        var scr_type = screen.width + "*" + screen.height;
        var href = window.location.href;
        var href_path = window.location.pathname;
        var refer = document.referrer;
        var refer_host = getReferrerDomain();
        //analAjax("http://log.codigallery.com/Anal/Insert", {
        
        callAjaxReq(anal_src + "/Anal/Insert", ("skey=" + site_log_key + "&ckey=" + site_conn_key + "&stco_userid=" + stco_userid + "&refer=" + refer + "&agent=" + agent + "&href=" + href + "&href_path=" + href_path + "&refer_host=" + refer_host + "&browser=" + browser + "&os=" + os_data + "&isapp=" + app_data + "&screen=" + scr_type + "&ip=" + ip + "&country=" + country + "&time_zone=" + time_zone), function (res_data) {
            
        });
    }
} catch (ex) { 

}

//window.onbeforeunload = function () {
    //deleteCookie("site_conn_key");
    //return null;
//}

//브라우져 확인
function getBrowser() {
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    if (isOpera) {
        return "Opera";
    }
    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';
    if (isFirefox) {
        return "Firefox";
    }
    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
    if (isSafari) {
        return "isSafari";
    }
    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    if (isIE) {
        return "IE";
    }

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;
    if (isChrome) {
        return "Chrome";
    }

    /*
    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    
    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;
    */
    return "Etc";
}

//OS 디텍터
function getOS() {
    var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os_data = '';

    if (macosPlatforms.indexOf(platform) !== -1) {
        os_data = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os_data = 'IOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os_data = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os_data = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os_data = 'Linux';
    }
    return os_data;
}

function getApp() {
    var standalone = window.navigator.standalone,
    userAgent = window.navigator.userAgent.toLowerCase(),
    safari = /safari/.test(userAgent),
    ios = /iphone|ipod|ipad/.test(userAgent);

    if (ios) {

        if (!standalone && safari) {
            return "Web";
        } else if (standalone && !safari) {
            return "Web";
        } else if (!standalone && !safari) {
            return "App";
        };

    } else {
        //다른로직
        if (/Android/.test(userAgent)) {
            var nua = navigator.userAgent;
            var is_android = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1));
            if (is_android == true) {
                return "App";
            } else {
                return "Web";
            }
        } else {
            return "Web";
        }
    }
}

//고유코드 생성
function uniqueId() {
    var key_idx = (new Date().getTime()).toString() + (key_num).toString();
    key_num = key_num + 1;
    return key_idx;
}

//호스트네임
function getReferrerDomain() {
    if (document.referrer != "") {
        var url = document.createElement('a');
        url.href = document.referrer;
        return url.hostname;
    } else {
        return "";
    }
}

// 쿠키 생성
function setCookieTime(cName, cValue, mInute) {
    var date = new Date();
    date.setTime(date.getTime() + (60 * 1000 * mInute));
    var expires = "; expires=" + date.toGMTString();

    document.cookie = cName + "=" + cValue + expires + "; path=/";
}
function setCookie(cName, cValue, cDay){
        var expire = new Date();
        expire.setDate(expire.getDate() + cDay);
        cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
        if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
        document.cookie = cookies;
    }

// 쿠키 가져오기
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
    if(unescape(cValue)==undefined){
        return "";
    }else{
        return unescape(cValue);
    }
}

function setSession(cName, cValue) {
    document.cookie = cName + "=" + cValue + "; path=/";
}

//쿠키삭제
function deleteCookie(cookieName) {
    var expireDate = new Date();

    //어제 날짜를 쿠키 소멸 날짜로 설정한다.
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString() + "; path=/";
}

//AJAX 호출
function analAjax(url, params, callback) {
    $.ajax({
        type: "POST",
        url: url,
        data: params,
        success: function (data, textStatus) {
            callback(data);
        },
        error: function (xhr, status, error) {
           
        }
    });
}

////////////////////////////////////
//회원가입시 호출
////////////////////////////////////
function ud_anal_join(userid) {
    try {
        //console.log("join start");
        var site_log_key = getCookie("site_log_key");
        var site_conn_key = getCookie("site_conn_key");

        analAjax(anal_src + "/Anal/Join", {
            skey: site_log_key,
            ckey: site_conn_key,
            userid: userid
        }, function (result) {
           //console.log("join finish");
        });
    } catch (ex) { 
        //console.log("join error" + ex);
    }
}

////////////////////////////////////
//로그인시 호출
////////////////////////////////////
function ud_anal_login(userid) {
    try {
        var site_log_key = getCookie("site_log_key"); 
        var site_conn_key = getCookie("site_conn_key");
 
        analAjax(anal_src + "/Anal/Login", {
            skey: site_log_key,
            ckey: site_conn_key,
            userid: userid
        }, function (result) {
            
        });
    } catch (ex) { }
}

////////////////////////////////////
//아날 상품 클릭시 호출
////////////////////////////////////
function ud_anal_click(prd_no) {
    try {
        var site_log_key = getCookie("site_log_key");
        var site_conn_key = getCookie("site_conn_key");

        analAjax(anal_src + "/Anal/AnalClick", {
            skey: site_log_key,
            ckey: site_conn_key,
            prdcd: prd_no
        }, function (result) {

        });
    } catch (ex) { }
}

////////////////////////////////////
//서비스 화면 접속 로그 생성
////////////////////////////////////
function ud_anal_conn() {
    try {
         var stco_userid = getCookie("myIdenty");

        if(stco_userid==undefined || stco_userid==null){
            stco_userid = "";
        }
        var site_log_key = getCookie("site_log_key");
        var site_conn_key = getCookie("site_conn_key");

        if(stco_userid!=""){
            analAjax(anal_src + "/Anal/AnalClickConn", {
                skey: site_log_key,
                ckey: site_conn_key
            }, function (result) {

            });
        }
    } catch (ex) { }
}

////////////////////////////////////
//상세화면
////////////////////////////////////
function ud_anal_product(data) {
    try {
        var site_log_key = getCookie("site_log_key");
        var site_conn_key = getCookie("site_conn_key");

        for (var icnt = 0; icnt < data.length;icnt++ ) {
            analAjax(anal_src + "/Anal/Product", {
                skey: site_log_key,
                ckey: site_conn_key,
                prdcd: data[icnt]["prdCd"],
                prdnm: data[icnt]["prdNm"],
                saleprc: data[icnt]["salePrc"],
                realprc: data[icnt]["realPrc"]
            }, function (result) {
                
            });
        }
    } catch (ex) { }
}

////////////////////////////////////
//장바구니
////////////////////////////////////
function ud_anal_cart(data) {
    try {
        var site_log_key = getCookie("site_log_key");
        var site_conn_key = getCookie("site_conn_key");
        var prdcd = "";
        var prdnm = "";
        var saleprc = "";
        var realprc = "";
        var cnt = "";
        for (var icnt = 0; icnt < data.length; icnt++) {
           
            if (icnt == 0) {
                prdcd = data[icnt]["prdCd"];
                prdnm = data[icnt]["prdNm"].replace(/&/gi,"");
                saleprc = data[icnt]["salePrc"];
                realprc = data[icnt]["realPrc"];
                cnt = data[icnt]["cnt"];
            } else {
                prdcd = prdcd + "^|^" + data[icnt]["prdCd"];
                prdnm = prdnm + "^|^" + data[icnt]["prdNm"].replace(/&/gi,"");
                saleprc = saleprc + "^|^" + data[icnt]["salePrc"];
                realprc = realprc + "^|^" + data[icnt]["realPrc"];
                cnt = cnt + "^|^" + data[icnt]["cnt"];
            }
        }

        analAjax(anal_src + "/Anal/Cart", {
            skey: site_log_key,
            ckey: site_conn_key,
            prdcd: prdcd,
            prdnm: prdnm,
            saleprc: saleprc,
            realprc: realprc,
            cnt: cnt
        }, function (result) {
           
        });
    } catch (ex) { }
}

////////////////////////////////////
//주문완료
////////////////////////////////////
function ud_anal_order(ordno,data) {
    try {
        var site_log_key = getCookie("site_log_key");
        var site_conn_key = getCookie("site_conn_key");
        var prdcd = "";
        var prdnm = "";
        var saleprc = "";
        var realprc = "";
        var cnt = "";
        for (var icnt = 0; icnt < data.length; icnt++) {
            
            if (icnt == 0) {
                prdcd = data[icnt]["prdCd"];
                prdnm = data[icnt]["prdNm"].replace(/&/gi,"");
                saleprc = data[icnt]["salePrc"];
                realprc = data[icnt]["realPrc"];
                cnt = data[icnt]["cnt"];
            } else {
                prdcd = prdcd + "^|^" + data[icnt]["prdCd"];
                prdnm = prdnm + "^|^" + data[icnt]["prdNm"].replace(/&/gi,"");
                saleprc = saleprc + "^|^" + data[icnt]["salePrc"];
                realprc = realprc + "^|^" + data[icnt]["realPrc"];
                cnt = cnt + "^|^" + data[icnt]["cnt"];
            }
        }

        callAjaxReq(anal_src + "/Anal/Order", ("skey=" + site_log_key + "&ckey=" + site_conn_key + "&ordno=" + ordno + "&prdcd=" + prdcd + "&prdnm=" + prdnm + "&saleprc=" + saleprc + "&realprc=" + realprc + "&cnt=" + cnt), function (result) {
            
        });
        /*
        analAjax(anal_src + "/Anal/Order", {
            skey: site_log_key,
            ckey: site_conn_key,
            ordno: ordno,
            prdcd: prdcd,
            prdnm: prdnm,
            saleprc: saleprc,
            realprc: realprc,
            cnt: cnt
        }, function (result) {
           
        });
        */
    } catch (ex) { 
        console.log(ex);
    }
}

////////////////////////////////////
//네이버페이로 이탈하는 로그수집
////////////////////////////////////
function ud_anal_naver() {
    analAjax(anal_src + "/Anal/Naver", {
        skey: site_log_key,
        ckey: site_conn_key,
    }, function (result) {

    });
}
