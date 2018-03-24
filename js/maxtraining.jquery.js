// Jquery

$(".button-collapse").sideNav();

// carousel
$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
    dist: 0,
});
setInterval(function() {
    $('.carousel.carousel-slider').carousel('next');
}, 4000);
        
// parallax
$(document).ready(function(){
    $('.parallax').parallax();
});
