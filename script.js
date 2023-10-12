const navbar = document.querySelector('.navbar');
const dotsBtn = document.querySelector('.dots-btn');

dotsBtn.addEventListener('click', () => {
    navbar.classList.toggle('change');
})