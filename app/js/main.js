$(function () {

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "17px",
    readOnly: true
  });

  $('.weekly__slider-inner').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__prev" src="images/back.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__next" src="images/right.svg" alt=""></img>',
  });

});


