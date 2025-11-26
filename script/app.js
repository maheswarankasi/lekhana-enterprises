$(document).ready(function(){
  // Show button when scrolled down 100px
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('#backToTop').fadeIn();
    } else {
      $('#backToTop').fadeOut();
    }
  });

  // Scroll smoothly to top when clicked
  $('#backToTop').click(function(){
    $('html, body').animate({scrollTop : 0}, 600);
    return false;
  });
});
