$(".switch #first").on("click", function () {
  if ($(".switch #first").hasClass("fill-square")) {
    return;
  }

  $(".switch #first").toggleClass("fill-square");
  $(".switch #first").toggleClass("square");

  $(".switch #second").toggleClass("square");
  $(".switch #second").toggleClass("fill-square");

  $("#first-photo").toggleClass("hidden-first");
  $("#second-photo").toggleClass("hidden-second");

  $("#first-quote").toggleClass("hidden-first-quote");
  $("#second-quote").toggleClass("hidden-second-quote");
});

$(".switch #second").on("click", function () {
  if ($(".switch #second").hasClass("fill-square")) {
    return;
  }

  $(".switch #second").toggleClass("fill-square");
  $(".switch #second").toggleClass("square");

  $(".switch #first").toggleClass("square");
  $(".switch #first").toggleClass("fill-square");

  $("#first-photo").toggleClass("hidden-first");
  $("#second-photo").toggleClass("hidden-second");

  $("#first-quote").toggleClass("hidden-first-quote");
  $("#second-quote").toggleClass("hidden-second-quote");
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

var navbarBtn = $(".navbar .nav li");
navbarBtn.on("click", function () {
  $(".navbar .nav li").each(function (index, element) {
    element.classList.remove('active');
  });
  $(this).toggleClass('active');
});
