<div id="header">
			<h1><a href="#"><img src="/images/common/logo.png" alt="stco" /></a></h1>
			<ul id="nav" class="nav">
				<li class="category"><a href="#category" id="category_btn">카테고리</a></li>
				<li class="search"><a href="#search" id="search_btn">검색</a></li>
				<li class="my"><a href="#my"><span>마이 메뉴</span></a></li>
			</ul>
			<div id="search">
				<div class="search_inner">
					<form action="#" method="post">
						<label for="search_txt">검색영역</label>
						<input type="text" id="search_txt" placeholder="검색어를 입력하세요." />
						<span>
							<button type="button"><img src="/images/common/search_submit.png" alt="검색" /></button>
							<a href="#" id="search_clear"><img src="/images/common/search_clear.png" alt="검색글 삭제" /></a>
						</span>
					</form>
				</div>
			</div>
			<div id="my">
				<h2>마이메뉴</h2>
				<ul>
					<li class="li1">
						<!-- <span>로그인하세요.</span><a href="#">로그인</a> -->
						<span>에스티오 고객님</span><a href="#">로그아웃</a>
					</li>
					<li class="float fl li2"><a href="#"><span>장바구니</span></a></li>
					<li class="float li3"><a href="#"><span>위시리스트</span></a></li>
					<li class="float fl li4"><a href="#"><span>주문배송조회</span></a></li>
					<li class="float li5"><a href="#"><span>상품평관리</span></a></li>
					<li class="float fl li6"><a href="#"><span>주문취소/교환/반품</span></a></li>
					<li class="float li7"><a href="#"><span>쿠폰</span></a></li>
					<li class="float fl li8"><a href="#"><span>코인</span></a></li>
					<li class="float li9"><a href="#"><span>1:1문의하기</span></a></li>
					<li class="li10"><a href="#">마이페이지</a></li>
				</ul>
			</div>
			<div class="sub_header">
				<h2 class="ell">헤더 기본틀</h2>
				<a href="#" onclick="history.back(-1); return false;">이전페이지</a>
			</div>
		</div>
		<script>
			(function(){
				$("#search_btn").click(function(){
					if($(this).is(".on")){
						$(this).removeClass("on");
						$("#search").removeClass("on");
					}else{
						$(this).addClass("on");
						$("#search").addClass("on");
					};
					return false;
				});
				$("#search_clear").click(function(){
					$("#search_txt").val("");
					return false;
				});
				var $myMenu = $("#my");
				$(".my").click(function(){
					if($(this).is(".on")){
						$(this).removeClass("on");
						$myMenu.removeClass("on");
					}else{
						$(this).addClass("on");
						$myMenu.addClass("on");
					};
					return false;
				});
			})($);
		</script>