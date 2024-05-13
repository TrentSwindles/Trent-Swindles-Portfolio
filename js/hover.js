/* CARD 1 */

gsap.set('.cursor',{xPercent:-50, yPercent: -50});

    let cursor = document.querySelector('.cursor')
    let text = document.querySelector('.project-card-1-text')
    let card = document.querySelector('.project-card-1')

    let mouseX;
    let mouseY;

    window.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        gsap.to(cursor, {x: mouseX, y:mouseY})
    });

    card.addEventListener('mouseenter', () => {
        gsap.to(text, 1, {
            opacity: 1,
            scale: 1,
            ease: Elastic.easeOut.config(1, 0.3)
        })
    });

    card.addEventListener('mousemove', () => {
        gsap.to(text, 1, {
            x: mouseX,
            y: mouseY
        })
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(text, 0.2, {
            opacity: 0
        })
    });

    /* CARD 2 */

    gsap.set('.cursor',{xPercent:-50, yPercent: -50});

    let text1 = document.querySelector('.project-card-2-text')
    let card1 = document.querySelector('.project-card-2')

    window.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        gsap.to(cursor, {x: mouseX, y:mouseY})
    });

    card1.addEventListener('mouseenter', () => {
        gsap.to(text1, 1, {
            opacity: 1,
            scale: 1,
            ease: Elastic.easeOut.config(1, 0.3)
        })
    });

    card1.addEventListener('mousemove', () => {
        gsap.to(text1, 1, {
            x: mouseX,
            y: mouseY
        })
    });

    card1.addEventListener('mouseleave', () => {
        gsap.to(text1, 0.2, {
            opacity: 0
        })
    });

    /* CARD 3 */

    gsap.set('.cursor',{xPercent:-50, yPercent: -50});

    let text2 = document.querySelector('.project-card-3-text')
    let card2 = document.querySelector('.project-card-3')

    window.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        gsap.to(cursor, {x: mouseX, y:mouseY})
    });

    card2.addEventListener('mouseenter', () => {
        gsap.to(text2, 1, {
            opacity: 1,
            scale: 1,
            ease: Elastic.easeOut.config(1, 0.3)
        })
    });

    card2.addEventListener('mousemove', () => {
        gsap.to(text2, 1, {
            x: mouseX,
            y: mouseY
        })
    });

    card2.addEventListener('mouseleave', () => {
        gsap.to(text2, 0.2, {
            opacity: 0,
        })
    });