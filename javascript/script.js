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
