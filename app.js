let humburger = document.querySelector(".humburger");
let times = document.querySelector(".times");
let mobileNav = document.querySelector(".mobileNav");

humburger.addEventListener('click',function(){
    mobileNav.classList.toggle('open')
})
humburger.addEventListener('blur',function(){
    mobileNav.classList.remove('open')
})
