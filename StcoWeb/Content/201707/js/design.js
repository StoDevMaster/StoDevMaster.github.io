$(document).ready(function () {

    alert("111");
    $(".brand_sel").click(function () {
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
            $(this).next(".brand_sel_list").stop().slideUp(100);
        }
        else {
            $(this).addClass("on");
            $(this).next(".brand_sel_list").stop().slideDown(100);
        }
    });
//    $(".gnb li").mouseenter(function () {
//        if ($(this).find(".s_menu_wrap").length > 0) {
//            $(this).addClass("on");
//        }
//    });
//    $(".gnb li").mouseleave(function () {
//        $(this).removeClass("on")
//    });
    //quick
    $(".quck_click").click(function () {
        if ($(this).hasClass("on")) {
            $(".quck_wrap").removeClass("on");
            $(this).removeClass("on");
        }
        else {
            $(".quck_wrap").addClass("on");
            $(this).addClass("on");
        }
    });
});
function topClose(){
	$(".top_banner_wrap").stop().slideUp(300);
}