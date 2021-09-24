var t1 = gsap.timeline();
var query = window.matchMedia('(min-width: 992px)');

if (query.matches){
    t1.from('#card-4', {x:-950, duration:1})
    .from('#card-3', {x:-645, duration:0.75}, )
    .from('#card-2', {x:-322, duration:0.5}, );
}

