$(document).ready(function () {
  let slideIndex = 0;
  const slides = $(".slide");

  function showSlides() {
    slides.removeClass("active");
    slideIndex = (slideIndex + 1) % slides.length;
    slides.eq(slideIndex).addClass("active");
  }

  setInterval(showSlides, 4000); // every 4 seconds

  $("#playMusic").click(function () {
    $("#bg-music")[0].play();
    $(this).text("Playing 🎶").addClass("btn-success").removeClass("btn-primary").prop("disabled", true);
  });
});