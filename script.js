// mobile menu
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
}));

// show portrait only if the photo file exists
const portrait = document.querySelector('.portrait');
const img = portrait.querySelector('img');
function check() {
  if (img.complete && img.naturalWidth > 0) portrait.classList.add('has-photo');
  else img.style.display = 'none';
}
img.addEventListener('load', check);
img.addEventListener('error', () => { img.style.display = 'none'; });
if (img.complete) check();

// footer year
document.getElementById('year').textContent = new Date().getFullYear();
