// anim
setTimeout(() => {
    const box = document.querySelector(".preloader");

    // 👇️ removes element from DOM
    box.classList.add("hide");

    // 👇️ hides element (still takes up space on page)
    // box.style.visibility = 'hidden';
}, 500); // 👈️ time in milliseconds
setTimeout(() => {
    const box = document.querySelector(".preloader");

    // 👇️ removes element from DOM
    box.classList.add("none");

    // 👇️ hides element (still takes up space on page)
    // box.style.visibility = 'hidden';
}, 1900); // 👈️ time in milliseconds

// add btn

var node = document.querySelector(".welcome-paper-button"),
    ele = document.createElement("a");

ele.className = "pankeswap";
ele.innerHTML = "Pankeswap";
node.parentNode.insertBefore(ele, node.nextSibling);
ele.setAttribute("href", "faq.html");

// add btn
// add btn

var node = document.querySelector(".welcome-head"),
    ele = document.createElement("img");

ele.className = "img-head";
ele.innerHTML = "";
node.parentNode.insertBefore(ele, node.nextSibling);
ele.setAttribute("href", "faq.html");
ele.setAttribute("src", "img/logo-2.webp");

// add btn

// add class
const texts = document.querySelectorAll(".mobile-btn"); // выбираем все .block-menu-link
const lefelBlock = document.querySelectorAll(".mobile__menu"); //выбираем все .lefel-block
const header__logo = document.querySelectorAll(".header__logo"); //выбираем все .lefel-block

texts.forEach((text) => {
    // перебираем все .block-menu-link
    text.onclick = () => {
        //  назначаем каждому из .block-menu-link
        lefelBlock.forEach((item) => {
            // перебираем все .lefel-block
            item.classList.add("active"); // назначаем у .lefel-block новый класс
        });
        header__logo.forEach((item) => {
            // перебираем все .lefel-block
            item.classList.add("active"); // назначаем у .lefel-block новый класс
        });
    };
});
// delete class
const close = document.querySelectorAll(".close"); // выбираем все .block-menu-link
close.forEach((text) => {
    // перебираем все .block-menu-link
    text.onclick = () => {
        //  назначаем каждому из .block-menu-link
        lefelBlock.forEach((item) => {
            // перебираем все .lefel-block
            item.classList.remove("active"); // назначаем у .lefel-block новый класс
        });
        header__logo.forEach((item) => {
            // перебираем все .lefel-block
            item.classList.remove("active"); // назначаем у .lefel-block новый класс
        });
    };
}); // добавить класс
/* Для фиксации меню при скроле вниз */
window.addEventListener('DOMContentLoaded', function() {
    const scrollUpButton = document.querySelector('.to-top');

    if (scrollUpButton) {
        scrollUpButton.addEventListener('click', function name() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });

        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset || document.documentElement.scrollTop;

            if (scrolled >= 300) {
                scrollUpButton.classList.add('backToTop_visible');
            } else {
                scrollUpButton.classList.remove('backToTop_visible');
            }
        });
    }
});