$(document).ready(function () {
  // Show loader for 0.5s
  setTimeout(function () {
    $(".loader").fadeOut("slow", function () {
      // After loader hides, show content smoothly
      $(".content").fadeIn(1000);
    });
  }, 500); // 0.5 seconds
});
