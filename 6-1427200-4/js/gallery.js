// ==========================
// MODAL DE IMÁGENES
// ==========================

function viewImage(src) {
  const modal = document.getElementById('image-modal');
  const img = document.getElementById('modal-image');

  if (!modal || !img) return;

  img.src = src;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('image-modal');
  if (!modal) return;

  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// ==========================
// CAMBIO DE IMAGEN PRINCIPAL
// ==========================

function toExchangeImage(element) {
  const mainImg = document.getElementById('img_main');
  const img = element.querySelector('img');

  if (!mainImg || !img) return;

  mainImg.style.opacity = '0.5';

  setTimeout(() => {
    mainImg.src = img.src;
    mainImg.style.opacity = '1';
  }, 150);

  document.querySelectorAll('.thumb-box').forEach(t => {
    t.classList.remove('border-blue-600', 'border-2');
    t.classList.add('border-gray-200', 'border');
  });

  element.classList.remove('border-gray-200', 'border');
  element.classList.add('border-blue-600', 'border-2');
}
