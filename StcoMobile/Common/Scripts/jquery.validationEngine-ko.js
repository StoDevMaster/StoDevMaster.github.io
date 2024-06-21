

(function($) {
	$.fn.validationEngineLanguage = function() {};
	$.validationEngineLanguage = {
		newLang: function() {
			$.validationEngineLanguage.allRules = {"required":{    
						"regex":"none",
						"alertText":"* 필수입력 항목입니다",
						"alertTextCheckboxMultiple":"* 항목을 선택하세요",
						"alertTextCheckboxe":"* 필수선택 항목입니다"},
					"length":{
						"regex":"none",
						"alertText":"* ",
						"alertText2":" ~ ",
						"alertText3":"자를 입력하세요"},
					"maxCheckbox":{
						"regex":"none",
						"alertText":"* 선택범위 초과"},	
					"minCheckbox":{
						"regex":"none",
						"alertText":"* 항목을 선택하세요 ",
						"alertText2":" 선택"},		
					"confirm":{
						"regex":"none",
						"alertText":"* 확인이 일치하지 않습니다"},		
					"telephone":{
						"regex":"/^[0-9\-\(\)\ ]+$/",
						"alertText":"* 잘못된 전화번호입니다"},	
					"email":{
						"regex":"/^[a-zA-Z0-9_\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$/",
						"alertText":"* 잘못된 이메일입니다"},	
					"date":{
                         "regex":"/^[0-9]{4}\-\[0-9]{1,2}\-\[0-9]{1,2}$/",
                         "alertText":"* YYYY-MM-DD 형식으로 입력하세요"},
					"onlyNumber":{
						"regex":"/^[0-9\ ]+$/",
						"alertText":"* 숫자만 입력하세요"},	
					"noSpecialCaracters":{
						"regex":"/^[0-9a-zA-Z]+$/",
						"alertText": "* 특수문자 사용할수 없습니다"},
		            "CombineAN": {
		                "regex": "/^(?=.+[a-z])(?=.+[0-9]).{6,12}$/",
		                "alertText": "* 아이디는 영문 숫자 조합 으로 등록하셔야 합니다."},
		            "CombineANPASS": {
		                "regex": "/^(?=.+[a-z])(?=.+[0-9]).{8,12}$/",
		                "alertText": "* 패스워드는 영문 숫자 조합 으로 등록하셔야 합니다."},	
					"onlyLetter":{
						"regex":"/^[a-zA-Z\ \']+$/",
						"alertText":"* 문자만 입력하세요"},				
					"ajaxUser":{
					    "file": "/Join/idcheck",
						"alertTextOk":"* 사용이 가능합니다",	
						"alertTextLoad":"* 잠시만 기다려주세요",
						"alertText":"* 이미 아이디가 존재합니다.사용할수 없습니다"},
		            "ajaxPassword": {
		                "file": "/inc_/PasswordCheck.aspx",
		                "alertTextOk": "* 패스워드가 일치합니다.",
		                "alertTextLoad": "* 잠시만 기다려주세요.",
		                "alertText": "* 패스워드가 틀렸습니다."
		            }		
/*						
					"ajaxName":{
						"file":member_skin_path + "/ajax_register_form.php",
						"alertText":"* 코드가 맞지 않습니다",
						"alertTextOk":"* 코드가 정확합니다",	
						"alertTextLoad":"* 잠시만 기다려주세요"}	*/
				}	
		}
	}
})(jQuery);

$(document).ready(function() {	
	$.validationEngineLanguage.newLang()
});