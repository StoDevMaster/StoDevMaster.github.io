$(function () {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var headerHeight = $('.header').outerHeight();
    var tabPosY = $('.prodDetailTabBox .tabTitBox').offset().top;
    if (scrollTop >= tabPosY - headerHeight) {
      $('body').addClass('fixedTab');
    } else {
      $('body').removeClass('fixedTab');
    }
  });

  $(window).trigger('mousewheel');
});


function targetClick(obj, target) {

  $('.tabTitBox .tabTit .btnTab:eq(0)').trigger('click');

  var targetOffset = $('#' + target).offset().top;

  var headerHeight = headerHeight = $('.header').height() + $('.tabTitBox').outerHeight()
  targetOffset -= headerHeight - 2;

  $('html, body').animate({
    scrollTop: targetOffset
  });
}

// 팝업을 엽니다.
function openPop(id) {
  $('#' + id).addClass('on');
}

// 팝업을 닫습니다.
function closePop(id) {
  $('#' + id).removeClass('on');
}
