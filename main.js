new TypeIt(".text", {
    strings: "Frontend Developer",
    speed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
}).go();

const backToTopBtn = document.querySelector('.top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});