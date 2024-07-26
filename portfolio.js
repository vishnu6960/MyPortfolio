// $(document).ready(function(){
//    $('.navbar-nav .nav-link').on('click', function(){
//       $('.navbar-collapse').collapse('hide');
//    });
//  });

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the buttons
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
  // Collapse the navbar after clicking a link
  $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });

  // Smooth scrolling to sections
  $('a.nav-link').on('click', function(event) {
      if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;

          $('html, body').animate({
              scrollTop: $(hash).offset().top - $('.navbar').outerHeight()
          }, 100, function(){
              window.location.hash = hash - $('.navbar').outerHeight();
          });
      }
  });
});