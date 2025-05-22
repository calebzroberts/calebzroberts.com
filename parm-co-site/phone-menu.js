const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const fullscreenMenu = document.getElementById('fullscreenMenu');

openMenu.addEventListener('click', () => {
  fullscreenMenu.classList.add('show');
});

closeMenu.addEventListener('click', () => {
  fullscreenMenu.classList.remove('show');
});
