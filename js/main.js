$(document).ready(function() {
  $('.toggle').on('click', function() {
      $('.navbar_menu').toggleClass('open');
  });

  $('.menu_item').on('click', function() {
      $('.menu_item').removeClass('active');
      $(this).addClass('active');
  });

$(window).on('scroll', function() {
  const scrollPosition = $(this).scrollTop();
  if (scrollPosition > 100) {
    $('#navbar').css('background-color', 'rgb(239, 190, 196)');
  } else {
    $('#navbar').css('background-color', 'transparent'); //
  }
  });
  const $menuItems = $('.menu_item');
  const $sections = $('section'); // 각 섹션을 선택

  function changeActiveMenuItem() {
    const scrollPosition = $(window).scrollTop(); // 현재 스크롤 위치

    $sections.each(function (index) {
      const sectionTop = $(this).offset().top; // 섹션의 위쪽 위치
      const sectionHeight = $(this).outerHeight(); // 섹션의 높이

      // 현재 스크롤 위치가 섹션의 위쪽과 아래쪽 사이에 있을 때
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        $menuItems.removeClass('active'); // 모든 메뉴 항목에서 active 클래스 제거
        $menuItems.eq(index).addClass('active'); // 현재 섹션에 해당하는 메뉴 항목에 active 클래스 추가
      }
    });
  }

  // 스크롤 이벤트 리스너 추가
  $(window).on('scroll', changeActiveMenuItem);
});

