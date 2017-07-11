$(document).ready(function() {
  console.log('hi');
  $('.more-span').click(function(event) {
    $('.brand-innovation-more-text').show();
    $('.more-span').hide();
    // $('.project-overview').css('padding-bottom','10%');
  });
  $('.less-span').click(function(event) {
    $('.brand-innovation-more-text').hide();
    $('.more-span').show();
    // $('.project-overview').css('padding-bottom','0');

  });
});