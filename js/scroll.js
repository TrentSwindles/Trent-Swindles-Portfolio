//Smooth Scroll
// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.project-card-1',
//     start: '-70% center',
//     end: '-15% center',
//     scrub: true
//   }
// });

// tl.to('.project-card-1', {
//   bottom: 0,
//   opacity: 1
// });



// let tl1 = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.project-card-2',
//     start: '-120% center',
//     end: '0% center',
//     scrub: true
//   }
// });

// tl1.to('.project-card-2', {
//   bottom: 0,
//   opacity: 1
// });



// let tl2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.project-card-3',
//     start: '-100% center',
//     end: '0% center',
//     scrub: true
//   }
// });

// tl2.to('.project-card-3', {
//   bottom: 0,
//   opacity: 1
// });

let tlh = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero-text',
    start: '40% center',
    end: '300% center',
    scrub: true
  }
});

tlh.to('.hero-text', {
  top: -200,
  opacity: 0
});

let ph = gsap.timeline({
  scrollTrigger: {
    trigger: '.project-hero-text',
    start: '40% center',
    end: '300% center',
    scrub: true
  }
});

ph.to('.project-hero-text', {
  top: -100,
  opacity: 0
});

let hat = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero-about',
    start: '60% center',
    end: '360% center',
    scrub: true
  }
});

hat.to('.hero-about', {
  top: -200,
  opacity: 0
});

let a1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.about-1',
    start: '-30% center',
    end: '20% center',
    scrub: true
  }
});

a1.to('.about-1', {
  bottom: 0,
  opacity: 1
});
let a2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.about-2',
    start: '-30% center',
    end: '20% center',
    scrub: true
  }
});

a2.to('.about-2', {
  bottom: 0,
  opacity: 1
});
let a3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.about-3',
    start: '-30% center',
    end: '20% center',
    scrub: true
  }
});

a3.to('.about-3', {
  bottom: 0,
  opacity: 1
});

let jc1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.job-card-1',
    start: '-200% center',
    end: '0% center',
    scrub: true
  }
});

jc1.to('.job-card-1', {
  bottom: 0,
  opacity: 1
});
let jc2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.job-card-2',
    start: '-220% center',
    end: '-50% center',
    scrub: true
  }
});

jc2.to('.job-card-2', {
  bottom: 0,
  opacity: 1
});

// let phi = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.project-hero-img',
//     start: '-150% center',
//     end: 'bottom center',
//     markers: true,
//     scrub: true
//   }
// });

// phi.to('.project-hero-img', {
//   bottom: 500,
//   opacity: 0
// });

// let slideUp1 = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.slide-up-1',
//     start: '-180% center',
//     end: '-30% center',
//     scrub: true,
//     markers: true
//   }
// });
// slideUp1.to('.slide-up-1', {
//   bottom: 0,
//   opacity: 1
// });

// let slideUpImg1 = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.slide-up-img-1',
//     start: '-50% center',
//     end: '0% center',
//     scrub: true,
//     markers: true
//   }
// });
// slideUpImg1.to('.slide-up-img-1', {
//   bottom: 0,
//   opacity: 1
// });

// let slideUpImg2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.slide-up-img-2',
//     start: '-50% center',
//     end: '0% center',
//     scrub: true,
//     markers: true
//   }
// });
// slideUpImg2.to('.slide-up-img-2', {
//   bottom: 0,
//   opacity: 1
// });

// let slideUp2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.slide-up-2',
//     start: '-60% center',
//     end: '0% center',
//     scrub: true,
//     markers: true
//   }
// });

// slideUp2.to('.slide-up-2', {
//   bottom: 0,
//   opacity: 1
// });

// let slideUpSml = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.slide-up-small',
//     start: '-80% center',
//     end: '10% center',
//     scrub: true,
//     markers: true
//   }
// });

// slideUpSml.to('.slide-up-small', {
//   bottom: 0,
//   opacity: 1
// });

// let slideUp3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.slide-up-3',
//     start: '-80% center',
//     end: '10% center',
//     scrub: true,
//     markers: true
//   }
// });

// slideUps.to('.slide-up-3', {
//   bottom: 0,
//   opacity: 1
// });