$(document).ready(function() {
    $(".navbar-toggler").click(function() {
      $(this).toggleClass("show");
      $('.navbar-collapse').slideToggle(300, function(){
        if($(this).css('display') === "none"){
          $(this).removeAttr('style');
        }
      });
    });
  });