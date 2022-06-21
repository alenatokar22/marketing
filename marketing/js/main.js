$(function(){
  // var mixer = mixitup('.portfolio__content');

  $(".menu a, .go-top").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
  
  $('.slider__blog-inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="левая стрелка"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="правая стрелка"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false
        }
      },
    ]
  });

  $('.burger, .menu a').on('click', function () {
    $('.menu').toggleClass('menu--active');
    $('.burger').toggleClass('burger--active');
    $('body').toggleClass('lock');
  });
  
});
