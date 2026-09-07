document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('mainNav').classList.toggle('open');
});

const logoImg = document.getElementById('logoImg');
logoImg.addEventListener('click', () => {
  logoImg.classList.remove('logo-pulse');
  void logoImg.offsetWidth;
  logoImg.classList.add('logo-pulse');
});
logoImg.addEventListener('animationend', () => {
  logoImg.classList.remove('logo-pulse');
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mainNav').classList.remove('open');
  });
});
