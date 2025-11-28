// This file provides the interactivity for the static index.html.

document.addEventListener('DOMContentLoaded', () => {
  // Header scroll effect
  const header = document.querySelector('header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        header.classList.add('bg-white/10', 'backdrop-blur', 'shadow-sm', 'scrolled');
        header.classList.remove('bg-transparent');
      } else {
        header.classList.remove('bg-white/10', 'backdrop-blur', 'shadow-sm', 'scrolled');
        header.classList.add('bg-transparent');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run on load to set initial state
    handleScroll();
  }

  // Fade in sections on scroll
  const sections = document.querySelectorAll('.fade-in-section');
  if (sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optional: unobserve after it's visible so it doesn't re-trigger
          // observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    sections.forEach(section => {
      observer.observe(section);
    });
  }

});