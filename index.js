function toggleNav() {
  const hamburgerElement = document.getElementById('KrabbyPatty');
  const closeElement = document.getElementsByClassName('close-btn')[0];
  const mobileLinksElement = document.getElementsByClassName('menu-sections')[0];
  hamburgerElement.classList.toggle('isHidden');
  closeElement.classList.toggle('isHidden');
  mobileLinksElement.classList.toggle('isHidden');
}

document.getElementById('KrabbyPatty').addEventListener('click', toggleNav);
document.getElementsByClassName('close-btn')[0].addEventListener('click', toggleNav);
document.getElementsByClassName('menu-sections')[0].addEventListener('click', toggleNav);