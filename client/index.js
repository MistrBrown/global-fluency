/* 
*
*  Author: Evan Chang 
*  (github: MistrBrown) 
*  evanschang3@gmail.com
*  Description: This JavaScript code prints a simple message.
*
*
*  This file controls the About Menu dropdown, as well as the fixed navigation bar and scrolling mechanics.
*
*/

let topHeaderHeight;
let fixedNavbarHeight;

$(document).ready(function() {

  // Get current topHeaderHeight and fixedNavbarHeight
  topHeaderHeight = $('.top-header').outerHeight(true);
  fixedNavbarHeight = $('.fixed-navbar').outerHeight(true);

  // Resize listener to grab topHeaderHeight and fixedNavbarHeight
  $(window).resize(function(e) {
    topHeaderHeight = $('.top-header').outerHeight(true);
    fixedNavbarHeight = $('.fixed-navbar').outerHeight(true);
  });

  // Navbar fixed/not-fixed on reload
  if ($(this).scrollTop() > topHeaderHeight) {
    $('.fixed-navbar').css({
      'position': 'fixed',
      'top': 0
    });
    $('.project-content').css('margin-top', `${fixedNavbarHeight}`)
  }

  // Scroll listener for fixing Navbar
  $(window).scroll(function(e) {
    if ($(this).scrollTop() > topHeaderHeight) {
      $('.fixed-navbar').css({
        'position': 'fixed',
        'top': 0
      });
      $('.project-content').css('margin-top', `${fixedNavbarHeight}`)
    } else {
      $('.fixed-navbar').css({
        'position':'initial',
        'top': 'initial'
      });
      $('.project-content').css('margin-top','initial');
    }
  });

  // Expand when more button is clicked
  $('.more-span').click(function(e) {
    $('.brand-innovation-more-text').show();
    $('.more-span').hide();
  });

  // Collapse when less button is clicked
  $('.less-span').click(function(e) {
    $('.brand-innovation-more-text').hide();
    $('.more-span').show();
  });

  // Add highlighted border bottom
  $('.navbar-inner-div').mouseover(function(e) {
    $(this).addClass('highlighted-inner-div');
  });


  // Remove highlighted border bottom
  $('.navbar-inner-div').mouseleave(function(e) {
    // Look at current hovered
    if ($(this).text() !== ' PROGRAMS ') {
      $(this).removeClass('highlighted-inner-div');
    }
  });

  // Slideup/SlideDown Animation for about-menu
  $('.about-div').hover(function(e) {
    $('.about-menu').slideDown('fast');
    $(this).addClass('highlighted-inner-div');
    $(this).mouseleave(function(e) {
      $('.about-menu').slideUp('fast');
      $('.about-div').removeClass('highlighted-inner-div');
    });
  });
});

// Scroll to function + fixedNavbarHeight offset
function scrollTo (divID) {
  $('html, body').animate({
    scrollTop: $(`#${divID}`).offset().top - fixedNavbarHeight - 10 
  }, 300);
}