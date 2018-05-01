jQuery(document).ready(function($) {
  //Menu
  $('.menu-main-button').click(function() {
      $('.menu-main-button').toggleClass('menu-main-button-active');
      $('.menu-main').toggleClass('menu-main-active');
  });
  $('.menu-main li').click(function() {
      $('.menu-main').toggleClass('menu-main-active');
      $('.menu-main-button').toggleClass('menu-main-button-active');
  });
  //Scroll
  $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
          $('#main_menu').slideUp();
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  $('html, body').animate({
                      scrollTop: target.offset().top - 0
                  }, 1000);
                  return false;
                  console.log(target.offset().top);
              }
          }
      });
  });
  //sliders
  $('.slider-stats').slick({
		slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    prevArrow: '<button type="button" class="slider-stats-button prev"><img src="img/Home_page/arrow-slider.png" alt="Arrow"></button>',
		nextArrow: '<button type="button" class="slider-stats-button next"><img src="img/Home_page/arrow-slider.png" alt="Arrow"></button>',
  });
  $('.slider').slick({
		arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });
  $('.slider-center-mode').slick({
    dots: true,
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    focusOnSelect: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
            arrows: false,
            slidesToShow: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            arrows: false,
            slidesToShow: 1
        }
    }]
});
});
