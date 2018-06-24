$(document).ready(function() {

  var $win = $(window);
  var winH = $win.height();   // Get the window height.
  var winH1 = (winH - 52);
  var winH2 = ((winH * 2) - 52);
  var winH3 = ((winH * 3) - 52);

    $win.on("scroll", function () {
      if ($(this).scrollTop() < winH1) {
        $( "nav" ).removeClass( "is-danger" );
        $( "nav" ).removeClass( "is-black" );
        $( "nav" ).addClass( "is-white" );
      }
      if ($(this).scrollTop() > winH1) {
        $( "nav" ).removeClass( "is-white" );
        $( "nav" ).addClass( "is-danger" );
      }
      if ($(this).scrollTop() > winH2) {
        $( "nav" ).removeClass( "is-danger" );
        $( "nav" ).addClass( "is-black" );
      }
      if($(this).scrollTop() > winH3) {
        $( "nav" ).removeClass( "is-black" );
        $( "nav" ).addClass( "is-white" );
      }
    }).on("resize", function(){ // If the user resizes the window
       winH = $(this).height(); // you'll need the new height value
    });

    $("#one").click(function() {
      $('html, body').animate({
          scrollTop: $("#project1").offset().top
        }, 2000);
    });

    $("#two").click(function() {
      $('html, body').animate({
          scrollTop: $("#project2").offset().top
        }, 2000);
    });

    $("#three").click(function() {
      $('html, body').animate({
          scrollTop: $("#project3").offset().top
        }, 2000);
    });

    $("#four").click(function() {
      $('html, body').animate({
          scrollTop: $("#project4").offset().top
        }, 2000);
    });
});
