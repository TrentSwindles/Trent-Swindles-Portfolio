// console.log(document.body.scrollHeight);
// console.log(window.innerHeight);

let fullHeight=document.body.scrollHeight-window.innerHeight;
console.log(fullHeight);

window.addEventListener("scroll", function() {
    let scroll = window.scrollY;

    let fullHeight = document.documentElement.scrollHeight - window.innerHeight;
    let progress = (scroll / fullHeight) * 100;
    document.getElementById("bar").style.width = `${progress}vw`;

    // console.log(scroll);
});