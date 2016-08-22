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
      $("#about-holder").css("min-height", $(window).height()/2);
      $("aside").css("min-height", $(window).height());
    } else {
      /* xs sm */ 
      hideContact();
      $("main").css("height", "100%");
      $("#contact-holder").css("min-height", $(window).height()*0.75);
      $("#about-holder").css("min-height", $(window).height()*0.75);
      $("aside").css("min-height", $(window).height()*1.2);
    }
    $("#email-holder").css("min-height", $(window).height()*.5);
    $("#map-holder").css("min-height", $(window).height()*.5);
    $("#logo-holder").css("min-height", $(window).height()/3);
    $(".modal-holder").css("min-height", $("#view").height() );
  }
  
  
  
  $("#map-holder").click(function(){
    $("#map-holder").addClass("removed");
  });
  $("#map-holder").mouseleave(function(){
    $("#map-holder").removeClass("removed");
  });
  
  
  
  function initMap() {
    var map;
    map = new google.maps.Map(document.getElementById('card-map'), {
      center: {lat: 37.557218, lng: -77.453039},
      zoom: 15,
      styles: [
                {
                    "featureType": "all",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#f1efe8"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#f1efe8"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#b2ac83"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#b2ac83"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#8ac0c4"
                        }
                    ]
                }
            ]
    });
  }
  
  
  
  /* show/hide contact modal */
  $("#contact-button").click(function() {
    if($("#modal-contact").is(":hidden")){
      $("#modal-contact").fadeIn(800);
      $("#contact-exit").fadeIn(800);
      $("#card-map").css("min-height", $("#test").height());
      $("#card-info").css("min-height", $("#test").height()/2);
      $("#card-subscribe").css("min-height", $("#test").height()/2);
      initMap();
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