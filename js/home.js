/*start home */
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
      items:1,
      autoplay:true,
      nav:true,
      loop:true,
      responsiveClass:true, 
   
});







$("#login .input").focus(function(){
  $(this).css("border","2px solid #ffb606")
  $("#login .input").not(this).css("border","0px")
})

});

/* end home */