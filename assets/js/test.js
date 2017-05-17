var slideshowLength = 3000;
function owlCircle() {
  if($(".circle").length) {
    $('.circle').remove();
  }
  $(".owl-dot:not(.active) span").css('visibility', 'visible');
  $(".owl-dot.active").append("<div class='circle'></div>");
  var circle = new ProgressBar.Circle('.owl-dot.active .circle', {
    color: '#FCB03C',
    strokeWidth: 10,
    duration: slideshowLength
  });

  circle.animate(1, function() {})
};

$(document).ready(function() {

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: slideshowLength,
    info: true
  });
  owl.on('changed.owl.carousel', function(event) {
    owlCircle();
  });
  owl.on('initialized.owl.carousel', function(event) {
    owlCircle()
  });
});
$(window).load(function() {
  owlCircle()
})
