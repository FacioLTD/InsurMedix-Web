'use client'
import { useEffect } from 'react';

export default function CtaSwapController() {
  useEffect(() => {
    const header  = document.querySelector('.site-header') as HTMLElement | null;
    const heroCta = document.getElementById('hero-cta');
    const navCta  = document.getElementById('nav-cta');
    const navCtaMobile = document.getElementById('nav-cta-mobile');

    if (!header || !heroCta || !navCta) return;

    const setupObserver = () => {
      const headerH = header.offsetHeight || 0;
      (window as any)._ctaIO?.disconnect?.();

      (window as any)._ctaIO = new IntersectionObserver(([entry]: IntersectionObserverEntry[]) => {
        const stuck = !entry.isIntersecting;
        navCta.classList.toggle('is-visible', stuck);
        if (navCtaMobile) navCtaMobile.classList.toggle('is-visible', stuck);
        heroCta.classList.toggle('is-hidden', stuck);
      }, { root: null, threshold: 0, rootMargin: `-${headerH + 4}px 0px 0px 0px` });

      (window as any)._ctaIO.observe(heroCta);
    };

    setupObserver();
    const onResize = () => requestAnimationFrame(setupObserver);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      (window as any)._ctaIO?.disconnect?.();
    };
  }, []);

  return null;
}
