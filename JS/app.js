$(function () {
  new VenoBox({
    selector: '.popup',
    spinner: 'circle',
    border: '10px',
    infinigall: true,
    infinigall: true,
    autoplay: true,
    numeration: true,
    share: true,
    shareStyle: 'pill',
  });
  AOS.init();

  new TypeIt('#myElement', {
    speed: 100,
  })
    .delete(17)
    .type('Backend Services')
    .delete(16)
    .type('Services')
    .move(-12)
    .go();

  new TypeIt('#Element', {
    speed: 100,
  }).go();

  new TypeIt('#ment', {
    speed: 100,
  }).go();

  new TypeIt('#men', {
    speed: 100,
  }).go();

  mixitup('.wrapper');
});
