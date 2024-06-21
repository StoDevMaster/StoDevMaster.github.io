$(function () {

  var scrollDirection = {
    UP: 'up',
    DOWN: 'down'
  };

  var lastScrollTop = 0;
  var currentDirection = null;

  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();

    if (currentScroll > lastScrollTop) {
      // Down
      currentDirection = scrollDirection.DOWN;
    } else {
      // Up
      currentDirection = scrollDirection.UP;
    }

    lastScrollTop = currentScroll;
  });


  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var tabPosY = $('.tabTitBox').offset().top;

    var headerHeight = 0;

    if (currentDirection == scrollDirection.UP) {
      headerHeight = $('.stco_header').outerHeight() + $('.gnb_nav2').outerHeight()
    } else if (currentDirection == scrollDirection.DOWN) {
      headerHeight = $('.gnb_nav2').outerHeight()
    }

    if (scrollTop > tabPosY - headerHeight) {
      $('body').addClass('fixedTab');
    } else {
      $('body').removeClass('fixedTab');
    }
  });


  $('.tabTitBox .tabTit .btnTab').click(function () {
    let idx = $(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $(this).closest('.tabTitBox').next('.tabContBox').find('.tabCont').eq(idx).addClass('on').siblings().removeClass('on');

    var tabTitTop = $('.tabTit').offset().top;
    var tabContTop = $('.tabContBox').offset().top;

    var headerHeight = 0;

    if (tabTitTop > tabContTop) {
      headerHeight = $('.tabTitBox').outerHeight() + $('.gnb_nav2').outerHeight() + $('.stco_header').outerHeight();
    } else {
      headerHeight = $('.tabTitBox').outerHeight() + $('.gnb_nav2').outerHeight();
    }

    scrollTarget = tabContTop - headerHeight;

    $('html, body').animate({
      scrollTop: scrollTarget
    }, 300);
    return false;
  });
});

function targetClick(obj, target) {

  $('.tabTitBox .tabTit .btnTab:eq(0)').trigger('click');

  var targetOffset = $('#' + target).offset().top;
  var buttonOffset = $(obj).offset().top;

  var headerHeight = 0;
  if (targetOffset < buttonOffset) {
    headerHeight = $('.tabTitBox').height() + $('.stco_header').outerHeight() + $('.gnb_nav2').outerHeight()
  } else {
    headerHeight = $('.tabTitBox').height() + $('.gnb_nav2').outerHeight()
  }

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
