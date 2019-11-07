

const icon = document.querySelector(".icon");
const iconClose = document.querySelector('#icon-close');
const menu = document.querySelector('.sidenav');
const overlayButton = document.querySelector('.over-close');
const page = document.querySelector("body");
const btnFeature1 = document.querySelector("#btnFeature-1");
const btnFeature2 = document.querySelector("#btnFeature-2");
const btnSignup = document.querySelector("#btnSignup");
let responsiveFlag = false;
var slideIndex = 0;
//console.log(menu);

//document.addEventListener('onload', showAnnouncement);
window.onload = setTimeout(showAnnouncement,2000);
showSlides();
icon.addEventListener('click', controlSidebar);
iconClose.addEventListener('click', controlSidebar);
overlayButton.addEventListener('click', closeAnnouncement);
btnFeature1.addEventListener('click', function () {goToFeature('#feature-1')});
btnFeature2.addEventListener('click', function () {goToFeature('#feature-2')});
btnSignup.addEventListener('click', function () {goToFeature('#sign-up')});

function goToFeature(arg) {
    console.log("arg");
    document.querySelector(arg).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

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

function showSlides() {
    var i;
    var slides = document.querySelectorAll('figure img');
    //console.log(slides);

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000); //change image every 2 seconds 
}

function showAnnouncement(){
    var overlay = document.querySelector(".overlay");
    var bar = document.querySelector("nav.menu");
    overlay.classList.add('display');
    /*overlay.style.display = "block";*/
    setTimeout(() => {overlay.style.opacity = 1}, 10);
    console.log("showed");
}


function closeAnnouncement(){
    var overlay = document.querySelector(".overlay");
    var bar = document.querySelector("nav.menu");
    //overlay.style.display = "none";
    overlay.classList.remove('display');
}