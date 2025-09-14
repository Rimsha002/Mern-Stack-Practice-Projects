let menu = document.querySelector('.menu-list');
let nav_list = document.querySelector('.nav-list');

menu.onClick = () => {
    menu.classList.toggle('.menu-list');
    nav_list.classList.toggle('open');
}
