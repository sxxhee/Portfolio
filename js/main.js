$(document).ready(function() {
  $('.toggle').on('click', function() {
      $('.navbar_menu').toggleClass('open');
  });

  $('.menu_item').on('click', function() {
      $('.menu_item').removeClass('active');
      $(this).addClass('active');
  });
$(window).on('scroll', function() {
  const scrollPosition = $(this).scrollTop(); // 현재 스크롤 위치

  // 스크롤 위치가 100px 이상일 때 클래스 추가
  if (scrollPosition > 100) {
    $('#navbar').css('background-color', 'rgb(239, 190, 196)'); // 배경색 변경
  } else {
    $('#navbar').css('background-color', 'transparent'); // 배경색 초기화
  }
  });
});