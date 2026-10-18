/* ============================================================
   Nanda — Portfolio | main.js
   Tema, bahasa (ID/EN), progress bar, reveal, scrollspy, tilt, nav
   ============================================================ */
(function () {
  'use strict';

  var root = document.documentElement;
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Kamus bahasa (tambahkan key baru di kedua bahasa) ---------- */
  var translations = {
    id: {
      'meta.title': 'Nanda — Developer & Designer',
      'meta.description': 'Portofolio Nanda — siswa, developer, designer, dan gamer. Membangun website dan desain antarmuka yang rapi, cepat, dan nyaman dipakai.',
      'skip': 'Langsung ke konten',

      'nav.home': 'Beranda',
      'nav.about': 'Tentang',
      'nav.projects': 'Project',
      'nav.services': 'Layanan',
      'nav.contact': 'Kontak',
      'nav.hire': 'Hire Me',

      'hero.greeting': 'Halo, saya',
      'hero.tagline': 'Siswa yang tumbuh setiap hari — membangun website dan merancang tampilan yang rapi, cepat, dan nyaman dipakai.',
      'hero.badgeDev': 'Developer',
      'hero.badgeDesign': 'Designer',
      'hero.badgeGamer': 'Gamer',
      'hero.ctaProjects': 'Lihat Project',
      'hero.ctaContact': 'Hubungi Saya',
      'hero.slide2.eyebrow': 'Terbuka untuk project',
      'hero.slide2.title': 'Butuh website?',
      'hero.slide2.tagline': 'Saya bantu dari desain sampai jadi — landing page, company profile, atau aplikasi web sederhana. Respon cepat, hasil rapi.',
      'hero.slide2.secondary': 'Lihat Layanan',
      'hero.slide3.eyebrow': 'Cara kerja sama',
      'hero.slide3.title': 'Dari ide, jadi kenyataan',
      'hero.slide3.tagline': 'Simpel, tanpa ribet. Kamu cukup cerita idenya, saya yang urus dari desain sampai jadi.',
      'hero.slide3.step1': '1. Cerita idemu',
      'hero.slide3.step2': '2. Saya kerjakan',
      'hero.slide3.step3': '3. Revisi & serah terima',
      'hero.slide3.cta': 'Mulai Obrolan',
      'a11y.carousel': 'Sorotan',
      'a11y.prev': 'Slide sebelumnya',
      'a11y.next': 'Slide berikutnya',
      'a11y.slide1': 'Slide 1',
      'a11y.slide2': 'Slide 2',
      'a11y.slide3': 'Slide 3',

      'about.eyebrow': 'Tentang',
      'about.title': 'Siswa yang tumbuh setiap hari',
      'about.p1': 'Hai, saya Nanda — seorang siswa yang percaya bahwa versi terbaik dari diri kita dibangun lewat langkah kecil yang konsisten. Saya senang mengubah ide menjadi produk nyata: mulai dari sistem manajemen, tampilan yang bersih, sampai detail kecil yang bikin pengalaman terasa menyenangkan.',
      'about.p2': 'Di luar coding dan desain, saya seorang gamer. Bermain bukan sekadar hobi — dari sana saya belajar strategi, ketekunan, dan cara melihat masalah dari sudut yang tidak terduga. Tiga hal itu yang saya bawa ke setiap project.',
      'about.dev.title': 'Developer',
      'about.dev.desc': 'Membangun website dan aplikasi web yang cepat, responsif, dan mudah digunakan.',
      'about.design.title': 'Designer',
      'about.design.desc': 'Merancang antarmuka yang bersih dan konsisten — dari wireframe sampai siap dikoding.',
      'about.gamer.title': 'Gamer',
      'about.gamer.desc': 'Strategi, ketekunan, dan refleks dari gaming yang saya bawa ke dunia kerja.',

      'projects.eyebrow': 'Project',
      'projects.title': 'Karya yang saya bangun',
      'projects.subtitle': 'Beberapa project pilihan yang saya kerjakan dari nol — dari desain sampai kode.',
      'p1.tag': 'Sistem Manajemen Fashion',
      'p1.desc': 'Aplikasi manajemen untuk bisnis fashion — mengelola produk, stok, dan pesanan dalam satu dasbor yang ringkas dan mudah dipakai. Dibangun dengan Laravel 12.',
      'p1.point1': 'Kelola produk & stok dengan rapi',
      'p1.point2': 'Alur pesanan yang jelas dan tertata',
      'p1.point3': 'Dasbor sederhana untuk pengguna baru',
      'p1.link': 'Lihat Project',
      'p2.tag': 'Sistem Manajemen Kecantikan',
      'p2.desc': 'Aplikasi untuk mengelola layanan beauty care — jadwal, pelanggan, dan layanan dalam satu tempat yang tertata. Dibangun dengan Laravel 12.',
      'p2.point1': 'Jadwal layanan tanpa bentrok',
      'p2.point2': 'Data pelanggan tersimpan rapi',
      'p2.point3': 'Ringkasan layanan dalam satu tampilan',
      'p2.link': 'Lihat Project',

      'services.eyebrow': 'Layanan',
      'services.title': 'Yang bisa saya bantu',
      'services.subtitle': 'Untuk kamu yang butuh website atau tampilan yang lebih rapi — dari pribadi sampai usaha kecil.',
      's1.title': 'Pengembangan Web',
      's1.desc': 'Website company profile, landing page, atau aplikasi web sederhana yang cepat dan responsif.',
      's2.title': 'Desain UI',
      's2.desc': 'Desain antarmuka yang bersih dan konsisten untuk website maupun aplikasi kamu.',
      's3.title': 'Perbaikan & Optimasi',
      's3.desc': 'Merapikan tampilan yang berantakan, mempercepat loading, dan membenahi kode.',

      'skills.eyebrow': 'Keahlian',
      'skills.title': 'Alat & keahlian',
      'skills.subtitle': 'Alat dan keahlian yang saya pakai sehari-hari.',
      'skills.dev': 'Development',
      'skills.design': 'Design',
      'skills.tools': 'Tools',

      'contact.eyebrow': 'Kontak',
      'contact.title': 'Mari bekerja sama',
      'contact.subtitle': 'Punya ide project, butuh website, atau sekadar ingin menyapa? Kirim pesan lewat salah satu kanal di bawah.',
      'c1.title': 'WhatsApp',
      'c1.desc': 'Obrolan cepat soal project, tanya-tanya, atau kolaborasi. Paling enak lewat sini.',
      'c2.title': 'GitHub',
      'c2.desc': 'Intip kode dan eksperimen saya di GitHub.',
      'c3.title': 'Email',
      'c3.desc': 'Untuk penawaran kerja sama dan hal-hal formal.',
      'cta.title': 'Mari wujudkan ide kamu',
      'cta.text': 'Ceritakan project kamu — saya siap membantu dari obrolan pertama sampai selesai.',
      'cta.wa': 'Chat via WhatsApp',
      'cta.mail': 'Kirim Email',

      'footer.rights': 'Dirancang & dibangun sendiri dengan HTML, CSS & JavaScript.'
    },

    en: {
      'meta.title': 'Nanda — Developer & Designer',
      'meta.description': 'Nanda\u2019s portfolio — a student, developer, designer, and gamer. Building clean, fast, and enjoyable websites and interfaces.',
      'skip': 'Skip to content',

      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.services': 'Services',
      'nav.contact': 'Contact',
      'nav.hire': 'Hire Me',

      'hero.greeting': 'Hi, I\u2019m',
      'hero.tagline': 'A student who grows every day — building websites and designing interfaces that are clean, fast, and a joy to use.',
      'hero.badgeDev': 'Developer',
      'hero.badgeDesign': 'Designer',
      'hero.badgeGamer': 'Gamer',
      'hero.ctaProjects': 'View Projects',
      'hero.ctaContact': 'Contact Me',
      'hero.slide2.eyebrow': 'Open for projects',
      'hero.slide2.title': 'Need a website?',
      'hero.slide2.tagline': 'I help from design to launch — landing pages, company profiles, or simple web apps. Quick replies, clean results.',
      'hero.slide2.secondary': 'View Services',
      'hero.slide3.eyebrow': 'How we work together',
      'hero.slide3.title': 'From idea to reality',
      'hero.slide3.tagline': 'Simple and hassle-free. You share the idea, I handle everything from design to launch.',
      'hero.slide3.step1': '1. Share your idea',
      'hero.slide3.step2': '2. I build it',
      'hero.slide3.step3': '3. Revisions & handover',
      'hero.slide3.cta': 'Start a Chat',
      'a11y.carousel': 'Highlights',
      'a11y.prev': 'Previous slide',
      'a11y.next': 'Next slide',
      'a11y.slide1': 'Slide 1',
      'a11y.slide2': 'Slide 2',
      'a11y.slide3': 'Slide 3',

      'about.eyebrow': 'About',
      'about.title': 'A student who grows every day',
      'about.p1': 'Hi, I\u2019m Nanda — a student who believes the best version of ourselves is built through small, consistent steps. I love turning ideas into real products: from management systems and clean interfaces to the tiny details that make an experience feel delightful.',
      'about.p2': 'Outside of coding and design, I\u2019m a gamer. Gaming isn\u2019t just a hobby — it taught me strategy, persistence, and how to approach problems from unexpected angles. Those three things come with me into every project.',
      'about.dev.title': 'Developer',
      'about.dev.desc': 'Building fast, responsive websites and web apps that are easy to use.',
      'about.design.title': 'Designer',
      'about.design.desc': 'Designing clean, consistent interfaces — from wireframe to code-ready.',
      'about.gamer.title': 'Gamer',
      'about.gamer.desc': 'Strategy, persistence, and reflexes from gaming that I bring into my work.',

      'projects.eyebrow': 'Projects',
      'projects.title': 'Things I\u2019ve built',
      'projects.subtitle': 'A few selected projects I built from scratch — from design to code.',
      'p1.tag': 'Fashion Management System',
      'p1.desc': 'A management app for a fashion business — handle products, stock, and orders in one clean, easy-to-use dashboard. Built with Laravel 12.',
      'p1.point1': 'Organize products & stock neatly',
      'p1.point2': 'A clear, well-ordered order flow',
      'p1.point3': 'A simple dashboard for first-time users',
      'p1.link': 'View Project',
      'p2.tag': 'Beauty & Care Management System',
      'p2.desc': 'An app to manage beauty care services — schedules, customers, and services in one organized place. Built with Laravel 12.',
      'p2.point1': 'Conflict-free service schedules',
      'p2.point2': 'Customer data neatly stored',
      'p2.point3': 'Service summary in a single view',
      'p2.link': 'View Project',

      'services.eyebrow': 'Services',
      'services.title': 'How I can help',
      'services.subtitle': 'For anyone who needs a website or a cleaner interface — from individuals to small businesses.',
      's1.title': 'Web Development',
      's1.desc': 'Company profiles, landing pages, or simple web apps — fast and responsive.',
      's2.title': 'UI Design',
      's2.desc': 'Clean, consistent interface design for your website or app.',
      's3.title': 'Fixes & Optimization',
      's3.desc': 'Tidy up messy layouts, speed up loading, and clean up the code.',

      'skills.eyebrow': 'Skills',
      'skills.title': 'Tools & skills',
      'skills.subtitle': 'Tools and skills I use every day.',
      'skills.dev': 'Development',
      'skills.design': 'Design',
      'skills.tools': 'Tools',

      'contact.eyebrow': 'Contact',
      'contact.title': 'Let\u2019s work together',
      'contact.subtitle': 'Got a project idea, need a website, or just want to say hi? Send a message through any of the channels below.',
      'c1.title': 'WhatsApp',
      'c1.desc': 'Quick chats about projects, questions, or collabs. The fastest way to reach me.',
      'c2.title': 'GitHub',
      'c2.desc': 'Take a look at my code and experiments on GitHub.',
      'c3.title': 'Email',
      'c3.desc': 'For work offers and formal inquiries.',
      'cta.title': 'Let\u2019s bring your idea to life',
      'cta.text': 'Tell me about your project — I\u2019ll help from the first chat to the finish line.',
      'cta.wa': 'Chat on WhatsApp',
      'cta.mail': 'Send an Email',

      'footer.rights': 'Designed & built by myself with HTML, CSS & JavaScript.'
    }
  };

  /* ---------- Tema ---------- */
  var themeToggle = document.getElementById('theme-toggle');
  if (!root.getAttribute('data-theme')) {
    root.setAttribute('data-theme',
      window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('nanda-theme', next); } catch (e) {}
    });
  }

  /* ---------- Bahasa ---------- */
  var langToggle = document.getElementById('lang-toggle');
  var metaDesc = document.querySelector('meta[name="description"]');

  function applyLang(lang) {
    var dict = translations[lang] || translations.id;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = dict[el.getAttribute('data-i18n')];
      if (val != null) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var val = dict[el.getAttribute('data-i18n-aria')];
      if (val != null) el.setAttribute('aria-label', val);
    });
    root.setAttribute('lang', lang);
    if (dict['meta.title']) document.title = dict['meta.title'];
    if (metaDesc && dict['meta.description']) metaDesc.setAttribute('content', dict['meta.description']);
    if (langToggle) langToggle.setAttribute('data-lang', lang);
    try { localStorage.setItem('nanda-lang', lang); } catch (e) {}
  }

  if (langToggle) {
    langToggle.addEventListener('click', function () {
      applyLang(langToggle.getAttribute('data-lang') === 'id' ? 'en' : 'id');
    });
  }
  var savedLang = 'id';
  try { savedLang = localStorage.getItem('nanda-lang') || 'id'; } catch (e) {}
  applyLang(savedLang === 'en' ? 'en' : 'id');

  /* ---------- Progress bar + nav scrolled ---------- */
  var progressFill = document.querySelector('.progress__fill');
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      var ratio = max > 0 ? doc.scrollTop / max : 0;
      if (progressFill) progressFill.style.transform = 'scaleX(' + ratio + ')';
      document.body.classList.toggle('is-scrolled', doc.scrollTop > 8);
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Anti-geser navbar (bug browser mobile) ----------
     Di sebagian browser mobile (mis. iOS 26) elemen fixed bergeser naik
     saat scroll. Jika terdeteksi, navbar dikunci ke visual viewport. */
  var navEl = document.getElementById('nav');
  if (navEl && window.visualViewport) {
    var lockNav = function () {
      var off = window.visualViewport.offsetTop || 0;
      navEl.style.transform = off > 0 ? 'translateY(' + off + 'px)' : '';
    };
    window.visualViewport.addEventListener('scroll', lockNav, { passive: true });
    window.visualViewport.addEventListener('resize', lockNav);
    lockNav();
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if (prefersReduced || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { revealIO.observe(el); });
  }

  /* ---------- Scrollspy ---------- */
  var navLinks = document.querySelectorAll('.nav__link');
  if ('IntersectionObserver' in window) {
    var spyIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = '#' + entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle('is-active', link.getAttribute('href') === id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (sec) { spyIO.observe(sec); });
  }

  /* ---------- Mobile nav ---------- */
  var burger = document.getElementById('nav-burger');
  var navMenu = document.getElementById('nav-menu');
  function closeMenu() {
    if (!navMenu) return;
    navMenu.classList.remove('is-open');
    if (burger) {
      burger.classList.remove('is-active');
      burger.setAttribute('aria-expanded', 'false');
    }
  }
  if (burger && navMenu) {
    burger.addEventListener('click', function () {
      var open = navMenu.classList.toggle('is-open');
      burger.classList.toggle('is-active', open);
      burger.setAttribute('aria-expanded', String(open));
    });
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ---------- Hero carousel ---------- */
  var heroCard = document.querySelector('.hero__card');
  var heroSlides = document.getElementById('hero-slides');
  if (heroCard && heroSlides) {
    var slideEls = heroSlides.querySelectorAll('.hero__slide');
    var heroDashes = heroCard.querySelectorAll('.hero__dash');
    var heroPrev = heroCard.querySelector('.hero__arrow--prev');
    var heroNext = heroCard.querySelector('.hero__arrow--next');
    var slideCount = slideEls.length;
    var slideIndex = 0;
    var dragging = false, dragStartX = 0, dragDX = 0;

    function renderHero() {
      heroSlides.style.transform = 'translateX(-' + (slideIndex * 100) + '%)';
      heroCard.setAttribute('data-slide', String(slideIndex));
      slideEls.forEach(function (s, i) {
        var active = i === slideIndex;
        s.classList.toggle('is-active', active);
        if (active) {
          s.removeAttribute('inert');
          s.removeAttribute('aria-hidden');
        } else {
          s.setAttribute('inert', '');
          s.setAttribute('aria-hidden', 'true');
        }
      });
      heroDashes.forEach(function (d, i) {
        d.classList.toggle('is-active', i === slideIndex);
        if (i === slideIndex) d.setAttribute('aria-current', 'true');
        else d.removeAttribute('aria-current');
      });
    }

    function goToSlide(i) {
      slideIndex = (i + slideCount) % slideCount;
      renderHero();
      scheduleAutoplay(); /* reset hitungan: 5 detik penuh setiap slide berubah */
    }

    if (heroPrev) heroPrev.addEventListener('click', function () { goToSlide(slideIndex - 1); });
    if (heroNext) heroNext.addEventListener('click', function () { goToSlide(slideIndex + 1); });
    heroDashes.forEach(function (d, i) {
      d.addEventListener('click', function () { goToSlide(i); });
    });

    /* Geser dengan swipe / drag */
    heroSlides.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      dragging = true;
      dragStartX = e.clientX;
      dragDX = 0;
      heroSlides.classList.add('is-dragging');
      heroCard.classList.add('is-dragging');
      if (heroSlides.setPointerCapture) heroSlides.setPointerCapture(e.pointerId);
    });
    heroSlides.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      dragDX = e.clientX - dragStartX;
      heroSlides.style.transform = 'translateX(calc(-' + (slideIndex * 100) + '% + ' + dragDX + 'px))';
    });
    function endHeroDrag() {
      if (!dragging) return;
      dragging = false;
      heroSlides.classList.remove('is-dragging');
      heroCard.classList.remove('is-dragging');
      if (Math.abs(dragDX) > 48) goToSlide(slideIndex + (dragDX < 0 ? 1 : -1));
      else goToSlide(slideIndex);
      dragDX = 0;
    }
    heroSlides.addEventListener('pointerup', endHeroDrag);
    heroSlides.addEventListener('pointercancel', endHeroDrag);

    /* Keyboard kiri/kanan saat hero terlihat */
    var heroInView = false;
    if ('IntersectionObserver' in window) {
      var heroIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { heroInView = en.isIntersecting; });
      }, { threshold: 0.4 });
      heroIO.observe(heroCard);
    } else {
      heroInView = true;
    }
    document.addEventListener('keydown', function (e) {
      if (!heroInView || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
      var t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)) return;
      if (e.key === 'ArrowLeft') goToSlide(slideIndex - 1);
      else if (e.key === 'ArrowRight') goToSlide(slideIndex + 1);
    });

    /* Autoplay: geser otomatis tiap 5 detik */
    var AUTOPLAY_MS = 5000;
    var autoplayTimer = null;
    var autoplayPaused = false;

    function scheduleAutoplay() {
      if (prefersReduced) return;
      window.clearTimeout(autoplayTimer);
      autoplayTimer = window.setTimeout(function () {
        if (!autoplayPaused && !dragging && heroInView && !document.hidden) {
          goToSlide(slideIndex + 1);
        } else {
          scheduleAutoplay();
        }
      }, AUTOPLAY_MS);
    }

    /* Berhenti saat kursor/fokus ada di kartu (desktop & keyboard) */
    if (window.matchMedia('(hover: hover)').matches) {
      heroCard.addEventListener('mouseenter', function () { autoplayPaused = true; });
      heroCard.addEventListener('mouseleave', function () { autoplayPaused = false; });
    }
    heroCard.addEventListener('focusin', function (e) {
      var t = e.target;
      if (!t || !t.matches) { autoplayPaused = true; return; }
      try {
        if (t.matches(':focus-visible')) autoplayPaused = true;
      } catch (err) {}
    });
    heroCard.addEventListener('focusout', function () { autoplayPaused = false; });
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) scheduleAutoplay();
    });

    renderHero();
    scheduleAutoplay();
  }

  /* ---------- Galeri screenshot project ---------- */
  document.querySelectorAll('.project__thumbs').forEach(function (thumbs) {
    var project = thumbs.closest('.project');
    var img = project ? project.querySelector('.project__shot img') : null;
    if (!img) return;
    var buttons = thumbs.querySelectorAll('.project__thumb');

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var src = btn.getAttribute('data-src');
        if (!src || btn.classList.contains('is-active')) return;

        buttons.forEach(function (b) {
          b.classList.remove('is-active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');

        var preload = new Image();
        img.style.opacity = '0';
        preload.onload = function () {
          img.src = src;
          var alt = btn.getAttribute('data-alt');
          if (alt) img.alt = alt;
          img.style.opacity = '1';
        };
        preload.src = src;
      });
    });
  });

  /* ---------- Tilt (desktop saja) ---------- */
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (canHover && !prefersReduced) {
    document.querySelectorAll('[data-tilt]').forEach(function (card) {
      var strength = parseFloat(card.getAttribute('data-tilt')) || 4;
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform =
          'perspective(900px) rotateX(' + (-y * strength).toFixed(2) + 'deg)' +
          ' rotateY(' + (x * strength).toFixed(2) + 'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  /* ---------- Tahun footer ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
