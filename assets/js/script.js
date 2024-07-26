$(document).ready(function () {
  // Inicialización de Typed.js
  var typedElement = $(".typed");
  var options = {
    strings: typedElement.data("typed-items").split(", "),
    typeSpeed: 60,
    backSpeed: 25,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
  };
  new Typed(".typed", options);

  // Inicialización de AOS
  AOS.init({
    duration: 1000,
    once: false,
  });
  $("#portfolioModal").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget);
    var imageSrc = button.data("image");
    var description = button.data("description");
    var liveLink = button.data("live");
    var repoLink = button.data("repo");

    $("#modalImage").attr("src", imageSrc);
    $("#modalDescription").html(description);

    if (liveLink) {
        $("#modalLiveLink").attr("href", liveLink).show();
    } else {
        $("#modalLiveLink").hide();
    }

    $("#modalRepoLink").attr("href", repoLink);
});
});
