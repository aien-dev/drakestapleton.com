// Reading progress line at the top of the page. It only scales one fixed bar,
// so it never moves or hides page content.
(function () {
  var bar = document.querySelector('.read-progress');
  if (!bar) return;
  var queued = false;
  function draw() {
    queued = false;
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, h.scrollTop / max) : 0) + ')';
  }
  function queue() {
    if (!queued) { queued = true; requestAnimationFrame(draw); }
  }
  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue, { passive: true });
  draw();
})();
