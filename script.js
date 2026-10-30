// SmithCircuit. Only one job here: a subtle fade-in for sections.
// The newsletter form is a placeholder. Wire its action up on your end.

(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.reveal');

  // Skip the effect if motion is reduced or observers are unavailable.
  // In that case the content stays fully visible.
  if (reduceMotion || !('IntersectionObserver' in window)) {
    return;
  }

  // Hide only once we know the observer will reveal the items.
  document.documentElement.classList.add('js');

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(function (el) {
    observer.observe(el);
  });
})();
