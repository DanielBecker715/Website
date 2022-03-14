
const menubutton = document.querySelector('.menu-button');
let menuOpen = false;

var elems = document.getElementById('menu');

menubutton.addEventListener('click', () => {
  if (!menuOpen){
    menubutton.classList.add('open');
    menuOpen = true;
    document.getElementById('menu').style.display = "block";
  } else {
    menubutton.classList.remove('open');
    menuOpen = false;
    document.getElementById('menu').style.display = "none";
  }
});

function removeMenu(x){
  if (x.matches) {
   document.getElementById('menu').style.display = "none";
   menubutton.classList.remove('open');
   menuOpen = false;
  }
}

var x = window.matchMedia("(min-width: 1256px)");
x.addListener(removeMenu);
