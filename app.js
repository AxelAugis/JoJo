const jojo = new SplitType(".jojoSpan");

const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to(jojo.chars, {
    y: 0, 
    stagger: 0.05, 
    delay: 0.3,
    duration: .1, 
})
.to('.baSpan span', {
    y: -300, 
    stagger: 0.15,
    delay: 0.1,
    duration: 1,
})
.to('.wrapper div', {
    y: "0%",
    duration: .5,
    stagger: 0.2,
    delay: 0.5,
})
.to('.jojoImg', {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.25
})
