var elModalOpenButton = document.querySelector(".site-header__hamburger");
var elModalOpenlink = document.querySelector(".site-header");

elModalOpenButton.addEventListener("click", function (){
    elModalOpenlink.classList.toggle("site-header__left--active");
})