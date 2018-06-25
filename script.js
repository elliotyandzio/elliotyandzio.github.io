$(document).ready(function() {

  const navBarSize = 52;
  // START OF CODE TO CHANGE THE COLOUR OF THE NAVBAR DEPENDING ON THE SECTION
  $(document).on('scroll', function() {
    if( $(this).scrollTop() >= ($('#project4').position().top) - navBarSize ){
      $( "nav" ).removeClass( "is-black" );
      $( "nav" ).removeClass( "is-danger" );
      $( "nav" ).addClass( "is-white" );
    }
    if( $(this).scrollTop() >= ($('#project3').position().top) - navBarSize ){
      $( "nav" ).removeClass( "is-white" );
      $( "nav" ).addClass( "is-danger" );
    }
    if( $(this).scrollTop() >= ($('#project2').position().top) - navBarSize ){
      $( "nav" ).removeClass( "is-danger" );
      $( "nav" ).addClass( "is-black" );
    }
    if( $(this).scrollTop() >= ($('#project1').position().top) - navBarSize ){
      $( "nav" ).removeClass( "is-black" );
      $( "nav" ).addClass( "is-white" );
    }
  });
  // END OF CODE TO CHANGE THE COLOUR OF THE NAVBAR DEPENDING ON THE SECTION

  //START OF THE CODE TO SCROLL TO THE DESIRED PROJECT WHEN NAVBAR ITEM CLICKED
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
  //END OF THE CODE TO SCROLL TO THE DESIRED PROJECT WHEN NAVBAR ITEM CLICKED

});
