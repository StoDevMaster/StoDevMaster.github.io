(function (root, $) {

	// You can use a JSON file to store your content or
	// if you want dynamic content you can use Underscore.js/Handlebars.js templates.
	// Just try to keep your HTML out of your JS files.
	var contents = {
		// 메인배너1
		m01_item01: [//니즈사각바구니 L
			'<a href="/detail/index/RDBFZ91ZZI"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon01.png" /></a>'
		].join(''),
		m01_item02: [//브로디스툴 L
			'<a href="/detail/index/RCOFZ50ZZB"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon02.png" /></a>'
		].join(''),
		m01_item03: [//브로디스툴 S
			'<a href="/detail/index/RCOFZ26SET"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon03.png" /></a>'
		].join(''),
		// 메인배너2
		m02_item01: [//딜리스3칸서랍장
			'<a href="/detail/index/RHSFZ24ZZC"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon21.png" /></a>'
		].join(''),
		m02_item02: [//딜리스4칸서랍장
			'<a href="/detail/index/RHSFZ25ZZC"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon22.png" /></a>'
		].join(''),
		m02_item03: [//딜리스5칸서랍장
			'<a href="/detail/index/RHSFZ26ZZC"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon23.png" /></a>'
		].join(''),
		m02_item04: [//비앙카서랍장
			'<a href="/detail/index/RHSEZ11SET"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon24.png" /></a>'
		].join(''),
		// 메인배너3
		m03_item01: [//헤티스툴
			'<a href="/detail/index/RCOFZ17SET"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon31.png" /></a>'
		].join(''),
		m03_item02: [//로티스툴
			'<a href="/detail/index/RCOFZ51ZZP"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon32.png" /></a>'
		].join(''),
		m03_item03: [//착한선반장 4단와이드
			'<a href="/detail/index/RHBFZ55ZZK"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon33.png" /></a>'
		].join(''),
		m03_item04: [//착한선반장 4단
			'<a href="/detail/index/RHBFZ54ZZK"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon34.png" /></a>'
		].join(''),
		// 메인배너4
		m04_item01: [//로만사각벽시계
			'<a href="/detail/index/RDWFZ05ZZW"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon41.png" /></a>'
		].join(''),
		m04_item02: [//보노접이식테이블
			'<a href="/detail/index/RTIFZ10ZZC"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon42.png" /></a>'
		].join(''),
		m04_item03: [//레일라벽시계
			'<a href="/detail/index/RDWFZ04ZZB"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon43.png" /></a>'
		].join(''),
		m04_item04: [ //모네접이식원목의자
			'<a href="/detail/index/RCPFZ05ZZK"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon44.png" /></a>'
		].join(''),
		// 메인배너5
		m05_item01: [//브로디스툴 L
			'<a href="/detail/index/RCOFZ50ZZB"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon51.png" /></a>'
		].join(''),
		m05_item02: [//카일원목좌식테이블
			'<a href="/detail/index/RTFFZ09ZZZ"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon52.png" /></a>'
		].join(''),
		m05_item03: [//비앙카서랍장
			'<a href="/detail/index/RHSEZ11SET"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon53.png" /></a>'
		].join(''),
		m05_item04: [//엘린사각바스켓
			'<a href="/detail/index/RDBFZ97ZZR"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon54.png" /></a>'
		].join(''),
		m05_item05: [//헤티스툴
			'<a href="/detail/index/RCOFZ27SET"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon55.png" /></a>'
		].join(''),
		// 메인배너6
		m06_item01: [
			'<a href="/detail/index/RTIFZ08SET"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon61.png" /></a>'
		].join(''),
		m06_item02: [
			'<a href="/detail/index/RCOFZ17SET"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon62.png" /></a>'
		].join(''),
		m06_item03: [
			'<a href="/detail/index/RHSEZ11SET"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon63.png" /></a>'
		].join(''),
		m06_item04: [//엘린사각바스켓
			'<a href="/detail/index/RDBFZ97ZZR"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon64.png" /></a>'
		].join(''),
		// 메인배너7
		m07_item01: [//마이린넨바스켓L
			'<a href="/detail/index/RDBFZ96ZZW"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon71.png" /></a>'
		].join(''),
		m07_item02: [//슬림선반 2단
			'<a href="/detail/index/RHBFZ60ZZC"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon72.png" /></a>'
		].join(''),
		m07_item03: [//엘린사각바스켓
			'<a href="/detail/index/RDBFZ97ZZR"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon73.png" /></a>'
		].join(''),
		m07_item04: [//슬림선반 3단
			'<a href="/detail/index/RHBFZ61ZZM"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon74.png" /></a>'
		].join(''),
		m07_item05: [//마이린넨바스켓S
			'<a href="/detail/index/RDBFZ95SET"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon75.png" /></a>'
		].join(''),
		// 메인배너8
		m08_item01: [//니즈사각바구니
			'<a href="/detail/index/RDBEZ90ZZV"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon81.png" /></a>'
		].join(''),
		m08_item02: [//착한선반장 4단와이드
			'<a href="/detail/index/RHBFZ55ZZK"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon82.png" /></a>'
		].join(''),
		m08_item03: [//착한선반장 4단
			'<a href="/detail/index/RHBFZ54ZZK"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon83.png" /></a>'
		].join(''),
		m08_item04: [//착한선반장 2단와이드
			'<a href="/detail/index/RHBFZ58ZZK"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon84.png" /></a>'
		].join(''),
		m08_item05: [//착한선반장 3단와이드
			'<a href="/detail/index/RHBFZ59ZZK"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon85.png" /></a>'
		].join(''),
		m08_item06: [//착한선반장 3단
			'<a href="/detail/index/RHBFZ57ZZK"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon86.png" /></a>'
		].join(''),
		m08_item07: [//미니화장대의자
			'<a href="/detail/index/RCPFZ06ZZI"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon87.png" /></a>'
		].join(''),
		m08_item08: [//헤티스툴
			'<a href="/detail/index/RCOFZ17SET"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon88.png" /></a>'
		].join(''),
		// 메인배너9
		m09_item01: [//카일원목좌식테이블
			'<a href="/detail/index/RTFFZ09ZZZ"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon91.png" /></a>'
		].join(''),
		m09_item02: [//엘바좌식테이블
			'<a href="/detail/index/RTFFZ05ZZG"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon92.png" /></a>'
		].join(''),
		m09_item03: [//보노접이식테이블
			'<a href="/detail/index/RTIFZ10ZZC"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon93.png" /></a>'
		].join(''),
		m09_item04: [//모네접이식원목의자
			'<a href="/detail/index/RCPFZ05ZZK"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon94.png" /></a>'
		].join(''),
		m09_item05: [//멀티접이식수납함 L
			'<a href="/detail/index/RDBFZ42ZZG"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon95.png" /></a>'
		].join(''),
		m09_item06: [//멀티접이식수납함 M
			'<a href="/detail/index/RDBFZ42ZZC"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon96.png" /></a>'
		].join(''),
		m09_item07: [//멀티접이식수납함 S
			'<a href="/detail/index/RDBFZ40ZZG"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon97.png" /></a>'
		].join(''),
		// 메인배너10
		m10_item01: [//미니화장대의자
			'<a href="/detail/index/RCPFZ06ZZI"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon101.png" /></a>'
		].join(''),
		m10_item02: [//페이지스툴
			'<a href="/detail/index/RCOEZ19ZXE"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon102.png" /></a>'
		].join(''),
		m10_item03: [//헤티스툴
			'<a href="/detail/index/RCOFZ17SET"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon103.png" /></a>'
		].join(''),
		m10_item04: [//바네사화장대
			'<a href="/detail/index/RTCFZ03ZZC"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon104.png" /></a>'
		].join(''),
		// 메인배너11
		m11_item01: [//시크릿액세서리보관함 칸막이형
			'<a href="/detail/index/RDBFZ45ZZW"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon111.png" /></a>'
		].join(''),
		m11_item02: [//시크릿액세서리보관함 오픈형
			'<a href="/detail/index/RDBFZ43ZZW"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon112.png" /></a>'
		].join(''),
		m11_item03: [//시크릿액세서리보관함 서랍형
			'<a href="/detail/index/RDBFZ44ZZW"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon113.png" /></a>'
		].join(''),
		m11_item04: [//헤티스툴
			'<a href="/detail/index/RCOFZ17SET"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon114.png" /></a>'
		].join(''),
		// 메인하단배너
		m21_item01: [//페이지스툴
			'<a href="/detail/index/RCOEZ19ZXE"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon211.png" /></a>'
		].join(''),
		m21_item02: [//헤티스툴
			'<a href="/detail/index/RCOFZ17SET"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon212.png" /></a>'
		].join(''),
		m21_item03: [//제이든소파침대사이드테이블
			'<a href="/detail/index/RTIFZ08SET"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon213.png" /></a>'
		].join(''),
		m21_item04: [//비앙카서랍장
			'<a href="/detail/index/RHSEZ11SET"><img src="http://image.codigallery.com/roomet/data/skin/front/skinfree/img/mimg/pop_icon214.png" /></a>'
		].join('')
	};

	// 
//	$('#pictip-demo').pictip({
//		spots: [
//			{top: '730px', left: '10px', content: contents.m01_item01, tooltipPosition:'tr'},
//			{top: '615px', left: '365px', content: contents.m01_item02, tooltipPosition:'tr'},
//			{top: '450px', left: '1025px', content: contents.m01_item03, tooltipPosition:'tl'}
//		],
//		spotTemplate: ['<a href="javascript:;" onclick="location.href=\'/detail/index/RDBFZ91ZZI\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RCOFZ50ZZB\'" ></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RCOFZ26SET\'"></a>'],
//		// Functions onShowToolTip and onCloseToolTip are not executed if show and close functions are defined
//		// Use CSS transitions if they are available
//		show: function(tooltip){
//			tooltip.addClass('is-open');
//			console.log('Opening...', tooltip);
//		},
//		close: function(tooltip){
//			tooltip.removeClass('is-open');
//			console.log('Closing...', tooltip);
//		}
//	});

//	// You can access the instance with
//	var pictip = $('#pictip-demo').data('pictip');

//	$(root).on('resize', function () {';,l,;l'
//		pictip.closeToolTips();
//	});


//	$('#pictip-demo02').pictip({
//		spots: [
//			{top: '415px', left: '535px', content: contents.m02_item01, tooltipPosition:'bl'},
//			{top: '365px', left: '650px', content: contents.m02_item02, tooltipPosition:'br'},
//			{top: '300px', left: '780px', content: contents.m02_item03, tooltipPosition:'tl'},
//			{top: '245px', left: '910px', content: contents.m02_item04, tooltipPosition:'bc'}
//		],
//		spotTemplate: ['<a href="javascript:;" onclick="location.href=\'/detail/index/RHSFZ24ZZC\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RHSFZ25ZZC\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RHSFZ26ZZC\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RHSEZ11SET\'"></a>'],
//		// Functions onShowToolTip and onCloseToolTip are not executed if show and close functions are defined
//		// Use CSS transitions if they are available
//		show: function(tooltip){
//			tooltip.addClass('is-open');
//			console.log('Opening...', tooltip);
//		},
//		close: function(tooltip){
//			tooltip.removeClass('is-open');
//			console.log('Closing...', tooltip);
//		}
//	});

//	// You can access the instance with
//	var pictip = $('#pictip-demo02').data('pictip');

//	$(root).on('resize', function () {
//		pictip.closeToolTips();
//	});

	$('#pictip-demo03').pictip({
		spots: [
			{top: '590px', left: '40px', content: contents.m03_item01, tooltipPosition:'tr'},
			{top: '680px', left: '270px', content: contents.m03_item02, tooltipPosition:'tr'},
			{top: '400px', left: '830px', content: contents.m03_item03, tooltipPosition:'tl'},
			{top: '360px', left: '945px', content: contents.m03_item04, tooltipPosition:'tc'}
		],
		spotTemplate: ['<a href="javascript:;" onclick="location.href=\'/detail/index/RCOFZ17SET\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RCOFZ51ZZP\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RHBFZ55ZZK\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RHBFZ54ZZK\'"></a>'],
		// Functions onShowToolTip and onCloseToolTip are not executed if show and close functions are defined
		// Use CSS transitions if they are available
		show: function(tooltip){
			tooltip.addClass('is-open');
			console.log('Opening...', tooltip);
		},
		close: function(tooltip){
			tooltip.removeClass('is-open');
			console.log('Closing...', tooltip);
		}
	});

	// You can access the instance with
	var pictip = $('#pictip-demo03').data('pictip');

	$(root).on('resize', function () {
		pictip.closeToolTips();
	});

	$('#pictip-demo04').pictip({
		spots: [
			{top: '125px', left: '135px', content: contents.m04_item01, tooltipPosition:'br'},
			{top: '455px', left: '145px', content: contents.m04_item02, tooltipPosition:'br'},
			{top: '130px', left: '1015px', content: contents.m04_item03, tooltipPosition:'bl'},
			{top: '700px', left: '740px', content: contents.m04_item04, tooltipPosition:'tr'}
		],
		spotTemplate: ['<a href="javascript:;" onclick="location.href=\'/detail/index/RDWFZ05ZZW\'"></a>','<a href="javascript:;" onclick="location.href=\'/detail/index/RTIFZ10ZZC\'"></a>','<a href="javascript:;" onclick="location.href=\'/detail/index/RDWFZ04ZZB\'"></a>','<a href="javascript:;" onclick="location.href=\'/detail/index/RCPFZ05ZZK\'"></a>'],
		// Functions onShowToolTip and onCloseToolTip are not executed if show and close functions are defined
		// Use CSS transitions if they are available
		show: function(tooltip){
			tooltip.addClass('is-open');
			console.log('Opening...', tooltip);
		},
		close: function(tooltip){
			tooltip.removeClass('is-open');
			console.log('Closing...', tooltip);
		}
	});

	// You can access the instance with
	var pictip = $('#pictip-demo04').data('pictip');

	$(root).on('resize', function () {
		pictip.closeToolTips();
	});

	$('#pictip-demo05').pictip({
		spots: [
			{top: '670px', left: '115px', content: contents.m05_item01, tooltipPosition:'tc'},
			{top: '220px', left: '535px', content: contents.m05_item02, tooltipPosition:'br'},
			{top: '95px', left: '827px', content: contents.m05_item03, tooltipPosition:'bl'},
			{top: '445px', left: '1015px', content: contents.m05_item04, tooltipPosition:'tl'},
			{top: '700px', left: '915px', content: contents.m05_item05, tooltipPosition:'tl'}
		],
		spotTemplate: ['<a href="javascript:;" onclick="location.href=\'/detail/index/RCOFZ50ZZB\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RTFFZ09ZZZ\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RHSEZ11SET\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RDBFZ97ZZR\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RCOFZ27SET\'"></a>'],
		// Functions onShowToolTip and onCloseToolTip are not executed if show and close functions are defined
		// Use CSS transitions if they are available
		show: function(tooltip){
			tooltip.addClass('is-open');
			console.log('Opening...', tooltip);
		},
		close: function(tooltip){
			tooltip.removeClass('is-open');
			console.log('Closing...', tooltip);
		}
	});

	// You can access the instance with
	var pictip = $('#pictip-demo05').data('pictip');

	$(root).on('resize', function () {
		pictip.closeToolTips();
	});

	$('#pictip-demo06').pictip({
		spots: [
			{top: '565px', left: '165px', content: contents.m06_item01, tooltipPosition:'tc'},
			{top: '720px', left: '545px', content: contents.m06_item02, tooltipPosition:'tl'},
			{top: '155px', left: '820px', content: contents.m06_item03, tooltipPosition:'bl'},
			{top: '405px', left: '1020px', content: contents.m06_item04, tooltipPosition:'tl'}
		],
		spotTemplate: ['<a href="javascript:;" onclick="location.href=\'/detail/index/RTIFZ08SET\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RCOFZ17SET\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RHSEZ11SET\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RDBFZ97ZZR\'"></a>'],
		// Functions onShowToolTip and onCloseToolTip are not executed if show and close functions are defined
		// Use CSS transitions if they are available
		show: function(tooltip){
			tooltip.addClass('is-open');
			console.log('Opening...', tooltip);
		},
		close: function(tooltip){
			tooltip.removeClass('is-open');
			console.log('Closing...', tooltip);
		}
	});

	// You can access the instance with
	var pictip = $('#pictip-demo06').data('pictip');

	$(root).on('resize', function () {
		pictip.closeToolTips();
	});

	$('#pictip-demo07').pictip({
		spots: [
			{top: '540px', left: '75px', content: contents.m07_item01, tooltipPosition:'br'},
			{top: '120px', left: '250px', content: contents.m07_item02, tooltipPosition:'bl'},
			{top: '530px', left: '420px', content: contents.m07_item03, tooltipPosition:'br'},
			{top: '120px', left: '625px', content: contents.m07_item04, tooltipPosition:'bl'},
			{top: '325px', left: '795px', content: contents.m07_item05, tooltipPosition:'tr'}
		],
		spotTemplate: ['<a href="javascript:;" onclick="location.href=\'/detail/index/RDBFZ96ZZW\'"></a>','<a href="javascript:;" onclick="location.href=\'/detail/index/RHBFZ60ZZC\'"></a>','<a href="javascript:;" onclick="location.href=\'/detail/index/RDBFZ97ZZR\'"></a>','<a href="javascript:;" onclick="location.href=\'/detail/index/RHBFZ61ZZM\'"></a>','<a href="javascript:;" onclick="location.href=\'/detail/index/RDBFZ95SET\'"></a>'],
		// Functions onShowToolTip and onCloseToolTip are not executed if show and close functions are defined
		// Use CSS transitions if they are available
		show: function(tooltip){
			tooltip.addClass('is-open');
			console.log('Opening...', tooltip);
		},
		close: function(tooltip){
			tooltip.removeClass('is-open');
			console.log('Closing...', tooltip);
		}
	});

	// You can access the instance with
	var pictip = $('#pictip-demo07').data('pictip');

	$(root).on('resize', function () {
		pictip.closeToolTips();
	});

	$('#pictip-demo08').pictip({
		spots: [
			{top: '270px', left: '50px', content: contents.m08_item01, tooltipPosition:'tr'},
			{top: '110px', left: '670px', content: contents.m08_item02, tooltipPosition:'br'},
			{top: '115px', left: '930px', content: contents.m08_item03, tooltipPosition:'bc'},
			{top: '685px', left: '50px', content: contents.m08_item04, tooltipPosition:'tr'},
			{top: '675px', left: '250px', content: contents.m08_item05, tooltipPosition:'tl'},
			{top: '650px', left: '480px', content: contents.m08_item06, tooltipPosition:'tl'},
			{top: '655px', left: '890px', content: contents.m08_item07, tooltipPosition:'tl'},
			{top: '575px', left: '1065px', content: contents.m08_item08, tooltipPosition:'tl'}
		],
		spotTemplate: ['<a href="javascript:;" onclick="location.href=\'/detail/index/RDBEZ90ZZV\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RHBFZ55ZZK\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RHBFZ54ZZK\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RHBFZ58ZZK\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RHBFZ59ZZK\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RHBFZ57ZZK\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RCPFZ06ZZI\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RCOFZ17SET\'"></a>'],
		// Functions onShowToolTip and onCloseToolTip are not executed if show and close functions are defined
		// Use CSS transitions if they are available
		show: function(tooltip){
			tooltip.addClass('is-open');
			console.log('Opening...', tooltip);
		},
		close: function(tooltip){
			tooltip.removeClass('is-open');
			console.log('Closing...', tooltip);
		}
	});

	// You can access the instance with
	var pictip = $('#pictip-demo08').data('pictip');

	$(root).on('resize', function () {
		pictip.closeToolTips();
	});

	$('#pictip-demo09').pictip({
		spots: [
			{top: '550px', left: '40px', content: contents.m09_item01, tooltipPosition:'tr'},
			{top: '715px', left: '50px', content: contents.m09_item02, tooltipPosition:'tr'},
			{top: '160px', left: '515px', content: contents.m09_item03, tooltipPosition:'cl'},
			{top: '210px', left: '980px', content: contents.m09_item04, tooltipPosition:'bl'},
			{top: '335px', left: '1000px', content: contents.m09_item05, tooltipPosition:'tl'},
			{top: '465px', left: '950px', content: contents.m09_item06, tooltipPosition:'cl'},
			{top: '600px', left: '985px', content: contents.m09_item07, tooltipPosition:'cl'}
		],
		spotTemplate: ['<a href="javascript:;" onclick="location.href=\'/detail/index/RTFFZ09ZZZ\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RTFFZ05ZZG\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RTIFZ10ZZC\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RCPFZ05ZZK\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RDBFZ42ZZG\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RDBFZ42ZZC\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RDBFZ40ZZG\'"></a>'],
		// Functions onShowToolTip and onCloseToolTip are not executed if show and close functions are defined
		// Use CSS transitions if they are available
		show: function(tooltip){
			tooltip.addClass('is-open');
			console.log('Opening...', tooltip);
		},
		close: function(tooltip){
			tooltip.removeClass('is-open');
			console.log('Closing...', tooltip);
		}
	});

	// You can access the instance with
	var pictip = $('#pictip-demo09').data('pictip');

	$(root).on('resize', function () {
		pictip.closeToolTips();
	});

	$('#pictip-demo10').pictip({
		spots: [
			{top: '360px', left: '0', content: contents.m10_item01, tooltipPosition:'tr'},
			{top: '660px', left: '200px', content: contents.m10_item02, tooltipPosition:'tc'},
			{top: '630px', left: '460px', content: contents.m10_item03, tooltipPosition:'tr'},
			{top: '185px', left: '635px', content: contents.m10_item04, tooltipPosition:'br'}
		],
		spotTemplate: ['<a href="javascript:;" onclick="location.href=\'/detail/index/RCPFZ06ZZI\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RCOEZ19ZXE\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RCOFZ17SET\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RTCFZ03ZZC\'"></a>'],
		// Functions onShowToolTip and onCloseToolTip are not executed if show and close functions are defined
		// Use CSS transitions if they are available
		show: function(tooltip){
			tooltip.addClass('is-open');
			console.log('Opening...', tooltip);
		},
		close: function(tooltip){
			tooltip.removeClass('is-open');
			console.log('Closing...', tooltip);
		}
	});

	// You can access the instance with
	var pictip = $('#pictip-demo10').data('pictip');

	$(root).on('resize', function () {
		pictip.closeToolTips();
	});

	$('[name=pictip-demo11]').pictip({
		spots: [
			{top: '370px', left: '480px', content: contents.m11_item01, tooltipPosition:'bl'},
			{top: '340px', left: '730px', content: contents.m11_item02, tooltipPosition:'bl'},
			{top: '300px', left: '1020px', content: contents.m11_item03, tooltipPosition:'tl'},
			{top: '460px', left: '1020px', content: contents.m11_item04, tooltipPosition:'bc'} 
		],
		spotTemplate: ['<a href="javascript:;" onclick="location.href=\'/detail/index/RDBFZ45ZZW\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RDBFZ43ZZW\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RDBFZ44ZZW\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RCOFZ17SET\'"></a>'],
		// Functions onShowToolTip and onCloseToolTip are not executed if show and close functions are defined
		// Use CSS transitions if they are available
		show: function(tooltip){
			tooltip.addClass('is-open');
			console.log('Opening...', tooltip);
		},
		close: function(tooltip){
			tooltip.removeClass('is-open');
			console.log('Closing...', tooltip);
		}
	});

	// You can access the instance with
	var pictip = $('[name=pictip-demo11]').data('pictip');

	$(root).on('resize', function () {
		pictip.closeToolTips();
	});



	$('#pictip-demo21').pictip({
		spots: [
			{top: '170px', left: '165px', content: contents.m21_item01, tooltipPosition:'bc'},
			{top: '515px', left: '370px', content: contents.m21_item02, tooltipPosition:'tc'},
			{top: '420px', left: '675px', content: contents.m21_item03, tooltipPosition:'br'},
			{top: '270px', left: '1080px', content: contents.m21_item04, tooltipPosition:'tl'}
		],
		spotTemplate: ['<a href="javascript:;" onclick="location.href=\'/detail/index/RCOEZ19ZXE\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RCOFZ17SET\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RTIFZ08SET\'"></a>', '<a href="javascript:;" onclick="location.href=\'/detail/index/RHSEZ11SET\'"></a>'],
		// Functions onShowToolTip and onCloseToolTip are not executed if show and close functions are defined
		// Use CSS transitions if they are available
		show: function(tooltip){
			tooltip.addClass('is-open');
			console.log('Opening...', tooltip);
		},
		close: function(tooltip){
			tooltip.removeClass('is-open');
			console.log('Closing...', tooltip);
		}
	});

	// You can access the instance with
	var pictip = $('#pictip-demo21').data('pictip');

	$(root).on('resize', function () {
		pictip.closeToolTips();
	});

})(window, jQuery);