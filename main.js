// ===================STICKY NAV==========================
window.onscroll = function() {scrollMenu()};
var header = document.getElementById("nav-menu");
var sticky = header.offsetTop;
var logo = document.querySelector('.logo')
function scrollMenu() {
  if (window.pageYOffset > sticky) {
    logo.style.width = '70px'
    header.classList.add("scroll");
  } else {
    logo.style.width = '100px'
    header.classList.remove("scroll");
  }
}

var openMenu = document.querySelector('.btn-menu')
var closeBtn = document.querySelector('.btn-close')
var menu = document.querySelector('.links')

openMenu.addEventListener('click', ()=>{
  menu.classList.add('active')
})

closeBtn.addEventListener('click', ()=>{
  menu.classList.remove('active')
})