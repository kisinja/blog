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

document.addEventListener('mousemove', moveElement);

function moveElement(e) {
    const element = document.getElementById('element');
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    element.style.left = mouseX + 'px';
    element.style.top = mouseY + 'px';
}