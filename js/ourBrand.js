let menu = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navBar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
}
