document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.menu');
  const toggle = document.querySelector('.toggle');

  toggle.addEventListener('click', function () {
    menu.classList.toggle('active');
  });
});