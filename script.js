$(document).ready(function(){
  
  
  /* loader modal */
  setTimeout(function(){
    $('body').addClass('loaded');
    $('body').removeClass('modal-on');
  }, 2000);
    
  $(".modal-window").on("show", function () {
    $("body").addClass("modal-on");
  }).on("hidden", function () {
    $("body").removeClass("modal-on")
  });
  
  
  
  /* resize full-height divs on screen change */
  setHeight();
  var windowSize = $(window).height();
  window.onresize = function(event) {
    /* checks if resize is large enough to warrant change */
    /* used to prevent change when toolbar hides on phones */
    if(Math.abs(windowSize-$(window).height())>150){
      setHeight();
      windowSize = $(window).height();
    }
  };
  
  function setHeight() {
    /* size full-height divs to window */
    $("#view").height($(window).height());
    /* screen-size dependent heights */
    if($(window).width()>992){
      /* md lg */
      $("main").height($("#view").height());
      $("#contact-holder").css("min-height",          $(window).height()/6);
      $("#map-holder").css("min-height", $(window).height()/2);
      $("aside").css("min-height", $(window).height());
    } else {
      /* xs sm */
      $("main").css("height", "100%");
      $("#contact-holder").css("min-height", $(window).height()*0.75);
      $("#map-holder").css("min-height", $(window).height()*0.75);
      $("aside").css("min-height", $(window).height()*1.2);
    }
    $("#email-holder").css("min-height", $(window).height()*.5);
    $("#logo-holder").css("min-height", $(window).height()/3);
    $(".modal-holder").css("min-height", $("#view").height() )
  }
  
  
  
  /* show/hide contact modal */
  $("#contact-button").click(function() {
    if($("#modal-contact").is(":hidden")){
      $("#modal-contact").fadeIn(800);
      $("#contact-exit").fadeIn(800);
    } else {
      hideContact();
    }
  });
  $("#contact-exit").click(function(){hideContact()});
  function hideContact() {
    $("#modal-contact").css("pointer-events","all");
    $("#contact-exit").fadeOut(400);
    $("#modal-contact").fadeOut(800);
  }
  
  
});