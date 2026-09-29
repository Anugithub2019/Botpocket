// Fade sections in as they scroll into view.
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px" },
  );
  document.querySelectorAll(".video-section, .section, .principle").forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}
