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

