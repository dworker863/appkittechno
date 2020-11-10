$(document).ready(function () {
  $('.third-button').on('click', function () {
    $('.animated-icon3').toggleClass('open');
  });

  $('.btn-show').click(function () {
    $('.row-show').toggleClass('d-none');
  })

  $('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    margin: 155,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      900: {
        items: 2
      },
      1200: {
        items: 3
      },
      1400: {
        items: 4,
        loop: false
      }
    }
  })
});