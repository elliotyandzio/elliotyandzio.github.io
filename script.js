$(document).ready(function() {

  const navBarSize = 52;
  // START OF CODE TO CHANGE THE COLOUR OF THE NAVBAR DEPENDING ON THE SECTION
  $(document).on('scroll', function() {
    if( $(this).scrollTop() >= ($('#personalBio').position().top) - navBarSize ){
      $( "div.navbar-brand" ).css('background-color', 'white');
      $( "#navbarMenuHeroA, .navbar-burger" ).removeClass( "has-background-light" );
      $( "#navbarMenuHeroA, .navbar-burger" ).removeClass( "has-background-black" );
      $( "#navbarMenuHeroA, .navbar-burger" ).removeClass( "has-background-red" );
      $( "#navbarMenuHeroA, .navbar-burger" ).addClass( "has-background-white" );
      $( "#navbarMenuHeroA, .navbar-burger, a" ).addClass( "has-text-black" );
      $( "#navbarMenuHeroA, .navbar-burger, a" ).removeClass( "has-text-white" );
    }
    if( $(this).scrollTop() >= ($('#project4').position().top) - navBarSize ){
      $( "div.navbar-brand" ).css('background-color', 'white');
      $( "#navbarMenuHeroA, .navbar-burger" ).removeClass( "has-background-black" );
      $( "#navbarMenuHeroA, .navbar-burger" ).removeClass( "has-background-red" );
      $( "#navbarMenuHeroA, .navbar-burger" ).addClass( "has-background-light" );
      $( "#navbarMenuHeroA, .navbar-burger, a" ).addClass( "has-text-black" );
      $( "#navbarMenuHeroA, .navbar-burger, a" ).removeClass( "has-text-white" );
    }
    if( $(this).scrollTop() >= ($('#project3').position().top) - navBarSize ){
      $( "div.navbar-brand" ).css('background-color', '#DB3B35');
      $( "#navbarMenuHeroA, .navbar-burger" ).removeClass( "has-background-white" );
      $( "#navbarMenuHeroA, .navbar-burger" ).removeClass( "has-background-light" );
      $( "#navbarMenuHeroA, .navbar-burger" ).removeClass( "has-background-black" );
      $( "#navbarMenuHeroA, .navbar-burger" ).addClass( "has-background-red" );
      $( "#navbarMenuHeroA, .navbar-burger, a" ).addClass( "has-text-black" );
      $( "#navbarMenuHeroA, .navbar-burger, a" ).removeClass( "has-text-white" );
    }
    if( $(this).scrollTop() >= ($('#project2').position().top) - navBarSize ){
      $( "div.navbar-brand" ).css('background-color', 'black');
      $( "#navbarMenuHeroA, .navbar-burger" ).removeClass( "has-background-red" );
      $( "#navbarMenuHeroA, .navbar-burger" ).addClass( "has-background-black" );
      $( "#navbarMenuHeroA, .navbar-burger, a" ).removeClass( "has-text-black" );
      $( "#navbarMenuHeroA, .navbar-burger, a" ).addClass( "has-text-white" );
    }
    if( $(this).scrollTop() >= ($('#project1').position().top) - navBarSize ){
      $( "div.navbar-brand" ).css('background-color', 'white');
      $( "#navbarMenuHeroA, .navbar-burger" ).removeClass( "has-background-black" );
      $( "#navbarMenuHeroA, .navbar-burger" ).addClass( "has-background-white" );
      $( "#navbarMenuHeroA, .navbar-burger, a" ).removeClass( "has-text-white" );
      $( "#navbarMenuHeroA, .navbar-burger, a" ).addClass( "has-text-black" );
    }
  });
  // END OF CODE TO CHANGE THE COLOUR OF THE NAVBAR DEPENDING ON THE SECTION

  //START OF THE CODE TO SCROLL TO THE DESIRED PROJECT WHEN NAVBAR ITEM CLICKED
  $("#bio").click(function() {
    $('html, body').animate({
      scrollTop: $("#personalBio").offset().top
    }, 2000);
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
  //END OF THE CODE TO SCROLL TO THE DESIRED PROJECT WHEN NAVBAR ITEM CLICKED


  //START OF WHEN NAV-ITEM HOVERED ADD BOLD CLASS, WHEN OUTSIDE OF HOVER REMOVE CLASS BOLD
  $(".navbar-item").mouseover(function() {
    $(this).addClass("has-text-weight-bold");
  })

  $(".navbar-item").mouseleave(function() {
    $(this).removeClass("has-text-weight-bold");
  })
  //END OF WHEN NAV-ITEM HOVERED ADD BOLD CLASS, WHEN OUTSIDE OF HOVER REMOVE CLASS BOLD

  $('.navbar-burger').click(function() {
  $('#navbarMenuHeroA, .navbar-burger').toggleClass('is-active');
});

});
