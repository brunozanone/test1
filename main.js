let menuBtn = document.getElementById('menu-btn');
let navMenu = document.getElementById('nav-menu');
navMenu.classList.remove('show');

menuBtn.addEventListener('click',()=>{
    navMenu.classList.toggle('show');
//     navMenu.style.visibility == 'hidden' ? 
//     navMenu.style.visibility = 'visible' :
//     navMenu.style.visibility = 'hidden';
});



ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});
ScrollReveal().reveal('.social', {delay: 500});
ScrollReveal().reveal('.footer', {delay: 500});
// ScrollReveal().reveal('.news-cards');
// ScrollReveal().reveal('.news-cards');
// ScrollReveal().reveal('.news-cards');