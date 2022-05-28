// banner
jQuery(document).ready(function(){
  //skd slider
    jQuery('#demo1').skdslider({
      slideSelector: '.slide',
      delay:5000,
      animationSpeed:2000,
      showNextPrev:true,
      showPlayButton:true,
      autoSlide:true,
      animationType:'fading'
    });

    //counter
    $('.counter').counterUp({
      delay: 5,
      duration: 5000,
    });
});