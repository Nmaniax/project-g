

const icon = document.querySelector(".icon");
const iconClose = document.querySelector('#icon-close');
const menu = document.querySelector('.sidenav');
let responsiveFlag = false;
var slideIndex = 0;
//console.log(menu);

document.cookie = "SameSite=Strict; Secure";
icon.addEventListener('click', controlSidebar);
iconClose.addEventListener('click', controlSidebar);


function menuDisplay(){
    menu.classList.toggle('responsive');
    if(!responsiveFlag){
        responsiveFlag = true;
        icon.innerHTML = '&#9776'
    } else {
        responsiveFlag = false;
        icon.innerHTML = '✖';
    }
}

function controlSidebar(){
    if(!responsiveFlag){
        responsiveFlag = true;
        menu.style.width = '200px';
    } else {
        responsiveFlag = false;
        menu.style.width = '0';
    }
}
