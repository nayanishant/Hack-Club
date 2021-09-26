const navSlide = () => {
    const burger = document.querySelector('.hamburger'); 
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');
        //Animate Links 
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

var t1 = gsap.timeline();
var query = window.matchMedia('(min-width: 992px)');

if (query.matches){
    t1.from('#card-4', {x:-950, duration:1})
    .from('#card-3', {x:-645, duration:0.75}, )
    .from('#card-2', {x:-322, duration:0.5}, );
}

