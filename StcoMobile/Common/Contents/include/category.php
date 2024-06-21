	<div id="category">
		<h2>카테고리<a href="#" id="category_back">카테고리 닫기</a></h2>
		<div id="category_inner" class="category_inner">
			<ul>
				<li><a href="#">셔츠</a>
					<ul class="on">
						<li><a href="#">셔츠1</a></li>
						<li><a href="#">셔츠2</a></li>
						<li><a href="#">셔츠3</a></li>
						<li><a href="#">셔츠4</a></li>
						<li><a href="#">셔츠5</a></li>
						<li><a href="#">셔츠6</a></li>
						<li><a href="#">셔츠7</a></li>
						<li><a href="#">셔츠8</a></li>
						<li><a href="#">셔츠9</a></li>
						<li><a href="#">셔츠10</a></li>
					</ul>
				</li>
				<li><a href="#">반팔셔츠</a>
					<ul>
						<li><a href="#">반팔셔츠1</a></li>
						<li><a href="#">반팔셔츠2</a></li>
						<li><a href="#">반팔셔츠3</a></li>
						<li><a href="#">반팔셔츠4</a></li>
						<li><a href="#">반팔셔츠5</a></li>
						<li><a href="#">반팔셔츠6</a></li>
						<li><a href="#">반팔셔츠7</a></li>
						<li><a href="#">반팔셔츠8</a></li>
						<li><a href="#">반팔셔츠9</a></li>
						<li><a href="#">반팔셔츠10</a></li>
					</ul>
				</li>
				<li><a href="#">티셔츠</a>
					<ul>
						<li><a href="#">티셔츠1</a></li>
						<li><a href="#">티셔츠2</a></li>
						<li><a href="#">티셔츠3</a></li>
						<li><a href="#">티셔츠4</a></li>
						<li><a href="#">티셔츠5</a></li>
						<li><a href="#">티셔츠6</a></li>
						<li><a href="#">티셔츠7</a></li>
						<li><a href="#">티셔츠8</a></li>
						<li><a href="#">티셔츠9</a></li>
						<li><a href="#">티셔츠10</a></li>
					</ul>
				</li>
				<li><a href="#">니트</a>
					<ul>
						<li><a href="#">니트1</a></li>
						<li><a href="#">니트2</a></li>
						<li><a href="#">니트3</a></li>
						<li><a href="#">니트4</a></li>
						<li><a href="#">니트5</a></li>
						<li><a href="#">니트6</a></li>
						<li><a href="#">니트7</a></li>
						<li><a href="#">니트8</a></li>
						<li><a href="#">니트9</a></li>
						<li><a href="#">니트10</a></li>
					</ul>
				</li>
				<li><a href="#">가디건</a></li>
				<li><a href="#">바지</a></li>
				<li><a href="#">자켓</a></li>
				<li><a href="#">코트</a></li>
				<li><a href="#">점퍼</a></li>
				<li><a href="#">베스트</a></li>
				<li><a href="#">벨트</a></li>
				<li><a href="#">가방</a></li>
				<li><a href="#">신발</a></li>
				<li><a href="#">지갑</a></li>
				<li><a href="#">양말</a></li>
				<li><a href="#">행거치프</a></li>
			</ul>
		</div>
	</div>
	<script>
		(function(){
				$(window).resize(function(){
					$("#category_inner").css({"height":$(window).outerHeight() - $("#category").find("h2").outerHeight()});
				});
				$(window).trigger("resize");
			var $htmlObj = $("html, body");
			var $wrap = $("#wrap");
			var $category = $("#category");
			$("#category_btn").click(function(){
				if($wrap.is(".on")){
					$htmlObj.css({"overflow":"visible"});
					$wrap.removeClass("on").animate({"left":0},"normal",function(){
						$category.removeClass("on");
					});
				}else{
					$("html, body").css({"overflow":"hidden"});
					$category.addClass("on");
					$wrap.addClass("on").animate({"left":"90%"},"normal");
				};
				return false;
			});
			$("#category_back").click(function(){
				if($wrap.is(".on")){
					$("#category_btn").trigger("click");
				};
			});
			$("#back_blank").click(function(){
				if($wrap.is(".on")){
					$("#category_btn").trigger("click");
				};
				return false;
			});
		})($);
	</script>