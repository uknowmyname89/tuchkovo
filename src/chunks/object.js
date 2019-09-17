$(function () {
$('.slick-gallery__full').not('.no-thumb').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  cssEase: 'cubic-bezier(.51,.92,.24,1.15)',
  dots: false,
  asNavFor: '.slick-gallery__thumbnails',
});


$('.slick-gallery__full.no-thumb').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  dots: false,
});

$('.slick-gallery__thumbnails').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slick-gallery__full',
  dots: false,
  centerPadding: '120px',
  arrows: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
  ]
});

$('.slick-gallery__thumbnails .slick-slide').removeClass('slick-active');
$('.slick-gallery__thumbnails .slick-slide').eq(0).addClass('slick-active');

// On before slide change match slick-active thumbnail to current slide
$('.slick-gallery__full').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  var mySlideNumber = nextSlide;
  $('.slick-gallery__thumbnails .slick-slide').removeClass('slick-active');
  $('.slick-gallery__thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
});

});
