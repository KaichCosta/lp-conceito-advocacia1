/**
 * SITE ADV - Micro-interações e Comportamento Interativo
 * 1. IntersectionObserver para animação suave de entrada dos elementos
 * 2. Navegação dos sliders de Depoimentos e Artigos (Blog)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. IntersectionObserver para revelação progressiva
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  const animatedElements = document.querySelectorAll(
    '.service-card, .pillar-card, .testimonial-card, .blog-card, .split-visual, .split-content, .cta-banner'
  );

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    revealObserver.observe(el);
  });

  // 2. Controles de Deslocamento Suave nos Sliders
  const setupSlider = (prevBtnId, nextBtnId, trackId) => {
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    const track = document.getElementById(trackId);

    if (!prevBtn || !nextBtn || !track) return;

    nextBtn.addEventListener('click', () => {
      const scrollAmount = track.firstElementChild ? track.firstElementChild.offsetWidth + 24 : 320;
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      const scrollAmount = track.firstElementChild ? track.firstElementChild.offsetWidth + 24 : 320;
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  };

  setupSlider('prevTestimonial', 'nextTestimonial', 'testimonialsTrack');
  setupSlider('prevBlog', 'nextBlog', 'blogTrack');
});
