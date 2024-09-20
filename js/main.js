$(document).ready(function() {
  $('.toggle').on('click', function() {
      $('.navbar_menu').toggleClass('open');
  });

  $('.menu_item').on('click', function() {
      $('.menu_item').removeClass('active');
      $(this).addClass('active');
  });
});