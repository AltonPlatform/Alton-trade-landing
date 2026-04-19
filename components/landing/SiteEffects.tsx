'use client';

import { useEffect } from 'react';

export function SiteEffects() {
  useEffect(() => {
    const header = document.getElementById('header');
    const onScroll = () => {
      if (!header) return;
      if (window.scrollY > 80) {
        header.classList.add('glass-active');
      } else {
        header.classList.remove('glass-active');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const fadeElements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );
    fadeElements.forEach((el) => observer.observe(el));

    const tabBtns = document.querySelectorAll('.tab-btn');
    const panelUsers = document.getElementById('panel-users');
    const panelCreators = document.getElementById('panel-creators');

    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        tabBtns.forEach((b) => {
          b.classList.remove('tab-active');
          b.classList.add('bg-brand-card', 'text-white', 'font-normal');
          b.classList.remove('font-semibold');
        });
        btn.classList.add('tab-active', 'font-semibold');
        btn.classList.remove('bg-brand-card', 'text-white', 'font-normal');

        const tab = (btn as HTMLElement).dataset.tab;
        const showPanel =
          tab === 'users' ? panelUsers : panelCreators;
        const hidePanel =
          tab === 'users' ? panelCreators : panelUsers;
        hidePanel?.classList.add('hidden');
        showPanel?.classList.remove('hidden');
        showPanel?.querySelectorAll('.fade-up:not(.visible)').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 80);
        });
      });
    });

    const roadmapTimeline = document.getElementById('roadmap-timeline');
    const phases = document.querySelectorAll('.roadmap-phase');
    const phaseObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('phase-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );
    phases.forEach((p) => phaseObserver.observe(p));

    const segGreen = document.getElementById('seg-green');
    const segYellow = document.getElementById('seg-yellow');
    const segGray = document.getElementById('seg-gray');

    const updateRoadmapProgress = () => {
      if (!roadmapTimeline || !segGreen) return;
      const timelineRect = roadmapTimeline.getBoundingClientRect();
      const totalH = timelineRect.height;
      if (totalH <= 0) return;

      const icons = roadmapTimeline.querySelectorAll('.roadmap-icon');
      if (icons.length < 4) return;

      const iconCenters = Array.from(icons).map((icon) => {
        const r = icon.getBoundingClientRect();
        return r.top + r.height / 2 - timelineRect.top;
      });

      const seg1Top = 0;
      const seg1MaxH = iconCenters[1] + 20;
      const seg2Top = seg1MaxH;
      const seg2MaxH = iconCenters[2] + 20 - seg2Top;
      const seg3Top = seg2Top + seg2MaxH;

      const scrolled = Math.max(
        0,
        -timelineRect.top + window.innerHeight * 0.5,
      );
      const progress = Math.min(1, Math.max(0, scrolled / totalH));
      const fillPx = progress * totalH;

      const g = Math.max(0, Math.min(seg1MaxH, fillPx - seg1Top));
      segGreen.style.top = `${seg1Top}px`;
      segGreen.style.height = `${g}px`;

      const y = Math.max(0, Math.min(seg2MaxH, fillPx - seg2Top));
      if (segYellow) {
        segYellow.style.top = `${seg2Top}px`;
        segYellow.style.height = `${y}px`;
      }

      const seg3MaxH = totalH - seg3Top;
      const gr = Math.max(0, Math.min(seg3MaxH, fillPx - seg3Top));
      if (segGray) {
        segGray.style.top = `${seg3Top}px`;
        segGray.style.height = `${gr}px`;
      }
    };
    window.addEventListener('scroll', updateRoadmapProgress, { passive: true });
    window.addEventListener('resize', updateRoadmapProgress);
    updateRoadmapProgress();

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || !targetId) return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const headerHeight = 80;
          const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      });
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
      phaseObserver.disconnect();
      window.removeEventListener('scroll', updateRoadmapProgress);
      window.removeEventListener('resize', updateRoadmapProgress);
    };
  }, []);

  return null;
}
