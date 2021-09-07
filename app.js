let humburger = document.querySelector(".humburger");
let times = document.querySelector(".times");
let mobileNav = document.querySelector(".mobileNav");
// humburger.addEventListener('click',function(){
//     mobileNav.classList.add('open')
// })
humburger.addEventListener('click',function(){
    mobileNav.classList.toggle('open')
})
// times.addEventListener('click',function(){
//     mobileNav.classList.remove('open')
// })
