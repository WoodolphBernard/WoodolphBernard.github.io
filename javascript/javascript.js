$(document).ready(function () {

  // //////////////Navigation Toggle Start Card-Container1////////////////////
  // //////////////Navigation Toggle Start Card-Container1////////////////////
  // //////////////Navigation Toggle Start Card-Container1////////////////////

  $('.front1').on('click', function () {
            $('.card-container1').toggleClass('open').promise().done(function () {

              // //////////////disappearing Cards////////////////////////
              // //////////////disappearing Cards////////////////////////

              $('.card-container2').toggleClass('disappear').promise().done(function () {
                $('.front2').fadeOut(1000, function () {
                  $('.card-container2').css({
                    'visibility': 'hidden',
                  });
                });
              });

              $('.card-container3').toggleClass('disappear').promise().done(function () {
                $('.front3').fadeOut(1000, function () {
                  $('.card-container3').css({
                    'visibility': 'hidden',
                  });
                });
              });

              $('.card-container4').toggleClass('disappear').promise().done(function () {
                $('.front4').fadeOut(1000, function () {
                  $('.card-container4').css({
                    visibility: 'hidden',
                  });
                });
              });

              // //////////////Card Enlargement and Fade on Nav////////////////////////
              // //////////////Card Enlargement and Fade on Nav////////////////////////

              setTimeout(function () {

                $('.card1').toggleClass('enlarge');

                $('.back1').toggleClass('notransform');
              }, 4000);

              setTimeout(function () {

                $('.back1').fadeOut(2000);
                $('.front1').fadeOut(2000, function () {
                  setTimeout(function () {
                    $('.back1').fadeIn(1000);
                  }, 500);
                });
              }, 1800);

            });

            $('.card1').toggleClass('no-hover');
          });

  // //////////////Navigation Toggle Back Button////////////////////
  // //////////////Navigation Toggle Back Button////////////////////

  $('.back-button').on('click', function () {
    $('.card-container1').toggleClass('open').promise().done(function () {

          setTimeout(function () {

            $('.card1').toggleClass('enlarge');

            $('.back1').toggleClass('notransform');
          }, 1);

          setTimeout(function () {

            $('.back1').fadeIn(2000);
            $('.front1').fadeIn(2000, function () {
              setTimeout(function () {
                $('.back1').fadeOut(1000);
              }, 500);
            });
          }, 1);

          $('.card-container2').toggleClass('disappear').promise().done(function () {
            $('.front2').fadeIn(1000, function () {
              $('.card-container2').css({
                'visibility': 'visible',
              });
            });
          });

          $('.card-container3').toggleClass('disappear').promise().done(function () {
            $('.front3').fadeIn(1000, function () {
              $('.card-container3').css({
                'visibility': 'visible',
              });
            });
          });

          $('.card-container4').toggleClass('disappear').promise().done(function () {
            $('.front4').fadeIn(1000, function () {
              $('.card-container4').css({
                'visibility': 'visible',
              });
            });
          });
        });

    $('.card1').toggleClass('no-hover');
  });

  // //////////////Navigation Toggle END////////////////////
  // //////////////Navigation Toggle END////////////////////
  // //////////////Navigation Toggle END////////////////////

  ////////////////Navigation Toggle Start Card-Container2////////////////////
  ////////////////Navigation Toggle Start Card-Container2////////////////////
  ////////////////Navigation Toggle Start Card-Container2////////////////////

  $('.front2').on('click', function () {

      $('.card-container2').toggleClass('open').promise().done(function () {

        // //////////////disappearing Cards////////////////////////
        // //////////////disappearing Cards////////////////////////

        $('.card-container1').toggleClass('disappear').promise().done(function () {
          $('.front1').fadeOut(1000, function () {
            $('.card-container1').css({
              'visibility': 'hidden',
            });
          });
        });

        $('.card-container3').toggleClass('disappear').promise().done(function () {
          $('.front3').fadeOut(1000, function () {
            $('.card-container3').css({
              'visibility': 'hidden',
            });
          });
        });

        $('.card-container4').toggleClass('disappear').promise().done(function () {
          $('.front4').fadeOut(1000, function () {
            $('.card-container4').css({
              'visibility': 'hidden',
            });
          });
        });

        // //////////////Card Enlargement and Fade on Nav////////////////////////
        // //////////////Card Enlargement and Fade on Nav////////////////////////

        setTimeout(function () {

          $('.card2').toggleClass('enlarge');

          $('.back2').toggleClass('notransform');
        }, 4000);

        setTimeout(function () {

          $('.back2').fadeOut(2000);
          $('.front2').fadeOut(2000, function () {
            setTimeout(function () {
              $('.back2').fadeIn(1000);
            }, 500);
          });
        }, 1800);
      });

      $('.card2').toggleClass('no-hover');
    });

  // //////////////Navigation Toggle Back Button////////////////////
  // //////////////Navigation Toggle Back Button////////////////////

  $('.back-button2').on('click', function () {
    $('.card-container2').toggleClass('open').promise().done(function () {

          setTimeout(function () {

            $('.card2').toggleClass('enlarge');

            $('.back2').toggleClass('notransform');
          }, 1);

          setTimeout(function () {

            $('.back2').fadeIn(2000);
            $('.front2').fadeIn(2000, function () {
              setTimeout(function () {
                $('.back2').fadeOut(1000);
              }, 500);
            });
          }, 1);

          $('.card-container1').toggleClass('disappear').promise().done(function () {
              $('.front1').fadeIn(1000, function () {
                $('.card-container1').css({
                  'visibility': 'visible',
                });
              });
            });

          $('.card-container3').toggleClass('disappear').promise().done(function () {
              $('.front3').fadeIn(1000, function () {
                $('.card-container3').css({
                  'visibility': 'visible',
                });
              });
            });

          $('.card-container4').toggleClass('disappear').promise().done(function () {
              $('.front4').fadeIn(1000, function () {
                $('.card-container4').css({
                  'visibility': 'visible',
                });
              });
            });
        });

    $('.card2').toggleClass('no-hover');
  });

  // //////////////Navigation Toggle END////////////////////
  // //////////////Navigation Toggle END////////////////////
  // //////////////Navigation Toggle END////////////////////

  // //////////////Navigation Toggle Start Card-Container3////////////////////
  // //////////////Navigation Toggle Start Card-Container3////////////////////
  // //////////////Navigation Toggle Start Card-Container3////////////////////

  $('.front3').on('click', function () {

      $('.card-container3').toggleClass('open').promise().done(function () {

        // //////////////disappearing Cards////////////////////////
        // //////////////disappearing Cards////////////////////////

        $('.card-container1').toggleClass('disappear').promise().done(function () {
          $('.front1').fadeOut(1000, function () {
            $('.card-container1').css({
              'visibility': 'hidden',
            });
          });
        });

        $('.card-container2').toggleClass('disappear').promise().done(function () {
          $('.front2').fadeOut(1000, function () {
            $('.card-container2').css({
              'visibility': 'hidden',
            });
          });
        });

        $('.card-container4').toggleClass('disappear').promise().done(function () {
          $('.front4').fadeOut(1000, function () {
            $('.card-container4').css({
              'visibility': 'hidden',
            });
          });
        });

        // //////////////Card Enlargement and Fade on Nav////////////////////////
        // //////////////Card Enlargement and Fade on Nav////////////////////////

        setTimeout(function () {

          $('.card3').toggleClass('enlarge');

          $('.back3').toggleClass('notransform');
        }, 4000);

        setTimeout(function () {

          $('.back3').fadeOut(2000);
          $('.front3').fadeOut(2000, function () {
            setTimeout(function () {
              $('.back3').fadeIn(1000);
            }, 500);
          });
        }, 1800);

      });

      $('.card3').toggleClass('no-hover');
    });

  // //////////////Navigation Toggle Back Button////////////////////
  // //////////////Navigation Toggle Back Button////////////////////

  $('.back-button3').on('click', function () {
    $('.card-container3').toggleClass('open').promise().done(function () {

          setTimeout(function () {

            $('.card3').toggleClass('enlarge');

            $('.back3').toggleClass('notransform');
          }, 1);

          setTimeout(function () {

            $('.back3').fadeIn(2000);
            $('.front3').fadeIn(2000, function () {
              setTimeout(function () {
                $('.back3').fadeOut(1000);
              }, 500);
            });
          }, 1);

          $('.card-container1').toggleClass('disappear').promise().done(function () {
            $('.front1').fadeIn(1000, function () {
              $('.card-container1').css({
                'visibility': 'visible',
              });
            });
          });

          $('.card-container2').toggleClass('disappear').promise().done(function () {
            $('.front2').fadeIn(1000, function () {
              $('.card-container2').css({
                'visibility': 'visible',
              });
            });
          });

          $('.card-container4').toggleClass('disappear').promise().done(function () {
            $('.front4').fadeIn(1000, function () {
              $('.card-container4').css({
                'visibility': 'visible',
              });
            });
          });
        });

    $('.card3').toggleClass('no-hover');
  });

  // //////////////Navigation Toggle END////////////////////
  // //////////////Navigation Toggle END////////////////////
  // //////////////Navigation Toggle END////////////////////

  // //////////////Navigation Toggle Start Card-Container4////////////////////
  // //////////////Navigation Toggle Start Card-Container4////////////////////
  // //////////////Navigation Toggle Start Card-Container4////////////////////

  $('.front4').on('click', function () {

      $('.card-container4').toggleClass('open').promise().done(function () {

        // //////////////disappearing Cards////////////////////////
        // //////////////disappearing Cards////////////////////////

        $('.card-container1').toggleClass('disappear').promise().done(function () {
          $('.front1').fadeOut(1000, function () {
            $('.card-container1').css({
              'visibility': 'hidden',
            });
          });
        });

        $('.card-container2').toggleClass('disappear').promise().done(function () {
          $('.front2').fadeOut(1000, function () {
            $('.card-container2').css({
              'visibility': 'hidden',
            });
          });
        });

        $('.card-container3').toggleClass('disappear').promise().done(function () {
          $('.front3').fadeOut(1000, function () {
            $('.card-container3').css({
              'visibility': 'hidden',
            });
          });
        });

        // //////////////Card Enlargement and Fade on Nav////////////////////////
        // //////////////Card Enlargement and Fade on Nav////////////////////////

        setTimeout(function () {

          $('.card4').toggleClass('enlarge');

          $('.back4').toggleClass('notransform');
        }, 4000);

        setTimeout(function () {

          $('.back4').fadeOut(2000);
          $('.front4').fadeOut(2000, function () {
            setTimeout(function () {
              $('.back4').fadeIn(1000);
            }, 500);
          });
        }, 1800);

      });

      $('.card4').toggleClass('no-hover');
    });

  // //////////////Navigation Toggle Back Button////////////////////
  // //////////////Navigation Toggle Back Button////////////////////

  $('.back-button4').on('click', function () {
    $('.card-container4').toggleClass('open').promise().done(function () {

          setTimeout(function () {

            $('.card4').toggleClass('enlarge');

            $('.back4').toggleClass('notransform');
          }, 1);

          setTimeout(function () {

            $('.back4').fadeIn(2000);
            $('.front4').fadeIn(2000, function () {
              setTimeout(function () {
                $('.back4').fadeOut(1000);
              }, 500);
            });
          }, 1);

          $('.card-container1').toggleClass('disappear').promise().done(function () {
            $('.front1').fadeIn(1000, function () {
              $('.card-container1').css({
                'visibility': 'visible',
              });
            });
          });

          $('.card-container2').toggleClass('disappear').promise().done(function () {
            $('.front2').fadeIn(1000, function () {
              $('.card-container2').css({
                'visibility': 'visible',
              });
            });
          });

          $('.card-container3').toggleClass('disappear').promise().done(function () {
            $('.front3').fadeIn(1000, function () {
              $('.card-container3').css({
                'visibility': 'visible',
              });
            });
          });
        });

    $('.card4').toggleClass('no-hover');
  });

  // //////////////Navigation Toggle END////////////////////
  // //////////////Navigation Toggle END////////////////////
  // //////////////Navigation Toggle END////////////////////

  $(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    $('.b1-title').css({
      'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.back-bird').css({
      'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('fore-bird').css({
      'transform': 'translate(0px, -' + wScroll / 40 + '%)' //make it negative with a negative sign to make object go up!!!
    });
  });

});
