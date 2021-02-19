/*start home */


$(".nav .navbar-nav li a").click(function(){
  var href=$(this).attr("href");
  $("body ,html").animate({scrollTop:$(href).offset().top - 190},1100)
})


$(".table .toast button").click(function(){
  $(".table .toast").css("display","none")
})


/* end home */