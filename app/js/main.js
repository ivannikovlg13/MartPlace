$(function () {

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "17px",
    readOnly: true
  });
  $(".release__star").rateYo({
    rating: 4.5,
    starWidth: "15px",
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

  $('.release__slider-inner').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: '<img class="slider-arrows slider-arrows__prev" src="images/back.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__next" src="images/right.svg" alt=""></img>',
  });

  $('.linearicons-list4').on('click', function () {
    $('.categories__item').addClass('list');
    $('.linearicons-list4').addClass('active');
    $('.linearicons-border-outer').removeClass('active');
  });
  $('.linearicons-border-outer').on('click', function () {
    $('.categories__item').removeClass('list');
    $('.linearicons-border-outer').addClass('active');
    $('.linearicons-list4').removeClass('active');
  });  

  $('.categories__aside-title-link').on('click',function(){
    $('.category__list-link').addClass('active').slideToggle();
  });

  $('.categories__aside-title-radio').on('click', function() {
    $('.category__list-radio').addClass('active').slideToggle();
  });
  
  $('.categories__aside-title-range').on('click', function(){
    $('.category__list-range').addClass('active').slideToggle();
  });



  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 320,
    from: 0,
    to: 300,
    prefix: "$"
  });



  $('input, select').styler();


  var mixer = mixitup('.release__inner-box');

});


