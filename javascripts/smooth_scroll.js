$(document).ready(function(){
  $('.navlink').click(function(e){
    e.preventDefault();
    dataslide = $(this).attr('data-slide');
    $('html,body').animate({
      scrollTop: $('section[data-slide="' + dataslide + '"]').offset().top
    }, 1500, 'easeInOutQuint');
  })
})