const navBar = document.querySelector('nav');
const menu = document.querySelector('.menu');
const accBtn = document.querySelector('.account');
const links = document.querySelectorAll('#menu-links');

console.log(accBtn);
console.log(menu);
console.log(links);

accBtn.setAttribute('title', 'account');

accBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});


window.onscroll = () => {
    if (window.scrollY > 78) {
        navBar.style.backgroundColor = 'white';
        navBar.style.border = 'none';
    }
    else {
        navBar.style.background = "rgb(243 ,244 ,246)";
        navBar.style.borderBottom = '2px solid #e0e0e0';
    }
}

const element = document.getElementById('element');
element.style.zIndex = 100000000;
document.addEventListener('mousemove', moveElement);

function moveElement(e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    element.style.left = mouseX + 'px';
    element.style.top = mouseY + 'px';
}

const mobileMenu = document.querySelector(".mobile-menu");
const hamburger = document.querySelector('.hamburger');
const mobileLinks = document.querySelectorAll('.mobile-link');

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle('show-menu');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.toggle('show-menu');
    })
});

const logo = document.getElementsByClassName('logo');

logo.style.color = 'red';
