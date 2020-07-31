$(document).ready(function () {
  var header = $("#header");
  var introH = $("#intro").innerHeight();
  var scrollOffset = $(window).scrollTop();

  /* Fixed Header */
  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /* Smooth scroll */

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data("scroll"),
      blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate(
      {
        scrollTop: blockOffset,
      },
      500
    );
  });

  // Burger Menu
  // Open
  $(".header__burger").on("click", function () {
    $(this).removeClass("active");
    $(".header__close").addClass("active");
    $("#nav").addClass("active");
  });

  // Close
  $(".header__close").on("click", function () {
    $(this).removeClass("active");
    $(".header__burger").addClass("active");
    $("#nav").removeClass("active");
  });
});
