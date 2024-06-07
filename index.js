menu = document.getElementsByClassName('toggle-menu')[0]
overlay = document.getElementsByClassName('menu-overlay')[0]
menu_draw = document.getElementsByClassName('menu-draw')[0]
nav_actions = document.querySelectorAll('.nav_action')


for (const nav_action of nav_actions) {
  nav_action.addEventListener('click',removeClassActive);
}


function addClassActive() {
  overlay.classList.add('active')
  menu_draw.classList.add('active')
}

function removeClassActive() {
  overlay.classList.remove('active')
  menu_draw.classList.remove('active')
}

overlay.addEventListener('click',removeClassActive);
menu.addEventListener('click',addClassActive);
