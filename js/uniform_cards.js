$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
      items:1,
      autoplay:true,
      loop:true,
      responsiveClass:true, 
   
});


$("#collabse").click(function(){
  $(".collabse").toggleClass("disabled")
})

})