$(document).ready(function () {
  let slideIndex = 0;
  const slides = $(".slide");

  function showSlides() {
    slides.removeClass("active");
    slideIndex = (slideIndex + 1) % slides.length;
    slides.eq(slideIndex).addClass("active");
  }

  setInterval(showSlides, 4000); // 4 seconds per slide

  const music = $("#bg-music")[0];

  // Try to autoplay music
  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        $("#playMusic").hide(); // Autoplay successful, hide button
      })
      .catch(() => {
        // Autoplay was blocked — show fallback button
        $("#playMusic").show().click(function () {
          music.play();
          $(this).text("Playing 🎶").addClass("btn-success").prop("disabled", true);
        });
      });
  }
});
