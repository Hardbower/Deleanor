$(document).ready(function(){
  
  
  
  setTimeout(function(){
    $('body').addClass('loaded');
    $('body').removeClass('modal-on');
  }, 2000);
  
  
  
  /* resize full-height divs on screen change */
  setHeight();
  var windowSize = $(window).height();
  window.onresize = function(event) {
    /* checks if resize is large enough to warrant change */
    /* used to prevent change when toolbar hides on phones */
    //alert(Math.abs(windowSize-$(window).height()));
    if(Math.abs(windowSize-$(window).height())>150){
      setHeight();
      windowSize = $(window).height();
      //alert("changed to "+ $(window).height());
    }
  };
  
  function setHeight() {
    /* size full-height divs to window */
    $("#view").height($(window).height());
    /* expands scrolling pane to full size */
    if($(window).width()>992){
      $("main").height($("#view").height());
    } else {
      $("main").css("height", "100%");
    }
    $("aside").height($("#view").height());
    $("#logo-holder").css("min-height", $(window).height()/3);
    $("#map-holder").css("min-height", $(window).height()/2);
    $("#contact-holder").css("min-height",          $(window).height()/6);
    $(".modal-holder").css("min-height", $("#view").height() )
  }
  
  
  
  $(".modal-window").on("show", function () {
    $("body").addClass("modal-on");
  }).on("hidden", function () {
    $("body").removeClass("modal-on")
  });
  
  
  
  $("#contact-holder").click(function() {
    $("#modal-contact").fadeIn(800);
    $("#contact-exit").fadeIn(800);
  });
  $("#contact-exit").click(function() {
    $("#modal-contact").css("pointer-events","all");
    $("#contact-exit").fadeOut(400);
    $("#modal-contact").fadeOut(800);
  });
  
  
});