$(window).on("scroll", function () {
  let nav = $("#nav");
  if ($(window).scrollTop() > 0) {
      nav.css({
          position: "fixed",
          top: "0",
          width: "100%",
          boxShadow: "var(--shadow-sm)"
      });
  } else {
      nav.css({
          position: "static",
          boxShadow: "none"
      });
  }
});

$(document).ready(function () {
    $("#menu a").on("click", function (e) {
        e.preventDefault();
        let target = $($(this).attr("href"));

        if (target.length) {
            $("html, body").animate(
                { scrollTop: target.offset().top - 86 }, 
                500, 
                "swing" // Smooth easing
            );
        }
    });
});


$(document).ready(function () {
    function isSmallScreen() {
        return $(window).width() <= 768; // Adjust the breakpoint as needed
    }

    $("#open-menu").on("click", function () {
        if (isSmallScreen()) {
            $("#menu").addClass("show").slideDown();
        }
    });

    $("#menu a").on("click", function () {
        if (isSmallScreen()) {
            $("#menu").fadeOut(300);
        }
    });

    $("#close-menu").on("click", function () {
        if (isSmallScreen()) {
            $("#menu").slideUp();
        }
    });

    // Ensure menu is always visible when resizing back to large screens
    $(window).on("resize", function () {
        if (!isSmallScreen()) {
            $("#menu").show();
        } else {
            $("#menu").hide();
        }
    });
});


