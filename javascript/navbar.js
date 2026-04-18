function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('aberto');
  document.getElementById('overlay').classList.toggle('ativo');
}

const btn = document.getElementById('hamburger');
const menu = document.getElementById('mobileMenu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  menu.classList.toggle('open');
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    btn.classList.remove('open');
    menu.classList.remove('open');
  });
});

const links = document.querySelectorAll('nav ul a, .mobile-menu a');
const currentPage = window.location.pathname.split('/').pop();

links.forEach(link => {
  const linkPage = link.getAttribute('href').split('/').pop();
  if (linkPage === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});