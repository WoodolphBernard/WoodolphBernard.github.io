$(document).ready(function () {
  $('.menu-toggle').click(function () {
    $('.unorderlist').toggleClass('open');

    // Nav Accordion
    $('.nav-list').toggleClass('open');
  });

  $('.navnav').click(function () {
    $('.unorderlist').toggleClass('open');
  });

  // Smooth Scrolling
  let $scrollLink = $('.navnav');

  $scrollLink.click(function (event) {

    // prevent default event
    event.preventDefault();

    // smooth scroll animation
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top,
    }, 1000);

  });

  // Scroll to the top
  let $scrollarrow = $('.scrollup');

  $scrollarrow.click(function (i) {

    i.preventDefault();

    $('body, html').animate({
      scrollTop: $('#showcase').offset().top,
    }, 1000);
  });

  $(window).scroll(function () {
    const $scrollbarLocation = $(this).scrollTop();

    // scroll up disappear
    let $aboutLocation = $('#aboutme').offset().top;

    if ($scrollbarLocation >= $aboutLocation) {
      return $('.scrollup').css({ display: 'block' });
    }else {
      return $('.scrollup').css({ display: 'none' });
    }

    // Active link switching
    $scrollLink.each(function () {

      // Find links location
      const $linkLocation = $(this.hash).offset().top - 0.5;

      if ($linkLocation <= $scrollbarLocation) {
        $(this).addClass('current');
        $(this).parent().siblings().children().removeClass('current');
      }
    });

  });
});
