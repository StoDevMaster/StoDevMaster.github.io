    //<!-- 구글 아날리스틱 -->
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-69128943-1', 'auto');
      ga('send', 'pageview');
    </script>
    <!-- 구글 아날리스틱 -->

    //<!-- WIDERPLANET PURCHASE SCRIPT START 2016.5.31 -->
    //<div id="wp_tg_cts" style="display:none;"></div>
    //<script type="text/javascript">
        var auth= '@(User.Identity.IsAuthenticated)';
       
        if (auth == "true") {
            var userId = "@(User.Identity.Name)";
        }else{
            var userId = " ";
        }

        var wptg_tagscript_vars = wptg_tagscript_vars || [];
        wptg_tagscript_vars.push((function () {
            return { wp_hcuid: userId,   /*Cross device targeting을 원하는 광고주는 로그인한 사용자의 Unique ID (ex. 로그인 ID, 고객넘버 등)를 암호화하여 대입. *주의: 로그인 하지 않은 사용자는 어떠한 값도 대입하지 않습니다.*/
                     ti: "28419", /*광고주 코드*/
                     ty: "Home", /*트래킹태그 타입*/
                     device: "web"
            /*디바이스 종류 (web 또는 mobile)*/
        };
    }));
    //</script>
    //<script type="text/javascript" async src="//cdn-aitg.widerplanet.com/js/wp_astg_4.0.js"></script><!-- // WIDERPLANET  SCRIPT END 2016.5.30 -->


      <!-- 비즈스프링 -->
    <!-- LOGGER TRACKING SCRIPT V.40 FOR logger.co.kr / 39596 : COMBINE TYPE / DO NOT ALTER THIS SCRIPT. -->
    <!-- COPYRIGHT (C) 2002-2012 BIZSPRING INC. LOGGER(TM) ALL RIGHTS RESERVED. -->
    <script type="text/javascript">        var _TRK_LID = "39596"; var _L_TD = "ssl.logger.co.kr";</script>
    <script type="text/javascript">        var _CDN_DOMAIN = location.protocol == "https:" ? "https://fs.bizspring.net" : "http://fs.bizspring.net"; document.write(unescape("%3Cscript src='" + _CDN_DOMAIN + "/fs4/bstrk.js' type='text/javascript'%3E%3C/script%3E"));</script>
    <noscript><img alt="Logger Script" width="1" height="1" src="http://ssl.logger.co.kr/tracker.tsp?u=39596&amp;js=N" /></noscript>
    <!-- END OF LOGGER TRACKING SCRIPT -->

    <!-- 공통스크립트 시작  (모든페이지에 노출되도록 설치 단 전환페이지일 경우 위 환경변수보다 하단에 설치) -->
    <!-- http://www.stco.co.kr 공통 스크립트 -->
    <!-- NHN Conversion Tracking System Gathering Script V.12.20120510 -->
    <script type='text/javascript'>
        if (typeof _TGCD == 'undefined') {
            var _TGCD = 'AB2A372245443119'; var _JV = "AMZ2012051001"; var _TGUL = 'cts20.acecounter.com'; var _TGPT = '80'; var _bn = navigator.appName; var _UD = 'undefined'; var _UN = 'unknown'; var _TDC = document.cookie; function _TIDV(a) { return (typeof a != _UD) ? 1 : 0 }; function _TIX(s, t) { return s.indexOf(t) }; function _TGV(b, a, c, d) { var f = b.split(c); for (var i = 0; i < f.length; i++) { if (_TIX(f[i], (a + d)) == 0) return f[i].substring(_TIX(f[i], (a + d)) + (a.length + d.length), f[i].length); } return ''; }; function _XV(b, a, c, d, e) { var f = b.split(c); var g = ''; for (var i = 0; i < f.length; i++) { if (_TIX(f[i], (a + d)) == 0) { try { eval(e + "=f[i].substring(_TIX(f[i],(a+d))+(a.length+d.length),f[i].length);"); } catch (_e) { }; continue; } else { if (g) g += '&'; g += f[i]; }; } return g; }; function _TNOB(a) { return (a != _UD && a > 0) ? new Object(a) : new Object() }; function _TNIM() { return new Image() }; function _TIL(a) { return a != _UD ? a.length : 0 }; function _TILF(a) { var b = 0; try { eval("b = a.length"); } catch (_e) { b = 0; }; return b; }; function _LST(a, b) { if (_TIX(a, b)) a = a.substring(0, _TIL(a)); return a }; function _CST(a, b) { if (_TIX(a, b) > 0) a = a.substring(_TIX(a, b) + _TIL(b), _TIL(a)); return a }; function _UL(a) { a = _LST(a, '#'); a = _CST(a, '://'); return a }; function _AA(a) { return new Array(a ? a : 0) }; function _TAGC(nm) { var cn = nm + "="; var nl = cn.length; var cl = _TDC.length; var i = 0; while (i < cl) { var j = i + nl; if (_TDC.substring(i, j) == cn) { var val = _TDC.indexOf(";", j); if (val == -1) val = _TDC.length; return unescape(_TDC.substring(j, val)); }; i = _TDC.indexOf(" ", i) + 1; if (i == 0) break; } return ''; }; function _TASC(nm, val, exp, dm) { var expd = new Date(); if (exp) { expd.setTime(expd.getTime() + (exp * 1000)); document.cookie = nm + "=" + escape(val) + "; expires=" + expd.toGMTString() + "; path=/; domain=" + dm + "; "; } else { document.cookie = nm + "=" + escape(val) + "; path=/; domain=" + dm + "; "; }; }; function SetUID() { var newid = ''; var d = new Date(); var t = Math.floor(d.getTime() / 1000); newid = 'UID-' + t.toString(16).toUpperCase(); for (var i = 0; i < 16; i++) { var n = Math.floor(Math.random() * 16).toString(16).toUpperCase(); newid += n; } return newid; }; var _TFCV = _TAGC("CTSFCID"); if (!_TFCV) { _TFCV = SetUID(); _TASC("CTSFCID", _TFCV, 86400 * 30 * 12, _CDM); _TFCV = _TAGC("CTSFCID"); };
            var _NIU = _TNIM(); var _d = _rf = _fwd = _arg = _bv = _rl = _Tak = _xrl = _rft = '', _je = 'n', _bR = 'blockedReferrer'; if (!_TIDV(_CDM)) var _CDM = document.domain; if (_CDM == '') var _CDM = document.domain; if (!_TIDV(_RFL)) var _RFL = ''; if (!_TIDV(_CNM)) var _CNM = ''; if (!_TIDV(_CNV)) var _CNV = ''; if (typeof _CNV == 'string') _CNV = _CNV.replace(/[^0-9]/g, '');
            function _S_TAG(s) { var o = new RegExp(); o = /[<][^>]*[>]/gi; return s.replace(o, ""); }; function _G_TAG(n, a, d) { var b = document.getElementsByTagName(n); if (b.length <= 0) return ''; for (var c = 0; c < b.length; c++) { if (typeof b[c].innerHTML != _UD && _TIX(b[c].innerHTML.toString().replace(/ /g, ''), a) >= 0) { if (typeof b[c + d].innerHTML != _UD) { return b[c + d].innerHTML; }; }; }; return ''; };
            if (typeof _CNM == _UD || _CNM == '') { if (_CNV == '' && document.URL.indexOf('orderend') > 0) { /* for Makeshop */try { _CNV = document.getElementById('mk_totalprice').innerHTML; } catch (_e) { }; if (_CNV.replace(/[^0-9]/g, '') == '') _CNV = _G_TAG('b', '결제금액', 1); _CNV = _S_TAG(_CNV); _CNV = _CNV.replace(/[^0-9]/g, ''); }; if (_CNV == '' && document.URL.indexOf('cart_result') > 0) { /* Whois */var _CNVT = _G_TAG('td', '결제금액', 0); _CNVT = _CNVT.toLowerCase(); _CNV = _CNVT.substring(_CNVT.indexOf('결제금액') + 1, _CNVT.indexOf('</td>', _CNVT.indexOf('결제금액') + 5)); _CNV = _S_TAG(_CNV); _CNV = _CNV.replace(/[^0-9]/g, ''); }; if (_CNV == '' && document.URL.indexOf('order_result') > 0) { /* Cafe24 */var _CNVT = _G_TAG('td', '총구매액', 0); _CNVT = _CNVT.toLowerCase(); _CNV = _CNVT.substring(_CNVT.indexOf('총구매액'), _CNVT.indexOf('</b>', _CNVT.indexOf('총구매액'))); _CNV = _S_TAG(_CNV); _CNV = _CNV.replace(/[^0-9]/g, ''); }; if (document.URL.indexOf('url=Orderresult') > 0) { /* Cafe24 II*/_CNV = (function () { var obj = document.getElementsByTagName('td'); var innerTextLen = -1; var targetK; for (var k in obj) { try { if (innerTextLen < 0) { innerTextLen = obj[k].innerHTML.length; targetK = k; }; if (obj[k].innerHTML.indexOf('총 주문합계 금액') < 0) continue; if (innerTextLen > obj[k].innerHTML.length) { innerTextLen = obj[k].innerHTML.length; targetK = k; }; } catch (_e) { }; }; return (obj[++targetK].innerHTML.replace(/[^0-9]/g, '')); })(); }; if (document.URL.indexOf('order_end.php') > 0) { /* Godomall */var _CNV = _S_TAG('b', '원', 0); _CNV = _CNV.replace(/[^0-9]/g, ''); }; if (typeof ovt_amount != _UD && ovt_amount != '') { _CNV = ovt_amount; }; if (_CNV != '') { _CNM = "구매완료"; }; };
            _je = (navigator.javaEnabled() == true) ? '1' : '0'; _bn = navigator.appName; if (_bn.substring(0, 9) == "Microsoft") _bn = "MSIE"; _bN = (_bn == "Netscape"), _bI = (_bn == "MSIE"), _bO = (_TIX(navigator.userAgent, "Opera") > -1); if (_bO) _bI = ''; if ((_bn == "MSIE") && (parseInt(_bv) == 2)) _bv = 3.01; _rf = document.referrer; var _prl = ''; var _frm = false; function _TPT() { return location.protocol == "https:" ? "https://" + _TGUL : "http://" + _TGUL + ":" + _TGPT }; function _NA(a) { return new Array(a ? a : 0) }; function CTS_PL(a) { if (!_TIL(a)) a = _UL(document.URL); _arg = _TPT() + '/?ouid=' + _TGCD + '&sv=' + _JV + "&FCV=" + _TFCV; _NIU.src = _arg + "&url=" + escape(a) + "&ref=" + escape(_rf) + "&je=" + _je + "&ad_key=" + escape(_Tak) + "&dm=" + _CDM + "&dvt=" + _DVT + "&cnm=" + escape(_CNM) + "&cnv=" + _CNV + "&rft=" + escape(_rft) + "&RID=" + Math.random() + "&"; setTimeout("", 300); };
            if (top && typeof top == 'object' && _TILF(top.frames)) { eval("try{_rl=top.document.URL;}catch(_e){_rl='';};"); if (_rl != document.URL) _frm = true; }; if (_frm) { eval("try{_prl = top.document.URL;}catch(_e){_prl=_bR;};"); if (_prl == '') eval("try{_prl=parent.document.URL;}catch(_e){_prl='';};"); if (_TIX(_prl, '#') > 0) _prl = _prl.substring(0, _TIX(_prl, '#')); _prl = _LST(_prl, '#'); if (_TIX(_rf, '#') > 0) _rf = _rf.substring(0, _TIX(_rf, '#')); _prl = _LST(_prl, '/'); _rf = _LST(_rf, '/'); if (_rf == '') eval("try{_rf=parent.document.URL;}catch(_e){_rf=_bR;}"); if (_rf == _bR || _prl == _bR) { _rf = '', _prl = ''; }; if (_rf == _prl) { eval("try{_rf=top.document.referrer;}catch(_e){_rf='';}"); if (_rf == '') { _rf = 'bookmark'; }; if (_TIX(document.cookie, 'CTSN_CK=' + escape(_rf)) > -1) { _rf = _prl; } else { if (_TIX(_prl, '?') > 0) { _prl = _prl.substring(_TIX(_prl, '?') + 1, _prl.length); }; if (_TIX(_prl, 'NVAR=') >= 0) { _Tak = 'NVAR=' + _TGV(_prl, 'NVAR', '&', '=') + '&NVKWD=' + _TGV(_prl, 'NVKWD', '&', '=') + '&NVADKWD=' + _TGV(_prl, 'NVADKWD', '&', '=') + '&NVADID=' + _TGV(_prl, 'NVADID', '&', '='); }; document.cookie = 'CTSN_CK=' + escape(_rf) + ';path=/;'; }; }; } else { _rf = _LST(_rf, '#'); }; if (document.URL.indexOf('NVAR=') > 0 && (_TIX(_Tak, 'NVAR=') < 0)) { _prl = document.URL.substring(document.URL.indexOf('?') + 1, document.URL.length); _Tak = 'NVAR=' + _TGV(_prl, 'NVAR', '&', '=') + '&NVKWD=' + _TGV(_prl, 'NVKWD', '&', '=') + '&NVADKWD=' + _TGV(_prl, 'NVADKWD', '&', '=') + '&NVADID=' + _TGV(_prl, 'NVADID', '&', '='); }; _rl = document.URL; var _trl = _rl.split('?'); if (_trl.length > 1) { _trl[1] = _XV(_trl[1], 'FWDRL', '&', '=', '_rf'); _rf = unescape(_rf); _fwd = _TGV(_trl[1], 'FWDIDX', '&', '='); _rl = _trl.join('?'); }; if (_RFL != '') _rf = _RFL; _rl = _UL(_rl); _rf = _UL(_rf); if (_rl.length > 1023) _rl = _rl.substring(0, 1023); if (_rf.length > 512) _rf = _rf.substring(0, 512); _CKURL = _TAGC("CTSCKURL"); _CKURLC = _TAGC("CTSCKURLC"); var _DVT = '1'; _rf_dm = _rf.split('/');
            if (_TIX(_Tak, 'NVADID=') >= 0) { _TASC("NVADID", _TGV(_Tak, 'NVADID', '&', '='), 86400 * 365 * 20, _CDM); };
            if (_CKURL != _Tak && _Tak != '' && (_rf_dm.length > 1 && _rf_dm[0].indexOf(_CDM) < 0)) { _TASC("CTSCKURL", _Tak, 86400 * 15, _CDM); }; if (_CKURL != '' && _CKURLC != '' && _CKURLC.substring(0, _CKURL.length) != _CKURL) { if ((_rf_dm.length > 1 && _rf_dm[0].indexOf(_CDM) < 0)) { _CKURLC = _CKURL + _CKURLC.substring(_CKURLC.indexOf('&CTSREF'), _CKURLC.length); _TASC("CTSCKURLC", _CKURLC, 0, _CDM); _DVT = '1'; _TASC("CTSCKDVT", _DVT, 0, _CDM); }; };
            var _CKDVT = _TAGC("CTSCKDVT"); if (_CKDVT != '1') { if (_CKURL != '' && (_CKURLC == '' || _TGV(_CKURLC, 'CTSREF', '&', '=') == '')) { _DVT = '2'; }; if (_Tak != '' && (_rf_dm.length > 1 && _rf_dm[0].length > 1 && _rf_dm[0].indexOf(_CDM) < 0)) _DVT = '1'; _TASC("CTSCKDVT", _DVT, 0, _CDM); } else { _DVT = _CKDVT; }; if (_Tak == '') _Tak = _CKURL; if (_DVT == '1' && _CKURLC == '' && _Tak != '' && (_rf_dm.length > 1 && _rf_dm[0].indexOf(_CDM) < 0)) { _Tak += '&CTSREF=' + _rf; _TASC("CTSCKURLC", _Tak, 0, _CDM); }; if (_CNM != '') { _rft = _TGV(_CKURLC, 'CTSREF', '&', '='); }; if (typeof _rf == _UD || (_rf == '')) _rf = 'bookmark';
            if (_CDM == 'none') { CTS_PL(_rl); } else { if (_Tak != '') CTS_PL(_rl); };
        }
    </script>
    <!-- NHN Conversion Tracking System Gathering Script End -->

    <!-- 일반페이지(랜딩,네비게이션 페이지) 스크립트 설치 네이버  -->
//    <script type="text/javascript">
        try {
            if (!wcs_add) var wcs_add = {};
            wcs_add["wa"] = "s_1422b2dd77be";
            if (!_nao) var _nao = {};
            wcs.inflow("stco.co.kr");
            wcs_do(_nao);
        }
        catch (e) { }
//    </script>
//    <!-- 공통스크립트 끝 -->
//    @{
//        try{
//            if (Request.Path.ToUpper() != "/HOME" && Request.Path.ToUpper() != "/")
//            {
//    <!-- 크리테오 태그 [전체] START -->
//    <script type="text/javascript" src="http://static.criteo.net/js/ld/ld.js" async="true"></script>
//    <!-- 크리테오 태그 [전체] END -->
//            }
//        }catch(Exception ex){}
//    }

//    <!-- adinsight 공통스크립트 start -->
//    <script type="text/javascript">
        var TRS_AIDX = 9397;
        var TRS_PROTOCOL = document.location.protocol;
        document.writeln();
        var TRS_URL = TRS_PROTOCOL + '//' + ((TRS_PROTOCOL == 'https:') ? 'analysis.adinsight.co.kr' : 'adlog.adinsight.co.kr') + '/emnet/trs_esc.js';
        document.writeln("<scr" + "ipt language='javascript' src='" + TRS_URL + "'></scr" + "ipt>");
//    </script>
//    <!-- adinsight 공통스크립트 end -->

    <!-- 구글 애드워드 시작 -->
//    @if (Request.Path.ToUpper() != "/JOIN" && Request.Path.ToUpper() != "/JOINS")
//    {
//    <script type="text/javascript">
    /* <![CDATA[ */
    var google_conversion_id = 939159694;
    var google_custom_params = window.google_tag_params;
    var google_remarketing_only = true;
    /* ]]> */
 //   </script>
 //   <script type="text/javascript" src="http://www.googleadservices.com/pagead/conversion.js">
 //   </script>
//    <noscript>
//    <div style="display:inline;">
//    <img height="1" width="1" style="border-style:none;" alt="" src="http://googleads.g.doubleclick.net/pagead/viewthroughconversion/939159694/?value=0&amp;guid=ON&amp;script=0"/>
//    </div>
//    </noscript>
    }
//    <!-- 구글 애드워드 끝 -->
//    <!-- Withpang Tracker v2.0 start -->
//    <script type="text/javascript">
//    <!--
        (function (w, d, i) {
            w[i] = {
                sc: (encodeURIComponent("")),
                form: (encodeURIComponent(d.referrer)),
                url: (encodeURIComponent(w.location.href))
            };

            if (w[i]) {
                var _ar = _ar || [];
                var _s = "log.dreamsearch.or.kr/servlet/rf";
                for (x in w[i]) _ar.push(x + "=" + w[i][x]);
                (new Image).src = d.location.protocol + "//" + _s + "?" + _ar.join("&");
            }
        })(window, document, "wp_rf");
    //-->
//    </script>
//    <!-- Withpang Tracker v2.0 end  444444444444444444444 -->

 //   <!-- 구글 아날리스틱 -->
//<script>
//    ga('send', 'pageview');
//</script>
//<!-- 구글 아날리스틱 -->

