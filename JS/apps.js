let Btn = document.querySelector('.navBtn');
let side = document.querySelector('.sidebar');

function openside() {
  side.classList.add('active');
}

Btn.addEventListener('click', openside);

let crs = document.querySelector('.crsBtn');

function removeside(event) {
  if (
    event.target.classList.contains('crsBtn') ||
    event.target.classList.contains('sidebar')
  ) {
    side.classList.remove('active');
  } else {
    return false;
  }
}

crs.addEventListener('click', removeside);
side.addEventListener('click', removeside);

let dark = document.querySelector('darks');
let body = document.querySelector('body');

dark.addEventListener('click', () => {
  body.classList.add('dark');
});
