var elModalOpenButton = document.querySelector(".site-header__btn");
var elModalOpenlink = document.querySelector(".site-header");

elModalOpenButton.addEventListener("click", function (){
    elModalOpenlink.classList.toggle("site-header--open");
})