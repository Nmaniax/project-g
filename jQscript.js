var responsiveFlag = false;
var slideIndex = 0;

$(document).ready(function(){
    showAnnouncement();
    showSlides();
    $(".icon").click(function() {controlSidebar()});
    $(".over-close").click(function() {closeAnnouncement()});
});



function showAnnouncement(){
    $(".overlay").fadeIn();
    /*overlay.style.display = "block";
    overlay.classList.add('display');
    setTimeout(() => {overlay.style.opacity = 1}, 15);*/
    console.log("showed");
}

function showSlides() {
    var i;
    var slides = $(".slideshow-container figure img");
    //var slides = document.querySelectorAll('.slideshow-container figure img');
    console.log(slides.length);

    for (i = 0; i < slides.length; i++){
        $(slides[i]).css("display","none");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    $(slides[slideIndex - 1]).css("display","block");
    setTimeout(showSlides, 5000); //change image every 5 seconds 
}

function closeAnnouncement(){
    $(".overlay").fadeOut();
}

function controlSidebar(){
    if(!responsiveFlag){
        responsiveFlag = true;
        //menu.style.width = '170px';
    } else {
        responsiveFlag = false;
        //menu.style.width = '0';
    }
    $(".sidenav").toggleClass('showed');
}
