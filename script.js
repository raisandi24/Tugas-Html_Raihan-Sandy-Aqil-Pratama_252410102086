/* ==========================================================
   KAYU & KABUT — script.js
   Fitur: sticky header on scroll, mobile nav toggle,
   filter menu produk, slider testimoni, validasi form.
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. HEADER: berubah saat discroll ---------- */
  const header = document.getElementById('siteHeader');
  const onScroll = function () {
    if (window.scrollY > 12) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };
  document.addEventListener('scroll', onScroll);
  onScroll();

  /* ---------- 2. NAVIGASI MOBILE ---------- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  navToggle.addEventListener('click', function () {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Tutup menu mobile setiap kali sebuah link navigasi diklik
  mainNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- 3. FILTER MENU PRODUK ---------- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const menuCards = document.querySelectorAll('.menu-card');
  const menuEmpty = document.getElementById('menuEmpty');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Ubah status tombol aktif
      filterButtons.forEach(function (b) {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.dataset.filter;
      let visibleCount = 0;

      menuCards.forEach(function (card) {
        const match = filter === 'semua' || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });

      menuEmpty.hidden = visibleCount !== 0;
    });
  });

  /* ---------- 4. SLIDER TESTIMONI ---------- */
  const track = document.getElementById('testiTrack');
  const slides = Array.from(track.children);
  const dotsWrap = document.getElementById('testiDots');
  const prevBtn = document.getElementById('testiPrev');
  const nextBtn = document.getElementById('testiNext');
  let current = 0;

  // Buat titik indikator (dots) secara dinamis sesuai jumlah slide
  slides.forEach(function (_, i) {
    const dot = document.createElement('span');
    dot.setAttribute('role', 'button');
    dot.setAttribute('aria-label', 'Ke testimoni ' + (i + 1));
    if (i === 0) dot.classList.add('is-active');
    dot.addEventListener('click', function () { goTo(i); });
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots.forEach(function (d, i) {
      d.classList.toggle('is-active', i === current);
    });
  }

  prevBtn.addEventListener('click', function () { goTo(current - 1); });
  nextBtn.addEventListener('click', function () { goTo(current + 1); });

  /* ---------- 5. VALIDASI FORM KONTAK ---------- */
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  const fields = {
    fName: { el: document.getElementById('fName'), err: document.getElementById('errName') },
    fEmail: { el: document.getElementById('fEmail'), err: document.getElementById('errEmail') },
    fMessage: { el: document.getElementById('fMessage'), err: document.getElementById('errMessage') }
  };

  function setError(field, message) {
    field.el.classList.add('has-error');
    field.err.textContent = message;
  }
  function clearError(field) {
    field.el.classList.remove('has-error');
    field.err.textContent = '';
  }

  function validate() {
    let valid = true;

    if (fields.fName.el.value.trim().length < 2) {
      setError(fields.fName, 'Nama minimal 2 karakter.');
      valid = false;
    } else {
      clearError(fields.fName);
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(fields.fEmail.el.value.trim())) {
      setError(fields.fEmail, 'Masukkan alamat email yang valid.');
      valid = false;
    } else {
      clearError(fields.fEmail);
    }

    if (fields.fMessage.el.value.trim().length < 10) {
      setError(fields.fMessage, 'Pesan minimal 10 karakter.');
      valid = false;
    } else {
      clearError(fields.fMessage);
    }

    return valid;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    formSuccess.hidden = true;

    if (validate()) {
      formSuccess.hidden = false;
      form.reset();
      Object.values(fields).forEach(clearError);
    }
  });

  // Bersihkan pesan error saat pengguna mulai mengetik ulang
  Object.values(fields).forEach(function (field) {
    field.el.addEventListener('input', function () { clearError(field); });
  });

  /* ---------- 6. TOMBOL KEMBALI KE ATAS ---------- */
  const backTop = document.getElementById('backTop');
  backTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});
