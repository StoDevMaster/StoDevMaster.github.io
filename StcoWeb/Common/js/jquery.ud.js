/*##############################################################
 Á¦ÀÛÀÚ : ¹ÚÇöÁ¾
 Á¦ÀÛÀÏ½Ã : 2015-02-25
 °¡°İ : ¹«·á~
 Á¦¸ñ : JQUERY¸¦ ÀÌ¿ëÇÑ ÇÑ±¹Çü ÇÃ·Î±×ÀÎ v01
 ³»¿ë : °³¹ßÀÏÀ»ÇÏ¸é¼­ ÆûÀÎÁõÀ» ÇØ¾ßÇÏ´Â °æ¿ì°¡ ¸¹½À´Ï´Ù.
             ÆûÀÎÁõÀ» Á»´õ ½±°Ô ÇÒ¼ö ÀÖ´Â¹æ¼·À» »ı°¢ÇÏ´Ù ÇÏ³ª ¸¸µé°Ô µÇ¾ú³×¿ä.
             Àß»ç¿ëÇØÁÖ½Ã¸é °¨»çÇÏ°Ú½À´Ï´Ù. ºÒÆí»çÇ×Àº ¹®ÀÇÇØÁÖ¼¼¿ä.
             ½Ã°£ÀÌ µÇ´Âµ¥·Î È®ÀÎÈÄ ¼öÁ¤ÇÏ¿© Àç¹èÆ÷ ÇÏ°Ú½À´Ï´Ù~
##############################################################*/
(function ($) {
    $.ud = {
        valid: function (selector, type, message, title) {
            var MSG = new Array();
            MSG["EMPTY"] = "ÇÊ¼öÀÔ·ÂÇ×¸ñÀÔ´Ï´Ù.";
            MSG["MAX"] = "{¹üÀ§} ÀÌÇÏ·Î ÀÔ·ÂÇØÁÖ¼¼¿ä.";
            MSG["MIN"] = "{¹üÀ§} ÀÌ»ó ÀÔ·ÂÇØÁÖ¼¼¿ä.";
            MSG["LEN"] = "{¹üÀ§} ·Î ÀÔ·ÂÇØÁÖ¼¼¿ä.";
            MSG["BAX"] = "{¹üÀ§} ÀÌÇÏ·Î ÀÔ·ÂÇØÁÖ¼¼¿ä.";
            MSG["BIN"] = "{¹üÀ§} ÀÌ»ó ÀÔ·ÂÇØÁÖ¼¼¿ä.";
            MSG["BITE"] = "{¹üÀ§} ·Î ÀÔ·ÂÇØÁÖ¼¼¿ä.";
            MSG["ENG"] = "¿µ¹®À¸·Î¸¸ ÀÔ·ÂÇØÁÖ¼¼¿ä.";
            MSG["NUM"] = "¼ıÀÚ·Î¸¸ ÀÔ·ÂÇØÁÖ¼¼¿ä.";
            MSG["KOR"] = "ÇÑ±Û¸¸ ÀÔ·ÂÇØÁÖ¼¼¿ä.";
            MSG["ENG+NUM"] = "¿µ¹®¶Ç´Â¼ıÀÚ·Î¸¸ ÀÔ·ÂÇØÁÖ¼¼¿ä.";
            MSG["ENG*NUM"] = "¿µ¹®,¼ıÀÚ µÑ´ÙÆ÷ÇÔµÇ°Ô ÀÔ·ÂÇØÁÖ¼¼¿ä.";
            MSG["DATE"] = "³¯Â¥Çü½ÄÀ¸·Î ÀÔ·ÂÇØÁÖ¼¼¿ä.";
            MSG["EMAIL"] = "ÀÌ¸ŞÀÏÇü½ÄÀ¸·Î ÀÔ·ÂÇØÁÖ¼¼¿ä.";
            MSG["HP"] = "ÇÚµåÆùÇü½ÄÀ¸·Î ÀÔ·ÂÇØÁÖ¼¼¿ä.";
            MSG["TEL"] = "ÀüÈ­¹øÈ£Çü½ÄÀ¸·Î ÀÔ·ÂÇØÁÖ¼¼¿ä.";
            MSG["EQUALS"] = "°ªÀÌ µ¿ÀÏÇÏÁö¾Ê½À´Ï´Ù.";

            //¼¿·ºÅÍº° Ã¼Å©
            var objSplit = selector.split(",");
            for (var iCnt = 0; iCnt < objSplit.length; iCnt++) {
                //Å¸ÀÔº°·Î ÀÎÁõ°Ë»ö
                var typeSplit = type.split(",");
                for (var jCnt = 0; jCnt < typeSplit.length; jCnt++) {
                    //°°Àº°ªÀÎÁö È®ÀÎÇÏ´Â ·ÎÁ÷Àº ¿©±â¼­ Ã³¸®ÇÑ´Ù.
                    if (typeSplit[jCnt] == "EQUALS") {
                        //°´Ã¼°¡ 2°³°¡ ¼³Á¤µÇÁö ¾ÊÀ¸¸é ¹«½ÃÇÏ°í ³ª°£´Ù.
                        if (objSplit.length < 2) { return false; }
                        if ($(objSplit[0]).val() != $(objSplit[1]).val()) {
                            showMsg("EQUALS", objSplit[1], message, title);
                            return true;
                        }
                    }
                    else if (chkValid(typeSplit[jCnt], objSplit[iCnt], message, title)) {
                        return true;
                    }
                }
            }
            return false;

            //Å¸ÀÔº°Ã¼Å©
            function chkValid(t, s, m, tit) {
                var val = "";
                //°ªÀ» ´õÇØ¼­ Ã³¸®ÇØ¾ßÇÒ°æ¿ì EMAIL,HPµîµî
                if (s.indexOf("+") >= 0) {
                    var tList = s.split("+");
                    for (var i = 0; i < tList.length; i++) {
                        //¼¿·ºÅÍ°¡¾Æ´Ñ ÀÏ¹İ ÅØ½ºÆ®ÀÎ°æ¿ì
                        if (tList[i].indexOf("{") >= 0 && tList[i].indexOf("}") >= 0) {
                            val = val + tList[i].replace("{", "").replace("}", "");
                        } else {
                            val = val + $(tList[i]).val();
                        }
                    }
                } else {
                    val = $(s).val();
                }

                //Å¸ÀÔ´ë¹®ÀÚ·Î º¯°æ.
                t = t.toUpperCase();
                //ºó°ª È®ÀÎ
                if (t == "EMPTY") {
                    //Å¸ÀÔº°·Î ÇÊ¼ö°ª È®ÀÎ(¶óµğ¿À,Ã¼Å©¹Ú½º,ÀÎÇ²,¼¿·ºÆ®¹Ú½º)
					var starget = "";
					if(s.indexOf("+") >=0){
						starget = s.split("+")[0];
					}else{
						starget = s;
					}
					if($(starget).attr('type')!=undefined){
	                    if ($(starget).attr('type').toUpperCase() == "RADIO" || $(starget).attr('type').toUpperCase() == "CHECKBOX") {
	                        if (!$(s).is(":checked")) {
	                            showMsg(t, starget, m, tit);
	                            return true;
	                        }
	                    } else {
	                        if (val == "" || val == "-" || val == "--") {
	                            showMsg(t, s, m, tit);
	                            return true;
	                        }
	                    }
                    }else{
                    	if (val == "" || val == "-" || val == "--") {
                            showMsg(t, s, m, tit);
                            return true;
                        }
                    }
                }
                //ÃÖ¼ÒLENGTH È®ÀÎ
                if (t.indexOf("MIN") >= 0) {
                    var min = t.replace("MIN", "").replace("(", "").replace(")", "");
                    if (minLen(val, min)) {
                        showMsg("MIN", s, m, tit, min + "ÀÚ");
                        return true;
                    } else {
                        return false;
                    }
                }
                //ÃÖ´ëLENGTH È®ÀÎ
                if (t.indexOf("MAX") >= 0) {
                    var max = t.replace("MAX", "").replace("(", "").replace(")", "");
                    if (maxLen(val, max)) {
                        showMsg("MAX", s, m, tit, max + "ÀÚ");
                        return true;
                    } else {
                        return false;
                    }
                }
                //ÃÖ´ë,ÃÖ¼Ò LENGTH È®ÀÎ
                if (t.indexOf("LEN") >= 0) {
                    var len = t.replace("LEN", "").replace("(", "").replace(")", "");
                    var min = len.split("-")[0];
                    var max = len.split("-")[1];
                    if (minLen(val, min) || maxLen(val, max)) {
                        showMsg("LEN", s, m, tit, len + "ÀÚ");
                        return true;
                    }
                    return false;
                }
                //ÃÖ¼ÒBITE È®ÀÎ
                if (t.indexOf("BIN") >= 0) {
                    var min = t.replace("BIN", "").replace("(", "").replace(")", "");
                    if (minBites(val, min)) {
                        showMsg("BIN", s, m, tit, min + "Byte");
                        return true;
                    } else {
                        return false;
                    }
                }
                //ÃÖ´ëBITE È®ÀÎ
                if (t.indexOf("BAX") >= 0) {
                    var max = t.replace("BAX", "").replace("(", "").replace(")", "");
                    if (maxBites(val, max)) {
                        showMsg("BAX", s, m, tit, max + "Byte");
                        return true;
                    } else {
                        return false;
                    }
                }
                //ÃÖ´ë,ÃÖ¼Ò LENGTH È®ÀÎ
                if (t.indexOf("BITE") >= 0) {
                    var len = t.replace("BITE", "").replace("(", "").replace(")", "");
                    var min = len.split("-")[0];
                    var max = len.split("-")[1];
                    if (minBites(val, min) || maxBites(val, max)) {
                        showMsg("BITE", s, m, tit, len + "Byte");
                        return true;
                    }
                    return false;
                }
                //¿µ¹®È®ÀÎ
                if (t == "ENG") {
                    if (isEng(val)) {
                        showMsg(t, s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //¼ıÀÚÈ®ÀÎ
                if (t == "NUM") {
                    if (isNum(val)) {
                        showMsg(t, s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //ÇÑ±ÛÈ®ÀÎ
                if (t == "KOR") {
                    if (isKor(val)) {
                        showMsg(t, s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //¿µ¹®+¼ıÀÚ(µÑÁßÇÏ³ª¸éµÊ) È®ÀÎ
                if (t == "ENG+NUM" || t == "NUM+ENG") {
                    if (isEngOrNum(val)) {
                        showMsg("ENG+NUM", s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //¿µ¹®*¼ıÀÚ(µÑ´Ùµé¾î°¡¾ÆÁt)È®ÀÎ
                if (t == "ENG*NUM" || t == "NUM*ENG") {
                    if (isEngNum(val)) {
                        showMsg("ENG*NUM", s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //YYYY-MM-DD ³¯Â¥Çü½ÄÀÎÁöÈ®ÀÎ
                if (t == "DATE") {
                    if (isDate(val)) {
                        showMsg(t, s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }

                //ÀÌ¸ŞÀÏÇü½Ä È®ÀÎ
                if (t == "EMAIL") {
                    if (isEmail(val)) {
                        showMsg(t, s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //ÇÚÆù¹øÈ£Çü½Ä È®ÀÎ
                if (t == "HP" || t == "HP-") {
                    if (isHp(val, t)) {
                        showMsg("HP", s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //ÀüÈ­¹øÈ£ È®ÀÎ
                if (t == "TEL" || t == "TEL-") {
                    if (isTel(val, t)) {
                        showMsg("TEL", s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                
                return false;
            };

            //¼ıÀÚÀÎÁö È®ÀÎ
            function isNum(v) {
            	if(v=="") return false;
                var regx = /^[0-9]*$/;
                if (!regx.test(v)) {
                    return true;
                } else {
                    return false;
                }
            };

            //¿µ¹®ÀÎÁö È®ÀÎ
            function isEng(v) {
            	if(v=="") return false;
                var regx = /^[a-zA-Z]*$/;
                if (!regx.test(v)) {
                    return true;
                } else {
                    return false;
                }
            };

            //¿µ¹® * ¼ıÀÚÀÎÁö È®ÀÎ
            function isEngNum(v) {
            	if(v=="") return false;
                var chk_num = v.search(/[0-9]/g);
                var chk_eng = v.search(/[a-z]/ig);
                if (chk_num >= 0 && chk_eng >= 0) {
                    return false;
                }
                return true;
            };

            //¿µ¹® + ¼ıÀÚÀÎÁö È®ÀÎ
            function isEngOrNum(v) {
            	if(v=="") return false;
                var regx = /^[a-zA-Z0-9]*$/;
                if (!regx.test(v)) {
                    return true;
                } else {
                    return false;
                }
            };

            //ÇÑ±ÛÀÎÁö È®ÀÎ
            function isKor(v) {
            	if(v=="") return false;
                var regx = /^[°¡-ÆR]+$/;
                if (!regx.test(v)) {
                    return true;
                } else {
                    return false;
                }
            };

            //³¯Â¥Çü½Ä YYYY-MM-DD È®ÀÎ
            function isDate(v) {
            	if(v=="") return false;
                var regx = /^([0-9]{4})-([0-9]{2})-([0-9]{2}$)/g;
                if (!regx.test(v)) {
                    return true;
                } else {
                    return false;
                }
            };

            //ÀÌ¸ŞÀÏÇü½ÄÀÎÁö È®ÀÎ
            function isEmail(v) {
            	if(v=="" || v=="@") return false;
                var regx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
                if (regx.test(v) === false) {
                    return true;
                } else {
                    return false;
                }
            };

            //ÈŞ´ëÆù ¹øÈ£ÀÎÁö È®ÀÎ
            function isHp(v, type) {
            	if(v=="" || v=="-" || v=="--") return false;
                if (type == "HP-") {
                    var regx = /^01[016789]-\d{3,4}-\d{4}$/g;
                    if (!regx.test(v)) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    var regx = /^01[016789]\d{3,4}\d{4}$/g;
                    if (!regx.test(v)) {
                        return true;
                    } else {
                        return false;
                    }
                }
            };

            //ÀüÈ­¹øÈ£ ÀÎÁö È®ÀÎ
            function isTel(v, type) {
            	if(v=="" || v=="-" || v=="--") return false;
                if (type == "TEL-") {
                    var telno_regx = /^\d{2,3}-\d{3,4}-\d{4}$/;
                    if (!telno_regx.test(v)) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    var telno_regx = /^\d{2,3}\d{3,4}\d{4}$/;
                    if (!telno_regx.test(v)) {
                        return true;
                    } else {
                        return false;
                    }
                }
            };

            //¸Æ½º LENGTH Ã¼Å© ÇÔ¼ö
            function maxLen(v, len) {
                if (len < v.length) {
                    return true;
                } else {
                    return false;
                }
            };

            //MIN LENGTH Ã¼Å© ÇÔ¼ö
            function minLen(v, len) {
                if (len > v.length) {
                    return true;
                } else {
                    return false;
                }
            };

            //¸Æ½º BITES Ã¼Å©
            function maxBites(v, len) {
                var size = GetBytes(v);
                if (size > len) {
                    return true;
                } else {
                    return false;
                }
            };

            //ÃÖ¼Ò BITES Ã¼Å©
            function minBites(v, len) {
                var size = GetBytes(v);
                if (size < len) {
                    return true;
                } else {
                    return false;
                }
            };

            //¸Ş¼¼ÁöÃâ·Â
            function showMsg(t, s, m, tt, o) {
                var starget = "";
				if(s.indexOf("+") >=0){
					starget = s.split("+")[0];
				}else{
					starget = s;
				}
                
                if (m != undefined && m != "") {
                    //alert(m);
                    $(starget).focus();
                } else {
                    //if (tt != undefined && tt != "") {
                    //    alert(tt + " " + MSG[t].replace("{¹üÀ§}", o));
                    //} else {
                    //    alert(MSG[t].replace("{¹üÀ§}", o));
                    //}
                    $(starget).focus();
                }
            };

            function GetBytes(v) {
                var nbytes = 0;
                for (i = 0; i < v.length; i++) {
                    var ch = v.charAt(i);
                    if (escape(ch).length > 4) {
                        nbytes += 2;
                    } else if (ch == '\n') {
                        if (v.charAt(i - 1) != '\r') {
                            nbytes += 1;
                        }
                    } else if (ch == '<' || ch == '>') {
                        nbytes += 4;
                    } else {
                        nbytes += 1;
                    }
                }
                return nbytes;
            };

            //°´Ã¼È®ÀÎ
            function isObj(o) {
                if (o == undefined) return true;
                else return false;
            };

            //µğ¹ö±ë ·Î±× Ãâ·Â
            function setLog(v) {
                console.log(v);
            };
        }
    }; //ud

    //ºó°ªÈ®ÀÎ
    $.fn.empty = function (options) {
        if ($(this).val() == "") {
            return true;
        } else {
            return false;
        }
    }; //

    //¼ıÀÚ¸¸¹Ş±â
    $.fn.onlyNum = function (options) {
        return this.each(function () {
            try {
                var $this = $(this);
                $this.css('ime-mode', 'disabled');
                $this.keydown(function (e) {
                    var keycode = e.keyCode;
                    var isShift = e.shiftKey ? true : false;
                    //Å°ÄÚµå È®ÀÎ(TAB,DELETE) + Å°ÄÚµå°ª Ãß°¡ÇÏ¸é Çã¿ëµÊ.
                    if (!isShift && (keycode == 8 || keycode == 9 || (keycode >= 35 && keycode <= 40) || (keycode >= 46 && keycode <= 57) || (keycode >= 96 && keycode <= 105) || keycode == 110 || keycode == 190)) {
                        return true;
                    } else {
                        return false;
                    }
                });
            } catch (e) {
                alert("[numberFormat] " + e.description);
            }
        });
    }; //$.fn.onlyNum

    //¿µ¹®ÀÚ¸¸¹Ş±â
    $.fn.onlyEng = function (options) {
        return this.each(function () {
            try {
                var $this = $(this);
                $this.css('ime-mode', 'disabled');
                $this.keydown(function (e) {
                    var keycode = e.keyCode;
                    //Å°ÄÚµå È®ÀÎ(TAB,DELETE)
                    if (keycode == 8 || keycode == 9 || (keycode >= 65 && keycode <= 90) || (keycode >= 96 && keycode <= 105) || keycode == 110 || keycode == 190) {
                        return true;
                    } else {
                        return false;
                    }
                });
            } catch (e) {
                alert("[numberFormat] " + e.description);
            }
        });
    }; //$.fn.onlyEng

    //¼ıÀÚ+¿µ¹®ÀÚ¸¸¹Ş±â
    $.fn.onlyEngNum = function (options) {
        return this.each(function () {
            try {
                var $this = $(this);
                $this.css('ime-mode', 'disabled');
                $this.keydown(function (e) {
                    var keycode = e.keyCode;
                    var isShift = e.shiftKey ? true : false;
                    if (!isShift && (keycode == 8 || keycode == 9 || (keycode >= 35 && keycode <= 40) || (keycode >= 46 && keycode <= 57) || (keycode >= 96 && keycode <= 105) || keycode == 110 || keycode == 190) || (keycode >= 65 && keycode <= 90)) {
                        return true;
                    } else {
                        return false;
                    }
                });
            } catch (e) {
                alert("[numberFormat] " + e.description);
            }
        });
    }; //$.fn.onlyEngNum
})(jQuery);