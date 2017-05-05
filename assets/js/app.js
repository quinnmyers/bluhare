//main carousel



$(document).ready(function () {
  var mainCarousel = $('.main-carousel');
  mainCarousel.owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 5000,
    speed: 2000,
    margin:10,
    nav:false,
    items:1,
    singleItem: true,
    animateOut: 'fadeOut'
  });
});

$(document).ready(function () {
  var bottomCarousel = $('.bottom-carousel');
  bottomCarousel.owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:3,
    autoplay: true,
    smartSpeed: 400,
    autoplayTimeout: 1000,
    autoplaySpeed: 300,
    center: true
  });
});
// normal toggle for mobile nav
/*$(document).ready(function () {
  $('.hamburger').on('click', function () {
    $('.mobile-nav').toggleClass('active');
  });
});
*/

//slide toggle for mobile nav
$(document).ready(function () {
  $('.hamburger').on('click', function () {
    $('.mobile-nav').slideToggle();
  });
});

/*var topOwl = $('.topSlider');
  topOwl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: slideshowLength,
    info: true
  });




















/*var slideshowLength = 3000;
function owlCircle() {
  if($(".circle").length) {
    $('.circle').remove();
  }
  $(".owl-dot.active").append("<div class='circle'></div>");
  var circle = new ProgressBar.Circle('.owl-dot.active .circle', {
    color: '#fff',
    strokeWidth: 8,
    duration: slideshowLength
  });

  circle.animate(1, function() {})
};


jQuery(function() {
  $('.drawer').drawer({
    class: {
      nav: 'drawer-nav',
        toggle: 'drawer-toggle',
        overlay: 'drawer-overlay',
        open: 'drawer-open',
        close: 'drawer-close',
        dropdown: 'drawer-dropdown'
    },
    iscroll: {
      mouseWheel: true,
      preventDefault: false
    },
    showOverlay: true
  });

  jQuery('.drawer-hamburger-icon').hover(function() {
    $('.drawer').drawer('open');
  })

  $(".drawer-menu > li").click(function() {
    $(this).find("ul").toggleClass('hide');
  });

  var topOwl = $('.topSlider');
    topOwl.owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: false,
      autoplay: true,
      autoplayTimeout: slideshowLength,
      info: true
    });
    topOwl.on('changed.owl.carousel', function(event) {
      owlCircle();
    });

      owlCircle()

var botOwl = $('.botSlider');
  botOwl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: slideshowLength,
    info: true
  });
})

$(window).load(function() {
  owlCircle()
})
*/
