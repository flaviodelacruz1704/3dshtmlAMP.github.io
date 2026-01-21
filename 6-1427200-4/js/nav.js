document.addEventListener('DOMContentLoaded', () => {
  loadNavbar();
  initMobileMenu();
  initSearchModal();
});

/* =====================
   NAVBAR
===================== */

function loadNavbar() {
  fetch('./components/navbar.html')
    .then(res => res.text())
    .then(html => document.body.insertAdjacentHTML('afterbegin', html))
    .catch(err => console.error('Navbar error:', err));
}

/* =====================
   MENÚ MÓVIL
===================== */

function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('menu-overlay');
  const close = document.getElementById('close-menu');

  if (!btn || !menu) return;

  btn.addEventListener('click', open);
  overlay?.addEventListener('click', closeMenu);
  close?.addEventListener('click', closeMenu);

  function open() {
    menu.classList.remove('-translate-x-full');
    overlay?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.add('-translate-x-full');
    overlay?.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

/* =====================
   MODAL DE BÚSQUEDA
===================== */

function initSearchModal() {
  const modal = document.getElementById('search-modal');
  const openBtns = [
    document.getElementById('search-button'),
    document.getElementById('mobile-search-button')
  ];
  const closeBtn = document.getElementById('close-search');

  if (!modal) return;

  openBtns.forEach(btn =>
    btn?.addEventListener('click', () => openModal())
  );

  closeBtn?.addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  function openModal() {
    modal.classList.remove('none');
    modal.classList.add('anim');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('none');
    document.body.style.overflow = '';
  }
}
