//nav toggle / close
$(document).ready(function() {
// Toggle 클릭 시
$('.toggle').on('click', function() {
  $('.navbar_menu').addClass('open');
  $('.toggle').hide();
  $('.close').show();
});

// Close 클릭 시
$('.close').on('click', function() {
  $('.navbar_menu').removeClass('open');
  $('.close').hide();
  $('.toggle').show();
});

// 메뉴 항목 클릭 시
$('.menu_item').on('click', function() {
  $('.menu_item').removeClass('active');
  $(this).addClass('active');
});


// 네비 메뉴 배경
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

  //네비 스크롤 동그라미들
  // 처음에 Home에 nav-active 스타일 적용
  const $firstLink = $('.nav-scroll li a').first();
  $firstLink.css({
    background: '#dd8e97',
    width: '13px',
    height: '13px',
    borderRadius: '50%',
  });

  // 스크롤에 따른 활성 메뉴 아이템 변경
  $(window).on('scroll', changeActiveMenuItem);

  // 클릭 이벤트 처리
  $('.nav-scroll li a').on('click', function(e) {
    e.preventDefault(); // 링크의 기본 동작 방지

    // 모든 항목에서 nav-active 스타일 제거
    $('.nav-scroll li a').css({
      background: '#cccccc',
      width: '8px',
      height: '8px',
    });

    // 클릭한 항목에 nav-active 스타일 적용
    $(this).css({
      background: '#dd8e97',
      width: '13px',
      height: '13px',
      borderRadius: '50%',
    });

    // 해당 섹션으로 부드럽게 스크롤
    const target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
  });

  // 활성 메뉴 아이템을 변경하는 함수
  function changeActiveMenuItem() {
    const scrollPos = $(document).scrollTop(); // 현재 스크롤 위치
    $('.nav-scroll li a').each(function() {
      const target = $(this).attr('href'); // 각 링크의 href
      const targetPos = $(target).offset().top; // 해당 섹션의 위치
      const targetHeight = $(target).outerHeight(); // 해당 섹션의 높이

      // 현재 스크롤 위치가 섹션 안에 있을 경우
      if (scrollPos >= targetPos && scrollPos < targetPos + targetHeight) {
        // 모든 항목에서 nav-active 스타일 제거
        $('.nav-scroll li a').css({
          background: '#cccccc',
          width: '8px',
          height: '8px',
        });

        // 현재 활성화된 항목에 nav-active 스타일 적용
        $(this).css({
          background: '#dd8e97',
          width: '13px',
          height: '13px',
          borderRadius: '50%',
        });
      }
    });
  }
});
