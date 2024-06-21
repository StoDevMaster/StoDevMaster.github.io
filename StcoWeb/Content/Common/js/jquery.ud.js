/*##############################################################
 ������ : ������
 �����Ͻ� : 2015-02-25
 ���� : ����~
 ���� : JQUERY�� �̿��� �ѱ��� �÷α��� v01
 ���� : ���������ϸ鼭 �������� �ؾ��ϴ� ��찡 �����ϴ�.
             �������� ���� ���� �Ҽ� �ִ¹漷�� �����ϴ� �ϳ� ����� �Ǿ��׿�.
             �߻�����ֽø� �����ϰڽ��ϴ�. ��������� �������ּ���.
             �ð��� �Ǵµ��� Ȯ���� �����Ͽ� ����� �ϰڽ��ϴ�~
##############################################################*/
(function ($) {
    $.ud = {
        valid: function (selector, type, message, title) {
            var MSG = new Array();
            MSG["EMPTY"] = "�ʼ��Է��׸��Դϴ�.";
            MSG["MAX"] = "{����} ���Ϸ� �Է����ּ���.";
            MSG["MIN"] = "{����} �̻� �Է����ּ���.";
            MSG["LEN"] = "{����} �� �Է����ּ���.";
            MSG["BAX"] = "{����} ���Ϸ� �Է����ּ���.";
            MSG["BIN"] = "{����} �̻� �Է����ּ���.";
            MSG["BITE"] = "{����} �� �Է����ּ���.";
            MSG["ENG"] = "�������θ� �Է����ּ���.";
            MSG["NUM"] = "���ڷθ� �Է����ּ���.";
            MSG["KOR"] = "�ѱ۸� �Է����ּ���.";
            MSG["ENG+NUM"] = "�����Ǵ¼��ڷθ� �Է����ּ���.";
            MSG["ENG*NUM"] = "����,���� �Ѵ����Եǰ� �Է����ּ���.";
            MSG["DATE"] = "��¥�������� �Է����ּ���.";
            MSG["EMAIL"] = "�̸����������� �Է����ּ���.";
            MSG["HP"] = "�ڵ����������� �Է����ּ���.";
            MSG["TEL"] = "��ȭ��ȣ�������� �Է����ּ���.";
            MSG["EQUALS"] = "���� ���������ʽ��ϴ�.";

            //�����ͺ� üũ
            var objSplit = selector.split(",");
            for (var iCnt = 0; iCnt < objSplit.length; iCnt++) {
                //Ÿ�Ժ��� �����˻�
                var typeSplit = type.split(",");
                for (var jCnt = 0; jCnt < typeSplit.length; jCnt++) {
                    //���������� Ȯ���ϴ� ������ ���⼭ ó���Ѵ�.
                    if (typeSplit[jCnt] == "EQUALS") {
                        //��ü�� 2���� �������� ������ �����ϰ� ������.
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

            //Ÿ�Ժ�üũ
            function chkValid(t, s, m, tit) {
                var val = "";
                //���� ���ؼ� ó���ؾ��Ұ�� EMAIL,HP���
                if (s.indexOf("+") >= 0) {
                    var tList = s.split("+");
                    for (var i = 0; i < tList.length; i++) {
                        //�����Ͱ��ƴ� �Ϲ� �ؽ�Ʈ�ΰ��
                        if (tList[i].indexOf("{") >= 0 && tList[i].indexOf("}") >= 0) {
                            val = val + tList[i].replace("{", "").replace("}", "");
                        } else {
                            val = val + $(tList[i]).val();
                        }
                    }
                } else {
                    val = $(s).val();
                }

                //Ÿ�Դ빮�ڷ� ����.
                t = t.toUpperCase();
                //�� Ȯ��
                if (t == "EMPTY") {
                    //Ÿ�Ժ��� �ʼ��� Ȯ��(����,üũ�ڽ�,��ǲ,����Ʈ�ڽ�)
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
                //�ּ�LENGTH Ȯ��
                if (t.indexOf("MIN") >= 0) {
                    var min = t.replace("MIN", "").replace("(", "").replace(")", "");
                    if (minLen(val, min)) {
                        showMsg("MIN", s, m, tit, min + "��");
                        return true;
                    } else {
                        return false;
                    }
                }
                //�ִ�LENGTH Ȯ��
                if (t.indexOf("MAX") >= 0) {
                    var max = t.replace("MAX", "").replace("(", "").replace(")", "");
                    if (maxLen(val, max)) {
                        showMsg("MAX", s, m, tit, max + "��");
                        return true;
                    } else {
                        return false;
                    }
                }
                //�ִ�,�ּ� LENGTH Ȯ��
                if (t.indexOf("LEN") >= 0) {
                    var len = t.replace("LEN", "").replace("(", "").replace(")", "");
                    var min = len.split("-")[0];
                    var max = len.split("-")[1];
                    if (minLen(val, min) || maxLen(val, max)) {
                        showMsg("LEN", s, m, tit, len + "��");
                        return true;
                    }
                    return false;
                }
                //�ּ�BITE Ȯ��
                if (t.indexOf("BIN") >= 0) {
                    var min = t.replace("BIN", "").replace("(", "").replace(")", "");
                    if (minBites(val, min)) {
                        showMsg("BIN", s, m, tit, min + "Byte");
                        return true;
                    } else {
                        return false;
                    }
                }
                //�ִ�BITE Ȯ��
                if (t.indexOf("BAX") >= 0) {
                    var max = t.replace("BAX", "").replace("(", "").replace(")", "");
                    if (maxBites(val, max)) {
                        showMsg("BAX", s, m, tit, max + "Byte");
                        return true;
                    } else {
                        return false;
                    }
                }
                //�ִ�,�ּ� LENGTH Ȯ��
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
                //����Ȯ��
                if (t == "ENG") {
                    if (isEng(val)) {
                        showMsg(t, s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //����Ȯ��
                if (t == "NUM") {
                    if (isNum(val)) {
                        showMsg(t, s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //�ѱ�Ȯ��
                if (t == "KOR") {
                    if (isKor(val)) {
                        showMsg(t, s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //����+����(�����ϳ����) Ȯ��
                if (t == "ENG+NUM" || t == "NUM+ENG") {
                    if (isEngOrNum(val)) {
                        showMsg("ENG+NUM", s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //����*����(�Ѵٵ����t)Ȯ��
                if (t == "ENG*NUM" || t == "NUM*ENG") {
                    if (isEngNum(val)) {
                        showMsg("ENG*NUM", s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //YYYY-MM-DD ��¥��������Ȯ��
                if (t == "DATE") {
                    if (isDate(val)) {
                        showMsg(t, s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }

                //�̸������� Ȯ��
                if (t == "EMAIL") {
                    if (isEmail(val)) {
                        showMsg(t, s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //������ȣ���� Ȯ��
                if (t == "HP" || t == "HP-") {
                    if (isHp(val, t)) {
                        showMsg("HP", s, m, tit);
                        return true;
                    } else {
                        return false;
                    }
                }
                //��ȭ��ȣ Ȯ��
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

            //�������� Ȯ��
            function isNum(v) {
            	if(v=="") return false;
                var regx = /^[0-9]*$/;
                if (!regx.test(v)) {
                    return true;
                } else {
                    return false;
                }
            };

            //�������� Ȯ��
            function isEng(v) {
            	if(v=="") return false;
                var regx = /^[a-zA-Z]*$/;
                if (!regx.test(v)) {
                    return true;
                } else {
                    return false;
                }
            };

            //���� * �������� Ȯ��
            function isEngNum(v) {
            	if(v=="") return false;
                var chk_num = v.search(/[0-9]/g);
                var chk_eng = v.search(/[a-z]/ig);
                if (chk_num >= 0 && chk_eng >= 0) {
                    return false;
                }
                return true;
            };

            //���� + �������� Ȯ��
            function isEngOrNum(v) {
            	if(v=="") return false;
                var regx = /^[a-zA-Z0-9]*$/;
                if (!regx.test(v)) {
                    return true;
                } else {
                    return false;
                }
            };

            //�ѱ����� Ȯ��
            function isKor(v) {
            	if(v=="") return false;
                var regx = /^[��-�R]+$/;
                if (!regx.test(v)) {
                    return true;
                } else {
                    return false;
                }
            };

            //��¥���� YYYY-MM-DD Ȯ��
            function isDate(v) {
            	if(v=="") return false;
                var regx = /^([0-9]{4})-([0-9]{2})-([0-9]{2}$)/g;
                if (!regx.test(v)) {
                    return true;
                } else {
                    return false;
                }
            };

            //�̸����������� Ȯ��
            function isEmail(v) {
            	if(v=="" || v=="@") return false;
                var regx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
                if (regx.test(v) === false) {
                    return true;
                } else {
                    return false;
                }
            };

            //�޴��� ��ȣ���� Ȯ��
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

            //��ȭ��ȣ ���� Ȯ��
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

            //�ƽ� LENGTH üũ �Լ�
            function maxLen(v, len) {
                if (len < v.length) {
                    return true;
                } else {
                    return false;
                }
            };

            //MIN LENGTH üũ �Լ�
            function minLen(v, len) {
                if (len > v.length) {
                    return true;
                } else {
                    return false;
                }
            };

            //�ƽ� BITES üũ
            function maxBites(v, len) {
                var size = GetBytes(v);
                if (size > len) {
                    return true;
                } else {
                    return false;
                }
            };

            //�ּ� BITES üũ
            function minBites(v, len) {
                var size = GetBytes(v);
                if (size < len) {
                    return true;
                } else {
                    return false;
                }
            };

            //�޼������
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
                    //    alert(tt + " " + MSG[t].replace("{����}", o));
                    //} else {
                    //    alert(MSG[t].replace("{����}", o));
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

            //��üȮ��
            function isObj(o) {
                if (o == undefined) return true;
                else return false;
            };

            //����� �α� ���
            function setLog(v) {
                console.log(v);
            };
        }
    }; //ud

    //��Ȯ��
    $.fn.empty = function (options) {
        if ($(this).val() == "") {
            return true;
        } else {
            return false;
        }
    }; //

    //���ڸ��ޱ�
    $.fn.onlyNum = function (options) {
        return this.each(function () {
            try {
                var $this = $(this);
                $this.css('ime-mode', 'disabled');
                $this.keydown(function (e) {
                    var keycode = e.keyCode;
                    var isShift = e.shiftKey ? true : false;
                    //Ű�ڵ� Ȯ��(TAB,DELETE) + Ű�ڵ尪 �߰��ϸ� ����.
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

    //�����ڸ��ޱ�
    $.fn.onlyEng = function (options) {
        return this.each(function () {
            try {
                var $this = $(this);
                $this.css('ime-mode', 'disabled');
                $this.keydown(function (e) {
                    var keycode = e.keyCode;
                    //Ű�ڵ� Ȯ��(TAB,DELETE)
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

    //����+�����ڸ��ޱ�
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