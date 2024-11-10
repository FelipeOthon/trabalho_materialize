document.addEventListener('DOMContentLoaded', function() {
  // Inicializar o carousel
  var carouselElems = document.querySelectorAll('.carousel');
  M.Carousel.init(carouselElems, {
    fullWidth: true,
    indicators: true
  });

  // Inicializar modal e collapsible
  var modalElems = document.querySelectorAll('.modal');
  M.Modal.init(modalElems);

  var collapsibleElems = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsibleElems);
});
